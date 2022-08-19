from django.shortcuts import render, redirect
from django.views.decorators.cache import cache_control
from django.views.generic import TemplateView

from django.contrib.auth.models import User
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages

from .models import *

from datetime import datetime, timedelta
import random
import importlib
import ipinfo


class HomePageUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/homepage_ua.html'

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        http_data = ipinfo.getHandler('001b08d2dda8e6').getDetails(ip)
        record = self.model(guests_ip=ip,
                            guests_location=[http_data.city
                                             if 'city' in http_data.__dict__['details'].keys() else None,
                                             http_data.country_name
                                             if 'country_name' in http_data.__dict__['details'].keys() else None],
                            guests_hostname=http_data.hostname
                                             if 'hostname' in http_data.__dict__['details'].keys() else None,
                            visit_date=datetime.now())
        # record.save()
        return render(request, template_name='ua/homepage_ua.html')

    def post(self, request, *args, **kwargs):
        record = self.model(schools_email=request.POST.get('school-email'),
                            teams_email=request.POST.get('team-email'))
        record.save()
        return render(request, template_name='ua/homepage_ua.html')


class ProgrammingLanguageChoiceUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/programming_language_choice_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(lets_try_it_date=datetime.now(),
                            language='Ukrainian')
        # record.save()
        return render(request, template_name='ua/programming_language_choice_ua.html')


class PythonLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/python_ua/python_themes_time_ua.html'
    test_time = ''
    lesson_time = ''
    guest_level = ''

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='Python')
        # record.save()
        return render(request, template_name='ua/python_ua/python_themes_time_ua.html')

    def post(self, request, *args, **kwargs):
        self.test_time = (datetime.utcnow() + timedelta(minutes=int(request.POST.get('time')))).ctime()
        self.lesson_time = (datetime.utcnow() + timedelta(minutes=int(request.POST.get('time')) / 2)).ctime()
        self.guest_level = request.POST.get('level')
        record = self.model(guests_level=self.guest_level,
                            test_time=self.test_time,
                            lesson_time=self.lesson_time,
                            start_lesson_time=datetime.now())
        # record.save()
        return render(request, template_name='ua/python_ua/python_theory_ua.html', context={'lesson_time': self.lesson_time,
                                                                                                  'timer': self.test_time})


class JavaScriptLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='JavaScript')
        # record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class JavaLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='Java')
        # record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class SwiftLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='Swift')
        # record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class CsharpLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='C#')
        # record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class CplusplusLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='C++')
        # record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class GolangLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='Golang')
        # record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class PhpLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='PHP')
        # record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


# class TheoryCardsUa TODO
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_theory_cards_ua(request):
    global guests_card_1, guests_card_2, guests_card_3
    guests_card_1 = random.randint(1, 10)
    theme_1 = PythonBasicsTheory.objects.all().filter(id=guests_card_1)
    guests_card_2 = random.randint(1, 4)
    theme_2 = PythonVariablesTheory.objects.all().filter(id=guests_card_2)
    guests_card_3 = random.randint(1, 4)
    theme_3 = PythonDataTypesTheory.objects.all().filter(id=guests_card_3)
    theme_4 = random.choice([PythonBasicsTheory.objects.all().filter(id=random.randint(1, 10)),
                             PythonVariablesTheory.objects.all().filter(id=random.randint(1, 4)),
                             PythonDataTypesTheory.objects.all().filter(id=random.randint(1, 4))
                             ])
    text_ua = [theme_1[0], theme_2[0], theme_3[0], theme_4[0]]
    if theme_4[0] == theme_1[0] or theme_4[0] == theme_2[0] or theme_4[0] == theme_3[0]:
        theme_4 = random.choice([PythonBasicsTheory.objects.all().filter(id=random.randint(1, 10)),
                                 PythonVariablesTheory.objects.all().filter(id=random.randint(1, 4)),
                                 PythonDataTypesTheory.objects.all().filter(id=random.randint(1, 4))
                                 ])
        text_ua[3] = theme_4[0]
    if request.method == 'POST':
        record = GuestsVisitStatistic(start_test_time=datetime.now())
        # record.save()
        return redirect('python_theoretical_test_ua')
    return render(request=request, template_name='ua/python_theory_ua.html', context={'text_ua': text_ua})


theoretical_test_counter = 0
practical_test_counter = 0
right_answers = []
tests_results = []


