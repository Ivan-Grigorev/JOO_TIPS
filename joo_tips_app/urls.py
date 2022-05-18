from django.urls import path

from .views import homepage, who_we_are, how_we_work, lets_try_it, for_teams, for_schools, \
    programing_language_choice, python_themes_time, python_themes_time_guests, golang_themes_time, \
    javascript_themes_time, python_theory_cards, python_theoretical_test, python_practical_test, \
    progress_statistic_guests, \
    register, log_in, log_out, \
    users_homepage, users_store, \
    pupils_homepage, teachers_homepage, mentors_homepage
from .views_ua import homepage_ua, who_we_are_ua, how_we_work_ua, lets_try_it_ua, for_teams_ua, for_schools_ua, \
    programing_language_choice_ua, python_themes_time_ua, python_themes_time_guests_ua, python_theory_cards_ua, \
    golang_themes_time_ua, javascript_themes_time_ua, python_theoretical_test_ua, python_practical_test_ua, \
    progress_statistic_guests_ua,\
    register_ua, log_in_ua, log_out_ua, \
    users_homepage_ua, users_store_ua, \
    pupils_homepage_ua, teachers_homepage_ua, mentors_homepage_ua


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
    path('py/theory-cards/', python_theory_cards, name='python_theory_cards'),
    path('py/theoretical-test/', python_theoretical_test, name='python_theoretical_test'),
    path('py/practical-test/', python_practical_test, name='python_practical_test'),
    path('py/progress-statistic-guests/', progress_statistic_guests, name='progress_statistic_guests'),

    path('register/', register, name='register'),
    path('login/', log_in, name='log_in'),
    path('logout', log_out, name='log_out'),

    path('users-homepage/', users_homepage, name='users_homepage'),
    path('users-store/', users_store, name='users_store'),

    path('pupils-homepage/', pupils_homepage, name='pupils_homepage'),
    path('teachers-homepage/', teachers_homepage, name='teachers_homepage'),
    path('mentors-homepage/', mentors_homepage, name='mentors_homepage'),

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
    path('ua/py/theory-cards/', python_theory_cards_ua, name='python_theory_cards_ua'),
    path('ua/py/theoretical-test/', python_theoretical_test_ua, name='python_theoretical_test_ua'),
    path('ua/py/practical-test/', python_practical_test_ua, name='python_practical_test_ua'),
    path('ua/py/progress-statistic-guests/', progress_statistic_guests_ua, name='progress_statistic_guests_ua'),

    path('ua/register/', register_ua, name='register_ua'),
    path('ua/login/', log_in_ua, name='log_in_ua'),
    path('ua/logout/', log_out_ua, name='log_out_ua'),

    path('ua/users-homepage/', users_homepage_ua, name='users_homepage_ua'),
    path('ua/users-store/', users_store_ua, name='users_store_ua'),

    path('ua/pupils-homepage/', pupils_homepage_ua, name='pupils_homepage_ua'),
    path('ua/teachers-homepage/', teachers_homepage_ua, name='teachers_homepage_ua'),
    path('ua/mentors-homepage/', mentors_homepage_ua, name='mentors_homepage_ua'),

    path('ua/go/themes-time/', golang_themes_time_ua, name='golang_themes_time_ua'),

    path('ua/js/themes-time/', javascript_themes_time_ua, name='javascript_themes_time_ua'),
]
