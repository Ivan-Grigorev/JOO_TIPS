from django.shortcuts import render, redirect
from django.views.decorators.cache import cache_control

from django.contrib.auth.views import login_required
from django.contrib.auth import login, authenticate, logout

from .models import PythonTheoryBasics, PythonTheoryVariables, PythonTheoryDataTypes, PythonTheoryExceptions,\
    PythonTheoryStrings, PythonTheoryTuples, PythonTheoryLists, PythonTheoryDictionaries, PythonTheorySets, \
    PythonTheoryFiles, PythonTheoryDjango, PythonTheoryDoctest, PythonTheoryGevent, PythonTheoryAiohttp, \
    PythonTheoryClasses, PythonTheorySorting, PythonTheoryRecursion, PythonTheoryTornado, PythonTheoryFlask, \
    PythonTheoryModules, PythonTheorySanic, PythonTheoryPyramid, PythonTheoryNose, PythonTheoryIterators, \
    PythonTheoryPytest, PythonTheoryBasicGit, PythonTheoryDecorators, PythonTheoryPipPypi, PythonTheoryHashTables,\
    PythonTheoryStacsQueues, PythonTheoryUnittestPyunit, PythonTheoryMagicMethods, PythonTheoryLambdaFunctions, \
    PythonTheoryRegularExpressions, PythonTheoryArraysRelatedLists, PythonTheoryGithubGitlabBitbucket, \
    PythonTheoryFunctionsBuiltinFunctions, \
    PythonBasicsTheoreticalTest, PythonVariablesTheoreticalTest, PythonDataTypesTheoreticalTest, \
    GolangTheory, \
    JavaScriptTheory

from datetime import datetime, timedelta
import random
import importlib


def homepage_ua(request):
    return render(request, template_name='ua/homepage_ua.html')


def who_we_are_ua(request):
    return render(request, template_name='ua/who_we_are_ua.html')


def how_we_work_ua(request):
    return render(request, template_name='ua/how_we_work_ua.html')


def lets_try_it_ua(request):
    return render(request, template_name='ua/lets_try_it_ua.html')


def for_teams_ua(request):
    return render(request, template_name='ua/for_teams_ua.html')


def for_schools_ua(request):
    return render(request, template_name='ua/for_schools_ua.html')


def programing_language_choice_ua(request):
    return render(request, template_name='ua/programing_language_choice_ua.html')


def python_themes_time_guests_ua(request):
    global test_time, lesson_time
    if request.method == 'POST':
        users_level = request.POST.get('level')
        lesson_end_date = datetime.now() + timedelta(minutes=int(request.POST.get('time')) / 2)
        end_date = datetime.now() + timedelta(minutes=int(request.POST.get('time')))
        lesson_end_date_sep = lesson_end_date.ctime().split(' ')
        end_date_sep = end_date.ctime().split(' ')
        # Jan 5, 2024 15:37:25
        lesson_time = '{0} {1}, {2} {3}'.format(lesson_end_date_sep[1], lesson_end_date_sep[2],
                                                lesson_end_date_sep[4], lesson_end_date_sep[3])
        test_time = '{0} {1}, {2} {3}'.format(end_date_sep[1], end_date_sep[2],
                                              end_date_sep[4], end_date_sep[3])
        return redirect('python_theory_cards_ua')
    return render(request, template_name='ua/python_themes_time_guests_ua.html')


@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_theory_cards_ua(request):
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
    text_ua = [theme_1[0], theme_2[0], theme_3[0], theme_4[0]]
    if theme_4[0] == theme_1[0] or theme_4[0] == theme_2[0] or theme_4[0] == theme_3[0]:
        theme_4 = random.choice([PythonTheoryBasics.objects.all().filter(id=random.randint(1, 10)),
                                 PythonTheoryVariables.objects.all().filter(id=random.randint(1, 4)),
                                 PythonTheoryDataTypes.objects.all().filter(id=random.randint(1, 4))
                                 ])
        text_ua[3] = theme_4[0]
    return render(request=request, template_name='ua/python_theory_ua.html',
                  context={'lesson_time': lesson_time,
                           'timer': test_time,
                           'text_ua': text_ua})


theoretical_test_counter = 0
practical_test_counter = 0


