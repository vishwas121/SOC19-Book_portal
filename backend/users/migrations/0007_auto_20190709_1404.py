# Generated by Django 2.2.3 on 2019-07-09 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20190707_1617'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='roll_no',
            field=models.CharField(db_index=True, max_length=20, unique=True),
        ),
    ]
