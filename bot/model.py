from peewee import *

db = SqliteDatabase("../app/db.sqlite3")


class News(Model):
    text = TextField()
    date = DateField()

    class Meta:
        database = db
