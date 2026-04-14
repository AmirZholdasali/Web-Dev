from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views_main import CategoryViewSet, ProductViewSet
from api.views.fbv import products_list, product_detail
from api.views.cbv import ProductListAPIView, ProductDetailAPIView
from api.views.mixins import ProductListMixin, ProductDetailMixin
from api.views.generics import ProductListGeneric, ProductDetailGeneric

router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('fbv/products/', products_list),
    path('fbv/products/<int:product_id>/', product_detail),
    path('cbv/products/', ProductListAPIView.as_view()),
    path('cbv/products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('mixins/products/', ProductListMixin.as_view()),
    path('mixins/products/<int:product_id>/', ProductDetailMixin.as_view()),
    path('generics/products/', ProductListGeneric.as_view()),
    path('generics/products/<int:product_id>/', ProductDetailGeneric.as_view()),
]