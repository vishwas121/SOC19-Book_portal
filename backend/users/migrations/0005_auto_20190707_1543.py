# Generated by Django 2.2.3 on 2019-07-07 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20190707_1526'),
    ]

    operations = [
        migrations.AlterField(
            model_name='circulation',
            name='issue_date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]
