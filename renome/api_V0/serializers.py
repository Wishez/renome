# -*- coding: utf-8 -*-
from rest_framework import serializers
from app.models import *

# class BackgroundSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PatternGroup
#         fields = (
#             'id',
#             'url',
#             '',
#             'height',
#         )



class PatternGroupDetailSerializer(serializers.ModelSerializer):

    background = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='url'
    )

    ordering = ['-id']
    class Meta:
        model = PatternGroup
        fields = [
            'id',
            'block',
            'background',
            'img_1',
            'img_2',
            'img_3',
            'img_4',
        ]
