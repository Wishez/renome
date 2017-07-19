# -*- coding: utf-8 -*-
from rest_framework import serializers
from app.models import PatternGroup

class PatternGroupDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatternGroup
        fields = [
            'block',
            'background',
            'img_1',
            'img_2',
            'img_3',
            'img_4',
        ]
