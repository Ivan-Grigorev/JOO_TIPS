from django.urls import path

from .views import *
from .views_ua import *


urlpatterns = [
    path('', HomePage.as_view(), name='homepage'),
    path('ua/', HomePageUa.as_view(), name='homepage_ua'),

    path('programing-language-choice/', ProgrammingLanguageChoice.as_view(), name='programing_language_choice'),

    path('py/themes-time-guest/', PythonLessonTest.as_view(), name='themes_time_guest'),

    path('js/themes-time-guest/', JavaScriptLessonTest.as_view(), name='javascript_themes_time_guest'),

    path('go/themes-time-guest/', GolangLessonTest.as_view(), name='golang_themes_time_guest'),

    path('java/themes-time-guest/', JavaLessonTest.as_view(), name='java_themes_time_guest'),

    path('swift/themes-time-guest/', SwiftLessonTest.as_view(), name='swift_themes_time_guest'),

    path('php/themes-time-guest/', PhpLessonTest.as_view(), name='php_themes_time_guest'),

    path('c-sharp/themes-time-guest/', CsharpLessonTest.as_view(), name='c_sharp_themes_time_guest'),

    path('c-plus-plus/themes-time-guest/', CplusplusLessonTest.as_view(), name='c_plus_plus_themes_time-guest'),

    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='log_in'),
    path('logout', LogoutView.as_view(), name='log_out'),

    path('ua/programing-language-choice/', ProgrammingLanguageChoiceUa.as_view(), name='programing_language_choice_ua'),

    path('ua/py/themes-time-guest/', PythonLessonTestUa.as_view(), name='python_themes_time_guests_ua'),

    path('ua/js/themes-time-guest/', JavaScriptLessonTestUa.as_view(), name='javascript_themes_time_guest_ua'),

    path('ua/go/themes-time-guest/', GolangLessonTestUa.as_view(), name='golang_themes_time_guest_ua'),

    path('ua/java/themes-time-guest/', JavaLessonTestUa.as_view(), name='java_themes_time_guest_ua'),

    path('ua/swift/themes-time-guest/', SwiftLessonTest.as_view(), name='swift_themes_time_guest_ua'),

    path('ua/php/themes-time-guest/', PhpLessonTestUa.as_view(), name='php_themes_time_guest_ua'),

    path('ua/c-sharp/themes-time-guest/', CsharpLessonTestUa.as_view(), name='c_sharp_themes_time_guest_ua'),

    path('ua/c-plus-plus/themes-time-guest/', CplusplusLessonTestUa.as_view(), name='c_plus_plus_themes_time_guest_ua'),

    path('ua/register/', RegisterViewUa.as_view(), name='register_ua'),
    path('ua/login/', LoginViewUa.as_view(), name='log_in_ua'),
    path('ua/logout/', LogoutViewUa.as_view(), name='log_out_ua'),
]
