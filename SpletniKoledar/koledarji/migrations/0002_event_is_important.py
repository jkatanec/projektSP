# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-12-17 16:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('koledarji', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='is_important',
            field=models.BooleanField(default=False),
        ),
    ]
