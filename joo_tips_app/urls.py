from django.urls import path

from .views import homepage, who_we_are, how_we_work, lets_try_it, for_teams, for_schools, \
    programing_language_choice, python_themes_time, golang_themes_time, javascript_themes_time, python_test_tt_1
from .views_ua import homepage_ua, who_we_are_ua, how_we_work_ua, lets_try_it_ua, for_teams_ua, for_schools_ua, \
    programing_language_choice_ua, python_themes_time_ua, golang_themes_time_ua, javascript_themes_time_ua,\
    python_test_tt_1_ua


url_patterns = [
    path('', homepage, name='homepage'),
    path('ua/', homepage_ua, name='homepage_ua'),

    path('wwa/', who_we_are, name='who_we_are'),
    path('hww/', how_we_work, name='how_we_work'),
    path('lti/', lets_try_it, name='lets_try_it'),
    path('ft/', for_teams, name='for_teams'),
    path('fs/', for_schools, name='for_schools'),
    path('plc/', programing_language_choice, name='programing_language_choice'),
    path('py/tt/', python_themes_time, name='python_themes_time'),
    path('py/tt1/', python_test_tt_1, name='python_test_tt_1'),
    path('go/tt/', golang_themes_time, name='golang_themes_time'),
    path('js/tt', javascript_themes_time, name='javascript_themes_time'),

    path('ua/wwa/', who_we_are_ua, name='who_we_are_ua'),
    path('ua/hww/', how_we_work_ua, name='how_we_work_ua'),
    path('ua/lti/', lets_try_it_ua, name='lets_try_it_ua'),
    path('ua/ft/', for_teams_ua, name='for_teams_ua'),
    path('ua/fs/', for_schools_ua, name='for_schools_ua'),
    path('ua/plc/', programing_language_choice_ua, name='programing_language_choice_ua'),
    path('ua/py/tt/', python_themes_time_ua, name='python_themes_time_ua'),
    path('ua/py/tt1/', python_test_tt_1_ua, name='python_test_tt_1_ua'),
    path('ua/go/tt/', golang_themes_time_ua, name='golang_themes_time_ua'),
    path('ua/js/tt', javascript_themes_time_ua, name='javascript_themes_time_ua'),
]
