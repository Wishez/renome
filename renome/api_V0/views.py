# -*- coding: utf-8 -*-

from rest_framework import viewsets

from .serializers import *

class PatternGroupViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PatternGroup.objects.all()
    serializer_class = PatternGroupDetailSerializer
