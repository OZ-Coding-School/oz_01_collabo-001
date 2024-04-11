#!/bin/sh

set -e

# python manage.py wait_for_db
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
# uwsgi --socket :9000 --workers 4 --master --enable-threads --module app.wsgi