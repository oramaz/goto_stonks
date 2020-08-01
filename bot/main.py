import telebot
import datetime
import json
import requests

token = "914437279:AAFR6BIfw3B7JbdZaEnAMNL1boarkUnLMoc"

bot = telebot.TeleBot(token)
ip = "http://192.168.245.38:8000"
news = []

def send_data(paragraph, time, name):
    url = ip + "/add_paragraph/"
    myobj = {"text" : paragraph, "time" : time, "name" : name}
    x = requests.post(url, data=myobj)
    print(x)


@bot.message_handler(content_types=['text'])
def get_news(message):
    global news
    if "#stonks" in message.text:
        news_content = message.text.replace("#stonks", "").strip()
        if news_content:
            stamp = str(datetime.datetime.utcnow())
            name = message.from_user.username
            send_data(news_content, stamp, name)
            # news += [{"content": news_content, "timestamp": stamp}]
            # update_news(news)
        # bot.send_message(message.from_user.id,
        #                  message.text.replace("#stonks", ""))


def update_news(news):
    print(json.dumps(news))
    data = json.dumps(news, ensure_ascii=False).encode("utf-8")
    # print(data.decode("utf-8"))
    with open("../app/news.json", "w", encoding="utf-8") as f:
        f.write(data.decode("utf-8"))


@bot.message_handler(content_types=['document', 'audio', 'photo'])
def get_photos(message):
    global news
    if "#stonks" in message.caption:
        news_content = message.caption.replace("#stonks", "").strip()
        if news_content:
            stamp = str(datetime.datetime.utcnow())
            name = message.from_user.username
            send_data(news_content, stamp, name)
        # bot.send_message(message.from_user.id,
        #                  message.caption.replace("#stonks", ""))


bot.polling(none_stop=True, interval=0)
