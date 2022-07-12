from django.shortcuts import render, redirect
from django.views.decorators.cache import cache_control
from django.views.generic import TemplateView

from django.contrib.auth.models import User
from django.contrib.auth.views import login_required
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.contrib.messages import get_messages


from .models import PythonTheoryBasics, PythonTheoryVariables, PythonTheoryDataTypes, PythonTheoryExceptions, \
    PythonTheoryStrings, PythonTheoryTuples, PythonTheoryLists, PythonTheoryDictionaries, PythonTheorySets, \
    PythonTheoryFiles, PythonTheoryDjango, PythonTheoryDoctest, PythonTheoryGevent, PythonTheoryAiohttp, \
    PythonTheoryClasses, PythonTheorySorting, PythonTheoryRecursion, PythonTheoryTornado, PythonTheoryFlask, \
    PythonTheoryModules, PythonTheorySanic, PythonTheoryPyramid, PythonTheoryNose, PythonTheoryIterators, \
    PythonTheoryPytest, PythonTheoryBasicGit, PythonTheoryDecorators, PythonTheoryPipPypi, PythonTheoryHashTables, \
    PythonTheoryStacsQueues, PythonTheoryUnittestPyunit, PythonTheoryMagicMethods, PythonTheoryLambdaFunctions, \
    PythonTheoryRegularExpressions, PythonTheoryArraysRelatedLists, PythonTheoryGithubGitlabBitbucket, \
    PythonTheoryFunctionsBuiltinFunctions, \
    PythonBasicsTheoreticalTest, PythonVariablesTheoreticalTest, PythonDataTypesTheoreticalTest, \
    GolangTheory, \
    JavaScriptTheory, \
    GuestsVisitStatistic, \
    JooTipsErrorsStatistic


from datetime import datetime, timedelta
import random
import importlib
import ipinfo