@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_theoretical_test_ua(request):
    global question_theme_ua
    question_theme_ua = random.choice([PythonBasicsTheoreticalTest.objects.all().filter(card_id_id=guests_card_1),
                                       PythonVariablesTheoreticalTest.objects.all().filter(card_id_id=guests_card_2),
                                       PythonDataTypesTheoreticalTest.objects.all().filter(card_id_id=guests_card_3)])
    right_answer = question_theme_ua.values_list('level_1_slot_1_right_answer_ua', flat=True)
    wrong_answer = question_theme_ua.values_list('level_1_slot_2_wrong_answer_ua', flat=True)
    left_slot = random.choice([right_answer, wrong_answer])
    right_slot = wrong_answer if left_slot == right_answer else right_answer
    global theoretical_test_counter
    total_tests = 2
    if request.method == 'POST':
        theoretical_test_counter += 1
        if theoretical_test_counter == total_tests:
            theoretical_test_counter -= total_tests
            return redirect('python_practical_test_ua')
        return redirect('python_theoretical_test_ua')
    return render(request, template_name='ua/python_theoretical_test_ua.html',
                  context={'test_counter': theoretical_test_counter + 1,
                           'total_tests': total_tests,
                           'timer': test_time,
                           'question_ua': question_theme_ua.values_list('question_ua', flat=True)[0],
                           'left_slot': left_slot,
                           'right_slot': right_slot})


@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_practical_test_ua(request):
    global practical_test_counter
    folder = question_theme_ua.values_list('theme', flat=True)[0]
    theme = folder
    card = question_theme_ua.values_list('card_id_id', flat=True)[0]
    test_number = random.choice([1, 2])
    test_file = importlib.import_module(f"joo_tips_app.practical_tests.python.{folder}.{theme}_{card}_{test_number}")
    total_tests = 6
    answers = [test_file.var_r, test_file.var_w]
    if request.method == 'POST':
        practical_test_counter += 1
        if practical_test_counter == total_tests:
            practical_test_counter -= total_tests
            return redirect('python_progress_statistic_guests_ua')
        return redirect('python_practical_test_ua')
    return render(request, template_name='ua/python_practical_test_ua.html',
                  context={'test_counter': practical_test_counter + 1,
                           'total_tests': total_tests,
                           'timer': test_time,
                           'question_ua': test_file.question_ua,
                           'code': test_file.var_u_screen,
                           'answers': answers})


def python_progress_statistic_guests_ua(request):
    test_result = '20'
    day_result = '0'
    week_result = '0'
    month_result = '0'
    year_result = '0'
    return render(request, template_name='ua/python_progress_statistic_ua.html', context={'test_result': test_result,
                                                                                          'day_result': day_result,
                                                                                          'week_result': week_result,
                                                                                          'month_result': month_result,
                                                                                          'year_result': year_result})


def register_ua(request):
    if request.method == 'POST':
        return redirect('users_homepage_ua')
    return render(request, template_name='ua/register_ua.html')


def log_in_ua(request):
    return render(request, template_name='ua/login_ua.html')


def log_out_ua(request):
    logout(request)
    return redirect('homepage_ua')


# @login_required
def users_homepage_ua(request):
    return render(request, template_name='ua/users_clipboards_desk_ua.html')


# @login_required
def users_store_ua(request):
    return render(request, template_name='ua/users_store_ua.html')


# @login_required
def python_themes_time_ua(request):
    if request.method == 'POST':
        end_date = (datetime.now() + timedelta(minutes=int(request.POST.get('time')))).ctime()
        end_date_sep = end_date.split(' ')
        # Jan 5, 2022 15:37:25
        timer = end_date_sep[1] + ' ' + end_date_sep[2] + ', ' + end_date_sep[4] + ' ' + end_date_sep[3]
        users_level = request.POST.get('level')
        text_ua = PythonTheoryDataTypes.objects.values('text_ua')
        return render(request=request, template_name='ua/python_theory_ua.html', context={'timer': timer,
                                                                                          'text_ua': text_ua})
    return render(request, template_name='ua/python_themes_time_ua.html')


def golang_themes_time_ua(request):
    return render(request, template_name='ua/golang_themes_time_ua.html')


def javascript_themes_time_ua(request):
    return render(request, template_name='ua/javascript_themes_time_ua.html')
