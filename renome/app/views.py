# -*- coding: utf-8 -*-
# import sys
# encoding='utf-8'
# reload(sys)
# sys.setdefaultencoding(encoding)

from django.shortcuts import render
from .models import *
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import EmailMessage

# Create your views here.
def index(request):
    template = 'index.html'
    context = {}
    return render(request, template, context)

@csrf_exempt
def order(request):
    if request.method == 'POST':
        data = request.POST

        order = Order(name=data['name'],
                      phone=data['phone'],
                      email=data['email'],
                      service=data['service'],
                      comment=data['comment']
                )
        order.save()

        orderMsg = '%s\n%s\n%s\n%s\n%s' % (data['name'], data['email'], data['service'], data['phone'], data['comment'])
        EmailMessage('web-renome.ru Order', orderMsg, to=['shiningfinger@list.ru']).send()

        respond = '<div class="text-center success"><h2 class=" success__title title">До связи!</h2><p class="success__paragraph paragraph">Скоро мы свяжимся с вами.</p>'

        return HttpResponse(respond)
    return HttpResponse('Что-то пошло не так.')
@csrf_exempt
def message(request):
    if request.method == 'POST':
        data = request.POST
        message = Message(name=data['name'],
                      email=data['email'],
                      message=data['message']
                )
        message.save()
        orderMsg = '%s\n%s\n%s' % (data['name'], data['email'], data['message'])
        EmailMessage('web-renome.ru Message', orderMsg, to=['shiningfinger@list.ru']).send()

        respond = '<div class="successfulyConnect text-center" style="margin-top: 10em;"> \
                  <h2 class="successfulyConnect__title title" style="font-size: 2.5em;">Связь установленна!</h2> \
                  <p class="successfulyConnect__paragraph paragraph" style="font-size: 1.2em; max-width: none;">Мы будем рады обсудить с вами то, что вам интересно.</p>'

        return HttpResponse(respond)
    return HttpResponse('Что-то пошло не так.')