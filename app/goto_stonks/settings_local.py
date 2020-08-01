# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases
import os
import os.path
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

SECRET_KEY = 'goto-stonks'
ALLOWED_HOSTS = ['127.0.0.1', '192.168.235.10', '192.168.245.38', '192.168.235.43', 'localhost', '192.168.235.23' ]
DEBUG = True
APPEND_SLASH=False