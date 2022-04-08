from django.shortcuts import render, redirect
from django.http import HttpResponse
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
    PythonBasicsTheoreticalTest, PythonVariablesTheoreticalTest, PythonDataTypesTheoreticalTest, \
    GolangTheory, \
    JavaScriptTheory

from datetime import datetime, timedelta
import random


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
    global test_time, lesson_time
    if request.method == 'POST':
        guests_level = request.POST.get('level')
        lesson_end_date = datetime.now() + timedelta(minutes=int(request.POST.get('time')) / 2)
        end_date = datetime.now() + timedelta(minutes=int(request.POST.get('time')))
        lesson_end_date_sep = lesson_end_date.ctime().split(' ')
        end_date_sep = end_date.ctime().split(' ')
        # Jan 5, 2024 15:37:25
        lesson_time = '{0} {1}, {2} {3}'.format(lesson_end_date_sep[1], lesson_end_date_sep[3],
                                                lesson_end_date_sep[5], lesson_end_date_sep[4])
        test_time = '{0} {1}, {2} {3}'.format(end_date_sep[1], end_date_sep[3],
                                              end_date_sep[5], end_date_sep[4])
        return redirect('python_theory_cards')
    return render(request, template_name='python_themes_time_guests.html')


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
    return render(request=request, template_name='python_theory.html',
                  context={'lesson_time': lesson_time,
                           'timer': test_time,
                           'text': text})


theoretical_test_counter = 0
practical_test_counter = 0


def python_theoretical_test(request):
    question = random.choice([PythonBasicsTheoreticalTest.objects.all().filter(card_id_id=guests_card_1),
                             PythonVariablesTheoreticalTest.objects.all().filter(card_id_id=guests_card_2),
                             PythonDataTypesTheoreticalTest.objects.all().filter(card_id_id=guests_card_3)])
    right_answer = question.values_list('level_1_slot_1_right_answer', flat=True)
    wrong_answer = question.values_list('level_1_slot_2_wrong_answer', flat=True)
    left_slot = random.choice([right_answer, wrong_answer])
    right_slot = wrong_answer if left_slot == right_answer else right_answer
    global theoretical_test_counter
    total_tests = 2
    if request.method == 'POST':
        theoretical_test_counter += 1
        if theoretical_test_counter == total_tests:
            theoretical_test_counter -= total_tests
            return redirect('python_practical_test')
        return redirect('python_theoretical_test')
    return render(request, template_name='python_theoretical_test.html',
                  context={'test_counter': theoretical_test_counter + 1,
                           'total_tests': total_tests,
                           'timer': test_time,
                           'question': question.values_list('question', flat=True)[0],
                           'left_slot': left_slot,
                           'right_slot': right_slot})


def python_practical_test(request):
    global practical_test_counter
    total_tests = 6
    question = 'Question'
    code = 'def example(attribute):\n\tfor i in len(attribute):\n\t\tprint(i)\n\nexample(10)'
    slots = ['One', 'Two', 'Three', 'Four']
    if request.method == 'POST':
        practical_test_counter += 1
        if practical_test_counter == total_tests:
            practical_test_counter -= total_tests
            return redirect('python_progress_statistic_guests')
        return redirect('python_practical_test')
    return render(request, template_name='python_practical_test.html',
                  context={'test_counter': practical_test_counter + 1,
                           'total_tests': total_tests,
                           'timer': test_time,
                           'question': question,
                           'code': code,
                           'slots': slots})


def python_progress_statistic_guests(request):
    return render(request, template_name='python_progress_statistic.html')


def login(request):
    return render(request, template_name='login.html')


# @login_required
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
