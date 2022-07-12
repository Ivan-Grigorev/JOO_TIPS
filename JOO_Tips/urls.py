"""JOO_Tips URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin

from django.urls import path
from django.conf.urls import include

from joo_tips_app.views import Error400Page, Error403Page, Error404Page, Error500Page


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('joo_tips_app.urls'))
]

handler400 = Error400Page.as_view()
handler403 = Error403Page.as_view()
handler404 = Error404Page.as_view()
handler500 = Error500Page.as_view()