class HomePage(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'homepage.html'

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        # http_data = ipinfo.getHandler('001b08d2dda8e6').getDetails(ip)
        # record = self.model(guests_ip=ip,
        #                     guests_location=[http_data.city
        #                                      if 'city' in http_data.__dict__['details'].keys() else None,
        #                                      http_data.country_name
        #                                      if 'country_name' in http_data.__dict__['details'].keys() else None],
        #                     guests_hostname=http_data.hostname
        #                                      if 'hostname' in http_data.__dict__['details'].keys() else None,
        #                     visit_date=datetime.now())
        # record.save()
        return render(request, template_name='homepage.html')

    def post(self, request, *args, **kwargs):
        return render(request, template_name='homepage.html')


def programing_language_choice(request):
    record = GuestsVisitStatistic(lets_try_it_date=datetime.now(),
                                  language='EN',
                                  programming_language='Python')
    # record.save()
    return render(request, template_name='programing_language_choice.html')


def python_themes_time_guests(request):
    global test_time, lesson_time
    if request.method == 'POST':
        lesson_end_date = datetime.now() + timedelta(minutes=int(request.POST.get('time')) / 2)
        end_date = datetime.now() + timedelta(minutes=int(request.POST.get('time')))
        lesson_end_date_sep = lesson_end_date.ctime().split(' ')
        end_date_sep = end_date.ctime().split(' ')
        # Jan 5, 2024 15:37:25
        lesson_time = '{0} {1}, {2} {3}'.format(lesson_end_date_sep[1], lesson_end_date_sep[2],
                                                lesson_end_date_sep[4], lesson_end_date_sep[3])
        test_time = '{0} {1}, {2} {3}'.format(end_date_sep[1], end_date_sep[2],
                                              end_date_sep[4], end_date_sep[3])
        record = GuestsVisitStatistic(guests_level=request.POST.get('level'),
                                      test_time=request.POST.get('time'),
                                      lesson_time=int(request.POST.get('time')) / 2,
                                      start_lesson_time=datetime.now())
        # record.save()
        return redirect('python_theory_cards')
    return render(request, template_name='python_themes_time_guests.html')


@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_theory_cards(request):
    global guests_card_1, guests_card_2, guests_card_3
    guests_card_1 = random.randint(1, 10)
    theme_1 = PythonTheoryBasics.objects.all().filter(id=guests_card_1)
    guests_card_2 = random.randint(1, 4)
    theme_2 = PythonTheoryVariables.objects.all().filter(id=guests_card_2)
    guests_card_3 = random.randint(1, 4)
    theme_3 = PythonTheoryDataTypes.objects.all().filter(id=guests_card_3)
    theme_4 = random.choice([PythonTheoryBasics.objects.all().filter(id=random.randint(1, 10)),
                             PythonTheoryVariables.objects.all().filter(id=random.randint(1, 4)),
                             PythonTheoryDataTypes.objects.all().filter(id=random.randint(1, 4))
                             ])
    text = [theme_1[0], theme_2[0], theme_3[0], theme_4[0]]
    if theme_4[0] == theme_1[0] or theme_4[0] == theme_2[0] or theme_4[0] == theme_3[0]:
        theme_4 = random.choice([PythonTheoryBasics.objects.all().filter(id=random.randint(1, 10)),
                                 PythonTheoryVariables.objects.all().filter(id=random.randint(1, 4)),
                                 PythonTheoryDataTypes.objects.all().filter(id=random.randint(1, 4))
                                 ])
        text[3] = theme_4[0]
    if request.method == 'POST':
        record = GuestsVisitStatistic(start_test_time=datetime.now())
        # record.save()
        return redirect('python_theoretical_test')
    return render(request=request, template_name='python_theory.html', context={'lesson_time': lesson_time,
                                                                                'timer': test_time,
                                                                                'text': text})


theoretical_test_counter = 0
practical_test_counter = 0
right_answers = []
tests_results = []


@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_theoretical_test(request):
    global question_theme, theoretical_test_counter, right_answers, tests_results
    question_theme = random.choice([PythonBasicsTheoreticalTest.objects.all().filter(card_id_id=guests_card_1),
                                    PythonVariablesTheoreticalTest.objects.all().filter(card_id_id=guests_card_2),
                                    PythonDataTypesTheoreticalTest.objects.all().filter(card_id_id=guests_card_3)])
    right_answer = question_theme.values_list('level_1_slot_1_right_answer', flat=True)
    right_answers.append(right_answer[0])
    wrong_answer = question_theme.values_list('level_1_slot_2_wrong_answer', flat=True)
    left_slot = random.choice([right_answer, wrong_answer])
    right_slot = wrong_answer if left_slot == right_answer else right_answer
    total_tests = 2
    if request.method == 'POST':
        right_answers.append(right_answer[0])
        tests_results.extend([1 if request.POST.get('slot') in right_answers else 0])
        theoretical_test_counter += 1
        if theoretical_test_counter == total_tests:
            right_answers.extend([right_answer[0]])
            theoretical_test_counter -= total_tests
            record = GuestsVisitStatistic(end_theoretical_start_practical_test_time=datetime.now(),
                                          theoretical_test_result=tests_results)
            # record.save()
            return redirect('python_practical_test')
        return redirect('python_theoretical_test')
    return render(request, template_name='python_theoretical_test.html',
                  context={'test_counter': theoretical_test_counter + 1,
                           'total_tests': total_tests,
                           'timer': test_time,
                           'question': question_theme.values_list('question', flat=True)[0],
                           'left_slot': left_slot,
                           'right_slot': right_slot})


@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_practical_test(request):
    global practical_test_counter, right_answers
    folder = question_theme.values_list('theme', flat=True)[0]
    theme = folder
    card = question_theme.values_list('card_id_id', flat=True)[0]
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
            return redirect('progress_statistic_guests')
        return redirect('python_practical_test')
    return render(request, template_name='python_practical_test.html',
                  context={'test_counter': practical_test_counter + 1,
                           'total_tests': total_tests,
                           'timer': test_time,
                           'question': test_file.question,
                           'code': test_file.var_u_screen,
                           'answers': answers})


def progress_statistic_guests(request):
    test_result = sum(tests_results)
    day_result = 0
    week_result = 0
    month_result = 0
    year_result = 0
    tests_results.clear()
    return render(request, template_name='progress_statistic.html', context={'test_result': test_result,
                                                                             'day_result': day_result,
                                                                             'week_result': week_result,
                                                                             'month_result': month_result,
                                                                             'year_result': year_result})


def register(request):
    if request.method == 'POST':
        user = User.objects.create_user(username=request.POST.get('username'),
                                        email=request.POST.get('email'),
                                        password=request.POST.get('password'))
        user.save()
        record = GuestsVisitStatistic(register_date=datetime.now())
        # record.save()
        login(request, user)
        return redirect('users_homepage')
    return render(request, template_name='register.html')


@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def log_in(request):
    if request.method == 'POST':
        user = authenticate(request, username=request.POST.get('username'), password=request.POST.get('password'))
        if user is not None:
            login(request, user)
            return redirect('users_homepage')
        else:
            messages.error(request, 'Username or password does not exist!')
    return render(request, template_name='login.html')


def log_out(request):
    logout(request)
    return redirect('homepage')


@login_required(login_url='log_in')
def users_homepage(request):
    return render(request, template_name='python_clipboards_desk.html')


@login_required(login_url='log_in')
def users_store(request):
    return render(request, template_name='users_store.html')


# @login_required(login_url='log_in')
def pupils_homepage(request):
    return render(request, template_name='pupils_homepage.html')


# @login_required(login_url='log_in')
def pupils_event(request):
    return render(request, template_name='pupils_event_overview.html')


# @login_required(login_url='log_in')
def pupils_exam(request):
    return render(request, template_name='pupils_exam_overview.html')


# @login_required(login_url='log_in')
def pupils_rating(request):
    return render(request, template_name='pupils_rating.html')


# @login_required(login_url='log_in')
def pupils_mentor(request):
    return render(request, template_name='pupils_mentor.html')


# @login_required(login_url='log_in')
def pupils_pvp(request):
    return render(request, template_name='pupils_pvp.html')


# @login_required(login_url='log_in')
def pupils_tvt(request):
    return render(request, template_name='pupils_tvt.html')


# @login_required(login_url='log_in')
def teachers_homepage(request):
    return render(request, template_name='teachers_homepage.html')


# @login_required(login_url='log_in')
def teachers_event(request):
    # all events overview
    if request.method == 'POST':
        if request.POST.get('option') == 'create_event':
            return render(request, template_name='teachers_create_event.html')
    return render(request, template_name='teachers_event_overview.html')


# @login_required(login_url='log_in')
def teachers_exam(request):
    # all exams overview
    if request.method == 'POST':
        if request.POST.get('option') == 'create_exam':
            return render(request, template_name='teachers_create_exam.html')
    return render(request, template_name='teachers_exam_overview.html')


# @login_required(login_url='log_in')
def teachers_rating(request):
    return render(request, template_name='teachers_rating.html')


# @login_required(login_url='log_in')
def teachers_mentor(request):
    return render(request, template_name='teachers_mentor.html')


# @login_required(login_url='log_in')
def mentors_homepage(request):
    return render(request, template_name='mentors_homepage.html')


# @login_required(login_url='log_in')
def mentors_invocation(request):
    return render(request, template_name='mentors_invocation.html')


# @login_required(login_url='log_in')
def mentors_session(request):
    if request.method == 'POST':
        if request.POST.get('option') == 'create_session':
            return render(request, template_name='mentors_create_session.html')
    return render(request, template_name='mentors_session_overview.html')


# @login_required(login_url='log_in')
def mentors_rating(request):
    return render(request, template_name='mentors_rating.html')


@login_required(login_url='log_in')
def python_themes_time(request):
    if request.method == 'POST':
        end_date = datetime.now() + timedelta(minutes=int(request.POST.get('time')))
        end_date_sep = end_date.ctime().split(' ')
        # Jan 5, 2024 15:37:25
        timer = '{0} {1}, {2} {3}'.format(end_date_sep[1], end_date_sep[2],
                                          end_date_sep[4], end_date_sep[3])
        users_level = request.POST.get('level')
        text = PythonTheoryBasics.objects.all()
        return render(request=request, template_name='python_theory.html', context={'timer': timer, 'text': text})
    return render(request, template_name='python_themes_time.html')


def golang_themes_time(request):
    return render(request, template_name='golang_themes_time.html')


def javascript_themes_time(request):
    return render(request, template_name='javascript_themes_time.html')


class Error400Page(TemplateView):
    model = JooTipsErrorsStatistic
    template_name = 'errors_views/error_view.html'

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
                            error_400=True)
        record.save()
        return render(request, template_name='errors_views/400.html', status=400)


class Error403Page(TemplateView):
    model = JooTipsErrorsStatistic
    template_name = 'errors_views/error_view.html'

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
                            error_403=True)
        record.save()
        return render(request, template_name='errors_views/403.html', status=403)


class Error404Page(TemplateView):
    model = JooTipsErrorsStatistic
    template_name = 'errors_views/error_view.html'

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
                            error_404=True)
        record.save()
        return render(request, template_name='errors_views/404.html', status=404)


class Error500Page(TemplateView):
    model = JooTipsErrorsStatistic
    template_name = 'errors_views/error_view.html'

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
                            error_500=True)
        record.save()
        return render(request, template_name='errors_views/500.html', status=500)
