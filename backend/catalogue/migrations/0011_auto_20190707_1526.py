# Generated by Django 2.2.3 on 2019-07-07 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogue', '0010_auto_20190707_1509'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='barcode',
            field=models.CharField(max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='book',
            name='title',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]