# class TheoreticalTestUa TODO
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_theoretical_test_ua(request):
    global question_theme_ua, theoretical_test_counter, right_answers, tests_results
    question_theme_ua = random.choice([PythonBasicsTheoreticalTest.objects.all().filter(card_id=guests_card_1),
                                       PythonVariablesTheoreticalTest.objects.all().filter(card_id=guests_card_2),
                                       PythonDataTypesTheoreticalTest.objects.all().filter(card_id=guests_card_3)])
    right_answer = question_theme_ua.values_list('level_1_slot_1_right_answer_ua', flat=True)
    right_answers.append(right_answer[0])
    wrong_answer = question_theme_ua.values_list('level_1_slot_2_wrong_answer_ua', flat=True)
    left_slot = random.choice([right_answer, wrong_answer])
    right_slot = wrong_answer if left_slot == right_answer else right_answer
    total_tests = 2
    if request.method == 'POST':
        right_answers.append(right_answer[0])
        tests_results.extend([1 if request.POST.get('slot') in right_answers else 0])
        theoretical_test_counter += 1
        if theoretical_test_counter == total_tests:
            right_answers.append(right_answer[0])
            theoretical_test_counter -= total_tests
            record = GuestsVisitStatistic(end_theoretical_start_practical_test_time=datetime.now(),
                                          theoretical_test_result=tests_results)
            # record.save()
            return redirect('python_practical_test_ua')
        return redirect('python_theoretical_test_ua')
    return render(request, template_name='ua/python_theoretical_test_ua.html',
                  context={'test_counter': theoretical_test_counter + 1,
                           'total_tests': total_tests,
                           # 'timer': test_time,
                           'question_ua': question_theme_ua.values_list('question_ua', flat=True)[0],
                           'left_slot': left_slot,
                           'right_slot': right_slot})


# class PracticalTestUa TODO
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_practical_test_ua(request):
    global practical_test_counter, right_answers
    folder = question_theme_ua.values_list('theme', flat=True)[0]
    theme = folder
    card = question_theme_ua.values_list('card_id', flat=True)[0]
    test_number = random.choice([1, 2])
    test_file = importlib.import_module(f"joo_tips_app.practical_tests.python.{folder}.{theme}_{card}_{test_number}")
    total_tests = 6
    answers = [test_file.var_r, test_file.var_w]
    right_answers.append(test_file.var_r)
    if request.method == 'POST':
        right_answers.append(test_file.var_r)
        tests_results.extend([1 if request.POST.get('slot') in right_answers else 0])
        practical_test_counter += 1
        if practical_test_counter == total_tests:
            practical_test_counter -= total_tests
            record = GuestsVisitStatistic(practical_test_result=tests_results[2:],
                                          end_test_time=datetime.now())
            # record.save()
            return redirect('progress_statistic_guests_ua')
        return redirect('python_practical_test_ua')
    return render(request, template_name='ua/python_practical_test_ua.html',
                  context={'test_counter': practical_test_counter + 1,
                           'total_tests': total_tests,
                           # 'timer': test_time,
                           'question_ua': test_file.question_ua,
                           'code': test_file.var_u_screen,
                           'answers': answers})


# class ProgressStatisticUa TODO
def progress_statistic_guests_ua(request):
    test_result = sum(tests_results)
    day_result = 0
    week_result = 0
    month_result = 0
    year_result = 0
    tests_results.clear()
    return render(request, template_name='ua/progress_statistic_ua.html', context={'test_result': test_result,
                                                                                   'day_result': day_result,
                                                                                   'week_result': week_result,
                                                                                   'month_result': month_result,
                                                                                   'year_result': year_result})


class RegisterViewUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/register_ua.html'

    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        if User.objects.filter(username=username).exists():
            messages.error(request, f"{username} вже існує!")
        else:
            user = User.objects.create_user(username=username,
                                            email=request.POST.get('email'),
                                            password=request.POST.get('password'))
            record = self.model(register_date=datetime.now())
            # record.save()
            login(request, user)
            return redirect('users_homepage')
        return render(request, template_name='ua/register_ua.html')


