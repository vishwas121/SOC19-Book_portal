# Generated by Django 2.2.3 on 2019-07-06 16:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalogue', '0004_auto_20190706_1608'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='issue_date',
        ),
    ]
