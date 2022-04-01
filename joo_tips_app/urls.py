from django.urls import path

from .views import homepage, who_we_are, how_we_work, lets_try_it, for_teams, for_schools, \
    programing_language_choice, python_themes_time, python_themes_time_guests, golang_themes_time, \
    javascript_themes_time, python_theoretical_test, python_practical_test, login
from .views_ua import homepage_ua, who_we_are_ua, how_we_work_ua, lets_try_it_ua, for_teams_ua, for_schools_ua, \
    programing_language_choice_ua, python_themes_time_ua, python_themes_time_guests_ua, golang_themes_time_ua,\
    javascript_themes_time_ua, python_theoretical_test_ua, python_practical_test_ua, login_ua


url_patterns = [
    path('', homepage, name='homepage'),
    path('ua/', homepage_ua, name='homepage_ua'),

    path('who-we-are/', who_we_are, name='who_we_are'),
    path('how-we-work/', how_we_work, name='how_we_work'),
    path('lets-try-it/', lets_try_it, name='lets_try_it'),
    path('for-teams/', for_teams, name='for_teams'),
    path('for-schools/', for_schools, name='for_schools'),
    path('programing-language-choice/', programing_language_choice, name='programing_language_choice'),

    path('py/themes-time-guests/', python_themes_time_guests, name='python_themes_time_guests'),
    path('py/themes-time/', python_themes_time, name='python_themes_time'),
    path('py/theoretical-test/', python_theoretical_test, name='python_theoretical_test'),
    path('py/practical-test/', python_practical_test, name='python_practical_test'),

    path('login/', login, name='login'),

    path('go/themes-time/', golang_themes_time, name='golang_themes_time'),

    path('js/themes-time/', javascript_themes_time, name='javascript_themes_time'),

    path('ua/who-we-are/', who_we_are_ua, name='who_we_are_ua'),
    path('ua/how-we-work/', how_we_work_ua, name='how_we_work_ua'),
    path('ua/lets-try-it/', lets_try_it_ua, name='lets_try_it_ua'),
    path('ua/for-teams/', for_teams_ua, name='for_teams_ua'),
    path('ua/for-schools/', for_schools_ua, name='for_schools_ua'),
    path('ua/programing-language-choice/', programing_language_choice_ua, name='programing_language_choice_ua'),

    path('ua/py/themes-time/', python_themes_time_ua, name='python_themes_time_ua'),
    path('ua/py/themes-time-guests/', python_themes_time_guests_ua, name='python_themes_time_guests_ua'),
    path('ua/py/theoretical-test/', python_theoretical_test_ua, name='python_theoretical_test_ua'),
    path('ua/py/practical-test/', python_practical_test_ua, name='python_practical_test_ua'),

    path('ua/login/', login_ua, name='login_ua'),

    path('ua/go/themes-time/', golang_themes_time_ua, name='golang_themes_time_ua'),

    path('ua/js/themes-time/', javascript_themes_time_ua, name='javascript_themes_time_ua'),
]
