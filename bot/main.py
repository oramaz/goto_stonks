import telebot
import datetime
import json
import sqlite3

conn = sqlite3.connect("../app/db.sqlite3")

cursor = conn.cursor()

token = "914437279:AAFR6BIfw3B7JbdZaEnAMNL1boarkUnLMoc"

bot = telebot.TeleBot(token)

news = []

@bot.message_handler(content_types=['text'])
def get_news(message):
    global news
    if "#stonks" in message.text:
        news_content = message.caption.replace("#stonks", "").strip()
        if news_content:
            stamp = str(datetime.datetime.utcnow())
            news += [{"content" : news_content, "timestamp" : stamp}]
            update_news(news)
        # bot.send_message(message.from_user.id,
        #                  message.text.replace("#stonks", ""))

def update_news(news):
    print(json.dumps(news))
    data = json.dumps(news, ensure_ascii=False).encode("utf-8")
    print(data.decode("utf-8"))
    with open("news.json", "w", encoding="utf-8") as f:
        f.write(data.decode("utf-8"))

@bot.message_handler(content_types=['document', 'audio', 'photo'])
def get_photos(message):
    global news
    if "#stonks" in message.caption:
        news_content = message.caption.replace("#stonks", "").strip()
        if news_content:
            stamp = str(datetime.datetime.utcnow())
            news += [{"content" : news_content, "timestamp" : stamp}]
            update_news(news)
        # bot.send_message(message.from_user.id,
        #                  message.caption.replace("#stonks", ""))


bot.polling(none_stop=True, interval=0)
conn.close()