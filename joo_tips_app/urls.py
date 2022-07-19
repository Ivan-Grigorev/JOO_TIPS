from django.urls import path

from .views import *
from .views_ua import *


urlpatterns = [
    path('', HomePage.as_view(), name='homepage'),
    path('ua/', HomePageUa.as_view(), name='homepage_ua'),

    path('programing-language-choice/', ProgrammingLanguageChoice.as_view(), name='programing_language_choice'),

    path('py/themes-time-guest/', PythonLessonTest.as_view(), name='themes_time_guest'),
    path('py/themes-time/', python_themes_time, name='python_themes_time'),
    path('py/theory-cards/', python_theory_cards, name='python_theory_cards'),
    path('py/theoretical-test/', python_theoretical_test, name='python_theoretical_test'),
    path('py/practical-test/', python_practical_test, name='python_practical_test'),
    path('py/progress-statistic-guests/', progress_statistic_guests, name='progress_statistic_guests'),

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

    path('users-homepage/', users_homepage, name='users_homepage'),
    path('users-store/', users_store, name='users_store'),

    path('pupils-homepage/', pupils_homepage, name='pupils_homepage'),
    path('pupils-event/', pupils_event, name='pupils_event'),
    path('pupils-exam/', pupils_exam, name='pupils_exam'),
    path('pupils-rating/', pupils_rating, name='pupils_rating'),
    path('pupils-mentor/', pupils_mentor, name='pupils_mentor'),
    path('pupils-pvp/', pupils_pvp, name='pupils_pvp'),
    path('pupils-tvt/', pupils_tvt, name='pupils_tvt'),

    path('teachers-homepage/', teachers_homepage, name='teachers_homepage'),
    path('teachers-event/', teachers_event, name='teachers_event'),
    path('teachers-exam/', teachers_exam, name='teachers_exam'),
    path('teachers-rating/', teachers_rating, name='teachers_rating'),
    path('teachers-mentor/', teachers_mentor, name='teachers_mentor'),

    path('mentors-homepage/', mentors_homepage, name='mentors_homepage'),
    path('mentors-invocation/', mentors_invocation, name='mentors_invocation'),
    path('mentors-session/', mentors_session, name='mentors_session'),
    path('mentors-rating/', mentors_rating, name='mentors_rating'),

    path('ua/programing-language-choice/', ProgrammingLanguageChoiceUa.as_view(), name='programing_language_choice_ua'),

    path('ua/py/themes-time-guest/', PythonLessonTestUa.as_view(), name='python_themes_time_guests_ua'),
    path('ua/py/themes-time/', python_themes_time_ua, name='python_themes_time_ua'),
    path('ua/py/theory-cards/', python_theory_cards_ua, name='python_theory_cards_ua'),
    path('ua/py/theoretical-test/', python_theoretical_test_ua, name='python_theoretical_test_ua'),
    path('ua/py/practical-test/', python_practical_test_ua, name='python_practical_test_ua'),
    path('ua/py/progress-statistic-guests/', progress_statistic_guests_ua, name='progress_statistic_guests_ua'),

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

    path('ua/users-homepage/', users_homepage_ua, name='users_homepage_ua'),
    path('ua/users-store/', users_store_ua, name='users_store_ua'),

    path('ua/pupils-homepage/', pupils_homepage_ua, name='pupils_homepage_ua'),
    path('ua/pupils-event/', pupils_event_ua, name='pupils_event_ua'),
    path('ua/pupils-exam/', pupils_exam_ua, name='pupils_exam_ua'),
    path('ua/pupils-rating/', pupils_rating_ua, name='pupils_rating_ua'),
    path('ua/pupils-mentor/', pupils_mentor_ua, name='pupils_mentor_ua'),
    path('ua/pupils-pvp/', pupils_pvp_ua, name='pupils_pvp_ua'),
    path('ua/pupils-tvt/', pupils_tvt_ua, name='pupils_tvt_ua'),

    path('ua/teachers-homepage/', teachers_homepage_ua, name='teachers_homepage_ua'),
    path('ua/teachers-event/', teachers_event_ua, name='teachers_event_ua'),
    path('ua/teachers-exam/', teachers_exam_ua, name='teachers_exam_ua'),
    path('ua/teachers-rating/', teachers_rating_ua, name='teachers_rating_ua'),
    path('ua/teachers-mentor/', teachers_mentor_ua, name='teachers_mentor_ua'),

    path('ua/mentors-homepage/', mentors_homepage_ua, name='mentors_homepage_ua'),
    path('ua/mentors-invocation/', mentors_invocation_ua, name='mentors_invocation_ua'),
    path('ua/mentors-session/', mentors_session_ua, name='mentors_session_ua'),
    path('ua/mentors-rating/', mentors_rating_ua, name='mentors_rating_ua'),
]
