# Generated by Django 5.0.3 on 2024-04-03 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Country",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("country_name", models.CharField(max_length=50)),
                ("code", models.CharField(max_length=50)),
            ],
        ),
    ]