class LoginViewUa(TemplateView):
    template_name = 'ua/login_ua.html'

    def post(self, request, *args, **kwargs):
        user = authenticate(request, username=request.POST.get('username'),
                                     password=request.POST.get('password'))
        if user is not None:
            if user.groups.filter(name='Pupils').exists():
                login(request, user)
                return redirect('pupils_homepage_ua')
            if user.groups.filter(name='Teachers').exists():
                login(request, user)
                return redirect('teachers_homepage_ua')
            if user.groups.filter(name='Mentors').exists():
                login(request, user)
                return redirect('mentors_homepage_ua')
            if user.groups.filter(name='Tech writers').exists():
                login(request, user)
                return redirect('tech_writers_page_ua')
            login(request, user)
            return redirect('users_homepage_ua')
        else:
            messages.error(request, 'Логін або пароль не існує!')
        return render(request, template_name='ua/login_ua.html')


class LogoutViewUa(TemplateView):

    def get(self, request, *args, **kwargs):
        logout(request)
        return redirect('homepage_ua')


class UsersHomePageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model =
    template_name = 'ua/user_ua/users_homepage_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/user_ua/users_homepage_ua.html')


class UsersStorePageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model =
    template_name = 'ua/user_ua/users_store_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/user_ua/users_store_ua.html')


class PupilsHomePageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model =
    template_name = 'ua/pupil_ua/pupils_homepage_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/pupil_ua/pupils_homepage_ua.html')


class PupilsEventPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/pupil_ua/pupils_event_overview_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/pupil_ua/pupils_event_overview_ua.html')


class PupilsExamPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/pupil_ua/pupils_exam_overview_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/pupil_ua/pupils_exam_overview_ua.html')


class PupilsRatingPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/pupil_ua/pupils_rating_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/pupil_ua/pupils_rating_ua.html')


class PupilsMentorPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/pupil_ua/pupils_mentor_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/pupil_ua/pupils_mentor_ua.html')

    def post(self, request, *args, **kwargs):
        pass


class PupilsPvpPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/pupil_ua/pupils_pvp_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/pupil_ua/pupils_pvp_ua.html')

    def post(self, request, *args, **kwargs):
        pass


class PupilsTvtPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/pupil_ua/pupils_tvt_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/pupil_ua/pupils_tvt_ua.html')

    def post(self, request, *args, **kwargs):
        pass


class TeachersHomePageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/teacher_ua/teachers_homepage_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/teacher_ua/teachers_homepage_ua.html')


class TeachersEventPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/teacher_ua/teachers_event_overview_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/teacher_ua/teachers_event_overview_ua.html')

    def post(self, request, *args, **kwargs):
        if request.POST.get('option') == 'create_event':
            return render(request, template_name='ua/teacher_ua/teachers_create_event_ua.html')
        # return render(request, template_name='ua/teacher/teachers_event_overview_ua.html')


class TeachersExamPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/teacher_ua/teachers_exam_overview_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/teacher_ua/teachers_exam_overview_ua.html')

    def post(self, request, *args, **kwargs):
        if request.POST.get('option') == 'create_exam':
            return render(request, template_name='ua/teacher_ua/teachers_create_exam_ua.html')
        # return render(request, template_name='ua/teacher/teachers_exam_overview_ua.html')


class TeachersRatingPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/teacher_ua/teachers_rating_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/teacher_ua/teachers_rating_ua.html')


class TeachersMentorPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/teacher_ua/teachers_mentor_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/teacher_ua/teachers_mentor_ua.html')


class MentorsHomePageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/mentor_ua/mentors_homepage_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/mentor_ua/mentors_homepage_ua.html')


class MentorsInvocationPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/mentor_ua/mentors_invocation_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/mentor_ua/mentors_invocation_ua.html')


class MentorsSessionPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/mentor_ua/mentors_session_overview_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/mentor_ua/mentors_session_overview_ua.html')

    def post(self, request, *args, **kwargs):
        if request.POST.get('option') == 'create_session':
            return render(request, template_name='ua/mentor_ua/mentors_create_session_ua.html')
        # return render(request, template_name='ua/mentor/mentors_session_overview_ua.html')


class MentorsRatingPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/mentor_ua/mentors_rating_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/mentor_ua/mentors_rating_ua.html')


class TechWritersPageUa(LoginRequiredMixin, TemplateView):
    login_url = '/ua/login'
    # model
    template_name = 'ua/tech_writers_page_ua.html'

    def get(self, request, *args, **kwargs):
        return render(request, template_name='ua/tech_writers_page_ua.html')
