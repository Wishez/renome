# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.utils.encoding import python_2_unicode_compatible
import sys

@python_2_unicode_compatible
class Order(models.Model):
    name = models.CharField(_('Имя Фамилия Отчество'), max_length=120)
    phone = models.CharField(_('Телефон'), max_length=120)
    email = models.CharField(_('E-mail'), max_length=120)

    services = (
        ('os', 'Интернет магазин'),
        ('ln', 'Лэндинг-пейдж'),
        ('pf', 'Портфолио'),
        ('ud', 'Универсальный дизайн'),
        ('cv', 'Увеличение конверсии'),
        ('sp', 'Поддержка сайта'),
    )
    service = models.CharField(_('Услуга'), choices=services, default='os', max_length=2)
    comment = models.TextField(_('Комментарий'), max_length=150)
    ordered_at = models.DateTimeField(_('Заказнно'), auto_now_add=True)

    def __str__(self):
        return self.name + '|' + self.ordered_at

    class Meta:
        ordering = ['-ordered_at']
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

@python_2_unicode_compatible
class Message(models.Model):
    name = models.CharField(_('Имя'), max_length=120)
    email = models.CharField(_('E-mail'), max_length=120)
    message = models.TextField(_('Сообщение'), max_length=350)
    connected_at = models.DateTimeField(_('Заказнно'), auto_now_add=True)

    def __str__(self):
        return self.name + ' | ' + str(self.connected_at)

    class Meta:
        ordering = ['-connected_at']
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'

@python_2_unicode_compatible
class PatternGroup(models.Model):
    block = models.CharField(_('Блок'), max_length=100)
    background = models.FileField(_('Фон'),
                                  upload_to='patterns/backgrounds/',
                                  null = True,
                                  blank = True
    )
    img_1 = models.FileField(_('Изображение Шаблона'),
                             upload_to='patterns/',
                             null=True,
                             blank=True
    )
    img_2 = models.FileField(_('Изображение Шаблона'),
                             upload_to='patterns/',
                             null=True,
                             blank=True
                             )
    img_3 = models.FileField(_('Изображение Шаблона'),
                             upload_to='patterns/',
                             null=True,
                             blank=True
                             )
    img_4 = models.FileField(_('Изображение Шаблона'),
                             upload_to='patterns/',
                             null=True,
                             blank=True
                             )


    def __str__(self):
        return self.block

    class Meta:
        verbose_name = 'Группа шаблонов'
        verbose_name_plural = 'Группы шаблонов'
# Create your models here.
