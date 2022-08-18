from django.urls import path

from .views import *
from .views_ua import *


urlpatterns = [
    path('', HomePage.as_view(), name='homepage'),
    path('ua/', HomePageUa.as_view(), name='homepage_ua'),

    path('programming-language-choice/', ProgrammingLanguageChoice.as_view(), name='programming_language_choice'),

    path('py/themes-time/', PythonLessonTest.as_view(), name='python_themes_time'),
    path('py/theory-cards/', python_theory_cards, name='python_theory_cards'),
    path('py/theoretical-test/', python_theoretical_test, name='python_theoretical_test'),
    path('py/practical-test/', python_practical_test, name='python_practical_test'),
    path('py/progress-statistic-guests/', progress_statistic_guests, name='progress_statistic_guests'),

    path('js/themes-time/', JavaScriptLessonTest.as_view(), name='javascript_themes_time'),

    path('go/themes-time/', GolangLessonTest.as_view(), name='golang_themes_time'),

    path('java/themes-time/', JavaLessonTest.as_view(), name='java_themes_time'),

    path('swift/themes-time/', SwiftLessonTest.as_view(), name='swift_themes_time'),

    path('php/themes-time/', PhpLessonTest.as_view(), name='php_themes_time'),

    path('c-sharp/themes-time/', CsharpLessonTest.as_view(), name='c_sharp_themes_time'),

    path('c-plus-plus/themes-time/', CplusplusLessonTest.as_view(), name='c_plus_plus_themes_time'),

    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='log_in'),
    path('logout/', LogoutView.as_view(), name='log_out'),

    path('tech-writers-page/', TechWritersPage.as_view(), name='tech_writers_page'),

    path('users-homepage/', UsersHomePage.as_view(), name='users_homepage'),
    path('users-store/', UsersStorePage.as_view(), name='users_store'),

    path('pupils-homepage/', PupilsHomePage.as_view(), name='pupils_homepage'),
    path('pupils-event/', PupilsEventPage.as_view(), name='pupils_event'),
    path('pupils-exam/', PupilsExamPage.as_view(), name='pupils_exam'),
    path('pupils-rating/', PupilsRatingPage.as_view(), name='pupils_rating'),
    path('pupils-mentor/', PupilsMentorPage.as_view(), name='pupils_mentor'),
    path('pupils-pvp/', PupilsPvpPage.as_view(), name='pupils_pvp'),
    path('pupils-tvt/', PupilsTvtPage.as_view(), name='pupils_tvt'),

    path('teachers-homepage/', TeachersHomePage.as_view(), name='teachers_homepage'),
    path('teachers-event/', TeachersEventPage.as_view(), name='teachers_event'),
    path('teachers-exam/', TeachersExamPage.as_view(), name='teachers_exam'),
    path('teachers-rating/', TeachersRatingPage.as_view(), name='teachers_rating'),
    path('teachers-mentor/', TeachersMentorPage.as_view(), name='teachers_mentor'),

    path('mentors-homepage/', MentorsHomePage.as_view(), name='mentors_homepage'),
    path('mentors-invocation/', MentorsInvocationPage.as_view(), name='mentors_invocation'),
    path('mentors-session/', MentorsSessionPage.as_view(), name='mentors_session'),
    path('mentors-rating/', MentorsRatingPage.as_view(), name='mentors_rating'),

    path('ua/programming-language-choice/', ProgrammingLanguageChoiceUa.as_view(), name='programming_language_choice_ua'),

    path('ua/py/themes-time/', PythonLessonTestUa.as_view(), name='python_themes_time_ua'),
    path('ua/py/theory-cards/', python_theory_cards_ua, name='python_theory_cards_ua'),
    path('ua/py/theoretical-test/', python_theoretical_test_ua, name='python_theoretical_test_ua'),
    path('ua/py/practical-test/', python_practical_test_ua, name='python_practical_test_ua'),
    path('ua/py/progress-statistic-guests/', progress_statistic_guests_ua, name='progress_statistic_guests_ua'),

    path('ua/js/themes-time/', JavaScriptLessonTestUa.as_view(), name='javascript_themes_time_ua'),

    path('ua/go/themes-time/', GolangLessonTestUa.as_view(), name='golang_themes_time_ua'),

    path('ua/java/themes-time/', JavaLessonTestUa.as_view(), name='java_themes_time_ua'),

    path('ua/swift/themes-time/', SwiftLessonTest.as_view(), name='swift_themes_time_ua'),

    path('ua/php/themes-time/', PhpLessonTestUa.as_view(), name='php_themes_time_ua'),

    path('ua/c-sharp/themes-time/', CsharpLessonTestUa.as_view(), name='c_sharp_themes_time_ua'),

    path('ua/c-plus-plus/themes-time/', CplusplusLessonTest.as_view(), name='c_plus_plus_themes_time_ua'),

    path('ua/register/', RegisterViewUa.as_view(), name='register_ua'),
    path('ua/login/', LoginViewUa.as_view(), name='log_in_ua'),
    path('ua/logout/', LogoutViewUa.as_view(), name='log_out_ua'),

    path('ua/tech-writers-page/', TechWritersPageUa.as_view(), name='tech_writers_page_ua'),

    path('ua/users-homepage/', UsersHomePageUa.as_view(), name='users_homepage_ua'),
    path('ua/users-store/', UsersStorePageUa.as_view(), name='users_store_ua'),

    path('ua/pupils-homepage/', PupilsHomePageUa.as_view(), name='pupils_homepage_ua'),
    path('ua/pupils-event/', PupilsEventPageUa.as_view(), name='pupils_event_ua'),
    path('ua/pupils-exam/', PupilsExamPageUa.as_view(), name='pupils_exam_ua'),
    path('ua/pupils-rating/', PupilsRatingPageUa.as_view(), name='pupils_rating_ua'),
    path('ua/pupils-mentor/', PupilsMentorPageUa.as_view(), name='pupils_mentor_ua'),
    path('ua/pupils-pvp/', PupilsPvpPageUa.as_view(), name='pupils_pvp_ua'),
    path('ua/pupils-tvt/', PupilsTvtPageUa.as_view(), name='pupils_tvt_ua'),

    path('ua/teachers-homepage/', TeachersHomePageUa.as_view(), name='teachers_homepage_ua'),
    path('ua/teachers-event/', TeachersEventPageUa.as_view(), name='teachers_event_ua'),
    path('ua/teachers-exam/', TeachersExamPageUa.as_view(), name='teachers_exam_ua'),
    path('ua/teachers-rating/', TeachersRatingPageUa.as_view(), name='teachers_rating_ua'),
    path('ua/teachers-mentor/', TeachersMentorPageUa.as_view(), name='teachers_mentor_ua'),

    path('ua/mentors-homepage/', MentorsHomePageUa.as_view(), name='mentors_homepage_ua'),
    path('ua/mentors-invocation/', MentorsInvocationPageUa.as_view(), name='mentors_invocation_ua'),
    path('ua/mentors-session/', MentorsSessionPageUa.as_view(), name='mentors_session_ua'),
    path('ua/mentors-rating/', MentorsRatingPageUa.as_view(), name='mentors_rating_ua'),
]
