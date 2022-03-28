from django.shortcuts import render, redirect

from django.contrib.auth.views import login_required

from .models import PythonTheoryBasics, PythonTheoryVariables, PythonTheoryDataTypes, PythonTheoryExceptions, \
    PythonTheoryStrings, PythonTheoryTuples, PythonTheoryLists, PythonTheoryDictionaries, PythonTheorySets, \
    PythonTheoryFiles, PythonTheoryDjango, PythonTheoryDoctest, PythonTheoryGevent, PythonTheoryAiohttp, \
    PythonTheoryClasses, PythonTheorySorting, PythonTheoryRecursion, PythonTheoryTornado, PythonTheoryFlask, \
    PythonTheoryModules, PythonTheorySanic, PythonTheoryPyramid, PythonTheoryNose, PythonTheoryIterators, \
    PythonTheoryPytest, PythonTheoryBasicGit, PythonTheoryDecorators, PythonTheoryPipPypi, PythonTheoryHashTables, \
    PythonTheoryStacsQueues, PythonTheoryUnittestPyunit, PythonTheoryMagicMethods, PythonTheoryLambdaFunctions, \
    PythonTheoryRegularExpressions, PythonTheoryArraysRelatedLists, PythonTheoryGithubGitlabBitbucket, \
    PythonTheoryFunctionsBuiltinFunctions, \
    GolangTheory, \
    JavaScriptTheory

from datetime import datetime, timedelta
import random
import time


def homepage(request):
    return render(request, template_name='homepage.html')


def who_we_are(request):
    return render(request, template_name='who_we_are.html')


def how_we_work(request):
    return render(request, template_name='how_we_work.html')


def lets_try_it(request):
    return render(request, template_name='lets_try_it.html')


def for_teams(request):
    return render(request, template_name='for_teams.html')


def for_schools(request):
    return render(request, template_name='for_schools.html')


def programing_language_choice(request):
    return render(request, template_name='programing_language_choice.html')


def python_themes_time_guests(request):
    if request.method == 'POST':
        users_level = request.POST.get('level')
        lesson_end_date = datetime.now() + timedelta(minutes=int(request.POST.get('time')) / 2)
        end_date = datetime.now() + timedelta(minutes=int(request.POST.get('time')))
        lesson_end_date_sep = lesson_end_date.ctime().split(' ')
        end_date_sep = end_date.ctime().split(' ')
        global guests_timer
        # Jan 5, 2024 15:37:25
        lesson_guests_timer = lesson_end_date_sep[1] + ' ' + lesson_end_date_sep[2] + ', ' + \
                              lesson_end_date_sep[4] + ' ' + lesson_end_date_sep[3]
        guests_timer = end_date_sep[1] + ' ' + end_date_sep[2] + ', ' + end_date_sep[4] + ' ' + end_date_sep[3]
        theme_1 = PythonTheoryBasics.objects.all().filter(id=random.randint(1, 10))
        theme_2 = PythonTheoryVariables.objects.all().filter(id=random.randint(1, 4))
        theme_3 = PythonTheoryDataTypes.objects.all().filter(id=random.randint(1, 3))
        theme_4 = random.choice([theme_1, theme_2, theme_3])
        text = [theme_1[0], theme_2[0], theme_3[0], theme_4[0]]
        return render(request=request, template_name='python_theory.html',
                      context={'lesson_guests_timer': lesson_guests_timer,
                               'timer': guests_timer,
                               'text': text})
    return render(request, template_name='python_themes_time_guests.html')


def python_theoretical_test(request):
    return render(request, template_name='python_theoretical_test.html', context={'timer': guests_timer})


def login(request):
    return render(request, template_name='login.html')


# @login_required
def python_themes_time(request):
    if request.method == 'POST':
        end_date = datetime.now() + timedelta(minutes=int(request.POST.get('time')))
        end_date_sep = end_date.ctime().split(' ')
        # Jan 5, 2024 15:37:25
        timer = end_date_sep[1] + ' ' + end_date_sep[2] + ', ' + end_date_sep[4] + ' ' + end_date_sep[3]
        users_level = request.POST.get('level')
        text = PythonTheoryBasics.objects.all()
        return render(request=request, template_name='python_theory.html', context={'timer': timer, 'text': text})
    return render(request, template_name='python_themes_time.html')


def golang_themes_time(request):
    return render(request, template_name='golang_themes_time.html')


def javascript_themes_time(request):
    return render(request, template_name='javascript_themes_time.html')

