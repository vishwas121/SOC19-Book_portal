# Generated by Django 2.2.3 on 2019-07-08 12:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogue', '0013_auto_20190708_1220'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='issue_date',
            field=models.DateField(blank=True),
        ),
    ]
