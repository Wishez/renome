# -*- coding: utf-8 -*-

from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'patterns', PatternGroupViewSet)

urlpatterns = router.urls