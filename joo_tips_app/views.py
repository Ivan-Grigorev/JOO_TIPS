from django.shortcuts import render, redirect

from .models import PythonTheory, GolangTheory, JavaScriptTheory

from datetime import datetime, timedelta
from random import randint


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


def python_themes_time(request):
    if request.method == 'POST':
        end_date = (datetime.now() + timedelta(minutes=int(request.POST.get('time')))).ctime()
        end_date_sep = end_date.split(' ')
        timer = end_date_sep[1] + ' ' + end_date_sep[2] + ', ' + end_date_sep[4] + ' ' + end_date_sep[3]  # Jan 5, 2024 15:37:25
        users_level = request.POST.get('level')
        text = PythonTheory.objects.all()
        return render(request=request, template_name='python_theory.html', context={'timer': timer, 'text': text})
    return render(request, template_name='python_themes_time.html')


def golang_themes_time(request):
    return render(request, template_name='golang_themes_time.html')


def javascript_themes_time(request):
    return render(request, template_name='javascript_themes_time.html')


def python_test_tt_1(request):
    return render(request, template_name='python_test_tt_1.html')
