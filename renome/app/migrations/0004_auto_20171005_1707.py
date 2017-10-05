# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-10-05 14:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_patterngroup_background'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patterngroup',
            name='background',
            field=models.ImageField(blank=True, null=True, upload_to='patterns/backgrounds/', verbose_name='Фон'),
        ),
        migrations.AlterField(
            model_name='patterngroup',
            name='img_1',
            field=models.ImageField(blank=True, null=True, upload_to='patterns/', verbose_name='Изображение Шаблона'),
        ),
        migrations.AlterField(
            model_name='patterngroup',
            name='img_2',
            field=models.ImageField(blank=True, null=True, upload_to='patterns/', verbose_name='Изображение Шаблона'),
        ),
        migrations.AlterField(
            model_name='patterngroup',
            name='img_3',
            field=models.ImageField(blank=True, null=True, upload_to='patterns/', verbose_name='Изображение Шаблона'),
        ),
        migrations.AlterField(
            model_name='patterngroup',
            name='img_4',
            field=models.ImageField(blank=True, null=True, upload_to='patterns/', verbose_name='Изображение Шаблона'),
        ),
    ]