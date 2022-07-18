from django.contrib import admin

from .models import *


class AdminPythonBasicsTheory(admin.ModelAdmin):
    model = PythonBasicsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonBasicsTheoreticalTest(admin.ModelAdmin):
    model = PythonBasicsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonBasicsTheory, AdminPythonBasicsTheory)
admin.site.register(PythonBasicsTheoreticalTest, AdminPythonBasicsTheoreticalTest)


class AdminPythonTheoryVariables(admin.ModelAdmin):
    model = PythonVariablesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonVariablesTheoreticalTest(admin.ModelAdmin):
    model = PythonVariablesTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonVariablesTheory, AdminPythonTheoryVariables)
admin.site.register(PythonVariablesTheoreticalTest, AdminPythonVariablesTheoreticalTest)


class AdminPythonDataTypesTheory(admin.ModelAdmin):
    model = PythonDataTypesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonDataTypesTheoreticalTest(admin.ModelAdmin):
    model = PythonDataTypesTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonDataTypesTheory, AdminPythonDataTypesTheory)
admin.site.register(PythonDataTypesTheoreticalTest, AdminPythonDataTypesTheoreticalTest)


class AdminPythonExceptionsTheory(admin.ModelAdmin):
    model = PythonExceptionsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonExceptionsTheoreticalTest(admin.ModelAdmin):
    model = PythonExceptionsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonExceptionsTheory, AdminPythonExceptionsTheory)
admin.site.register(PythonExceptionsTheoreticalTest, AdminPythonExceptionsTheoreticalTest)


class AdminPythonStringsTheory(admin.ModelAdmin):
    model = PythonStringsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonStringsTheoreticalTest(admin.ModelAdmin):
    model = PythonStringsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonStringsTheory, AdminPythonStringsTheory)
admin.site.register(PythonStringsTheoreticalTest, AdminPythonStringsTheoreticalTest)


class AdminPythonListsTheory(admin.ModelAdmin):
    model = PythonListsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonListsTheoreticalTest(admin.ModelAdmin):
    model = PythonListsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonListsTheory, AdminPythonListsTheory)
admin.site.register(PythonListsTheoreticalTest, AdminPythonListsTheoreticalTest)


class AdminPythonTuplesTheory(admin.ModelAdmin):
    model = PythonTuplesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTuplesTheoreticalTest(admin.ModelAdmin):
    model = PythonTuplesTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonTuplesTheory, AdminPythonTuplesTheory)
admin.site.register(PythonTuplesTheoreticalTest, AdminPythonTuplesTheoreticalTest)


class AdminPythonDictionariesTheory(admin.ModelAdmin):
    model = PythonDictionariesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonDictionariesTheoreticalTest(admin.ModelAdmin):
    model = PythonDictionariesTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonDictionariesTheory, AdminPythonDictionariesTheory)
admin.site.register(PythonDictionariesTheoreticalTest, AdminPythonDictionariesTheoreticalTest)


class AdminPythonSetsTheory(admin.ModelAdmin):
    model = PythonSetsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonSetsTheoreticalTest(admin.ModelAdmin):
    model = PythonSetsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonSetsTheory, AdminPythonSetsTheory)
admin.site.register(PythonSetsTheoreticalTest, AdminPythonSetsTheoreticalTest)


class AdminPythonArraysRelatedListsTheory(admin.ModelAdmin):
    model = PythonArraysRelatedListsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonArraysRelatedListsTheoreticalTest(admin.ModelAdmin):
    model = PythonArraysRelatedListsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonArraysRelatedListsTheory, AdminPythonArraysRelatedListsTheory)
admin.site.register(PythonArraysRelatedListsTheoreticalTest, AdminPythonArraysRelatedListsTheoreticalTest)


class AdminPythonStacsQueuesTheory(admin.ModelAdmin):
    model = PythonStacsQueuesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonStacsQueuesTheoreticalTest(admin.ModelAdmin):
    model = PythonStacsQueuesTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonStacsQueuesTheory, AdminPythonStacsQueuesTheory)
admin.site.register(PythonStacsQueuesTheoreticalTest, AdminPythonStacsQueuesTheoreticalTest)


class AdminPythonHashTablesTheory(admin.ModelAdmin):
    model = PythonHashTablesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonHashTablesTheoreticalTest(admin.ModelAdmin):
    model = PythonHashTablesTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonHashTablesTheory, AdminPythonHashTablesTheory)
admin.site.register(PythonHashTablesTheoreticalTest, AdminPythonHashTablesTheoreticalTest)


class AdminPythonIteratorsTheory(admin.ModelAdmin):
    model = PythonIteratorsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonIteratorsTheoreticalTest(admin.ModelAdmin):
    model = PythonIteratorsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonIteratorsTheory, AdminPythonIteratorsTheory)
admin.site.register(PythonIteratorsTheoreticalTest, AdminPythonIteratorsTheoreticalTest)


class AdminPythonFilesTheory(admin.ModelAdmin):
    model = PythonFilesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonFilesTheoreticalTest(admin.ModelAdmin):
    model = PythonFilesTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonFilesTheory, AdminPythonFilesTheory)
admin.site.register(PythonFilesTheoreticalTest, AdminPythonFilesTheoreticalTest)


class AdminPythonRecursionTheory(admin.ModelAdmin):
    model = PythonRecursionTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonRecursionTheoreticalTest(admin.ModelAdmin):
    model = PythonRecursionTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonRecursionTheory, AdminPythonRecursionTheory)
admin.site.register(PythonRecursionTheoreticalTest, AdminPythonRecursionTheoreticalTest)


class AdminPythonSortingTheory(admin.ModelAdmin):
    model = PythonSortingTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonSortingTheoreticalTest(admin.ModelAdmin):
    model = PythonSortingTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonSortingTheory, AdminPythonSortingTheory)
admin.site.register(PythonSortingTheoreticalTest, AdminPythonSortingTheoreticalTest)


class AdminPythonFunctionsBuiltinFunctionsTheory(admin.ModelAdmin):
    model = PythonFunctionsBuiltinFunctionsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonFunctionsBuiltinFunctionsTheoreticalTest(admin.ModelAdmin):
    model = PythonFunctionsBuiltinFunctionsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonFunctionsBuiltinFunctionsTheory, AdminPythonFunctionsBuiltinFunctionsTheory)
admin.site.register(PythonFunctionsBuiltinFunctionsTheoreticalTest, AdminPythonFunctionsBuiltinFunctionsTheoreticalTest)


class AdminPythonLambdaFunctionsTheory(admin.ModelAdmin):
    model = PythonLambdaFunctionsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonLambdaFunctionsTheoreticalTest(admin.ModelAdmin):
    model = PythonLambdaFunctionsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonLambdaFunctionsTheory, AdminPythonLambdaFunctionsTheory)
admin.site.register(PythonLambdaFunctionsTheoreticalTest, AdminPythonLambdaFunctionsTheoreticalTest)


class AdminPythonDecoratorsTheory(admin.ModelAdmin):
    model = PythonDecoratorsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonDecoratorsTheoreticalTest(admin.ModelAdmin):
    model = PythonDecoratorsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonDecoratorsTheory, AdminPythonDecoratorsTheory)
admin.site.register(PythonDecoratorsTheoreticalTest, AdminPythonDecoratorsTheoreticalTest)


class AdminPythonRegularExpressionsTheory(admin.ModelAdmin):
    model = PythonRegularExpressionsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonRegularExpressionsTheoreticalTest(admin.ModelAdmin):
    model = PythonRegularExpressionsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonRegularExpressionsTheory, AdminPythonRegularExpressionsTheory)
admin.site.register(PythonRegularExpressionsTheoreticalTest, AdminPythonRegularExpressionsTheoreticalTest)


class AdminPythonClassesTheory(admin.ModelAdmin):
    model = PythonClassesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonClassesTheoreticalTest(admin.ModelAdmin):
    model = PythonClassesTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonClassesTheory, AdminPythonClassesTheory)
admin.site.register(PythonClassesTheoreticalTest, AdminPythonClassesTheoreticalTest)


class AdminPythonMagicMethodsTheory(admin.ModelAdmin):
    model = PythonMagicMethodsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonMagicMethodsTheoreticalTest(admin.ModelAdmin):
    model = PythonMagicMethodsTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonMagicMethodsTheory, AdminPythonMagicMethodsTheory)
admin.site.register(PythonMagicMethodsTheoreticalTest, AdminPythonMagicMethodsTheoreticalTest)


class AdminPythonModulesTheory(admin.ModelAdmin):
    model = PythonModulesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonModulesTheoreticalTest(admin.ModelAdmin):
    model = PythonModulesTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonModulesTheory, AdminPythonModulesTheory)
admin.site.register(PythonModulesTheoreticalTest, AdminPythonModulesTheoreticalTest)


class AdminPythonPipPypiTheory(admin.ModelAdmin):
    model = PythonPipPypiTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonPipPypiTheoreticalTest(admin.ModelAdmin):
    model = PythonPipPypiTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonPipPypiTheory, AdminPythonPipPypiTheory)
admin.site.register(PythonPipPypiTheoreticalTest, AdminPythonPipPypiTheoreticalTest)


class AdminPythonBasicGitTheory(admin.ModelAdmin):
    model = PythonBasicGitTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonBasicGitTheoreticalTest(admin.ModelAdmin):
    model = PythonBasicGitTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonBasicGitTheory, AdminPythonBasicGitTheory)
admin.site.register(PythonBasicGitTheoreticalTest, AdminPythonBasicGitTheoreticalTest)


class AdminPythonGithubGitlabBitbucketTheory(admin.ModelAdmin):
    model = PythonGithubGitlabBitbucketTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonGithubGitlabBitbucketTheoreticalTest(admin.ModelAdmin):
    model = PythonGithubGitlabBitbucketTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonGithubGitlabBitbucketTheory, AdminPythonGithubGitlabBitbucketTheory)
admin.site.register(PythonGithubGitlabBitbucketTheoreticalTest, AdminPythonGithubGitlabBitbucketTheoreticalTest)


class AdminPythonFlaskTheory(admin.ModelAdmin):
    model = PythonFlaskTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonFlaskTheoreticalTest(admin.ModelAdmin):
    model = PythonFlaskTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonFlaskTheory, AdminPythonFlaskTheory)
admin.site.register(PythonFlaskTheoreticalTest, AdminPythonFlaskTheoreticalTest)


class AdminPythonPyramidTheory(admin.ModelAdmin):
    model = PythonPyramidTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonPyramidTheoreticalTest(admin.ModelAdmin):
    model = PythonPyramidTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonPyramidTheory, AdminPythonPyramidTheory)
admin.site.register(PythonPyramidTheoreticalTest, AdminPythonPyramidTheoreticalTest)


class AdminPythonDjangoTheory(admin.ModelAdmin):
    model = PythonDjangoTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonDjangoTheoreticalTest(admin.ModelAdmin):
    model = PythonDjangoTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonDjangoTheory, AdminPythonDjangoTheory)
admin.site.register(PythonDjangoTheoreticalTest, AdminPythonDjangoTheoreticalTest)


class AdminPythonGeventTheory(admin.ModelAdmin):
    model = PythonGeventTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonGeventTheoreticalTest(admin.ModelAdmin):
    model = PythonGeventTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonGeventTheory, AdminPythonGeventTheory)
admin.site.register(PythonGeventTheoreticalTest, AdminPythonGeventTheoreticalTest)


class AdminPythonSanicTheory(admin.ModelAdmin):
    model = PythonSanicTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonSanicTheoreticalTest(admin.ModelAdmin):
    model = PythonSanicTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonSanicTheory, AdminPythonSanicTheory)
admin.site.register(PythonSanicTheoreticalTest, AdminPythonSanicTheoreticalTest)


class AdminPythonTornadoTheory(admin.ModelAdmin):
    model = PythonTornadoTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTornadoTheoreticalTest(admin.ModelAdmin):
    model = PythonTornadoTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonTornadoTheory, AdminPythonTornadoTheory)
admin.site.register(PythonTornadoTheoreticalTest, AdminPythonTornadoTheoreticalTest)


class AdminPythonAiohttpTheory(admin.ModelAdmin):
    model = PythonAiohttpTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonAiohttpTheoreticalTest(admin.ModelAdmin):
    model = PythonAiohttpTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonAiohttpTheory, AdminPythonAiohttpTheory)
admin.site.register(PythonAiohttpTheoreticalTest, AdminPythonAiohttpTheoreticalTest)


class AdminPythonNoseTheory(admin.ModelAdmin):
    model = PythonNoseTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonNoseTheoreticalTest(admin.ModelAdmin):
    model = PythonNoseTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonNoseTheory, AdminPythonNoseTheory)
admin.site.register(PythonNoseTheoreticalTest, AdminPythonNoseTheoreticalTest)


class AdminPythonPytestTheory(admin.ModelAdmin):
    model = PythonPytestTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonPytestTheoreticalTest(admin.ModelAdmin):
    model = PythonPytestTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonPytestTheory, AdminPythonPytestTheory)
admin.site.register(PythonPytestTheoreticalTest, AdminPythonPytestTheoreticalTest)


class AdminPythonDoctestTheory(admin.ModelAdmin):
    model = PythonDoctestTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonDoctestTheoreticalTest(admin.ModelAdmin):
    model = PythonDoctestTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonDoctestTheory, AdminPythonDoctestTheory)
admin.site.register(PythonDoctestTheoreticalTest, AdminPythonDoctestTheoreticalTest)


class AdminPythonUnittestPyunitTheory(admin.ModelAdmin):
    model = PythonUnittestPyunitTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonUnittestPyunitTheoreticalTest(admin.ModelAdmin):
    model = PythonUnittestPyunitTheoreticalTest
    list_display = ('id', 'card_id', 'theme', 'question',
                    'level_1_slot_1_right_answer', 'level_1_slot_2_wrong_answer',
                    'level_2_slot_1_right_answer', 'level_2_slot_2_wrong_answer',
                    'level_2_slot_3_wrong_answer', 'level_2_slot_4_wrong_answer',
                    'level_3_slot_1_right_answer', 'level_3_slot_2_right_answer',
                    'level_3_slot_3_wrong_answer', 'level_3_slot_4_wrong_answer',
                    'level_4_slot_1_right_answer', 'level_4_slot_2_right_answer',
                    'level_4_slot_3_right_answer', 'level_4_slot_4_wrong_answer',
                    'question_ua',
                    'level_1_slot_1_right_answer_ua', 'level_1_slot_2_wrong_answer_ua',
                    'level_2_slot_1_right_answer_ua', 'level_2_slot_2_wrong_answer_ua',
                    'level_2_slot_3_wrong_answer_ua', 'level_2_slot_4_wrong_answer_ua',
                    'level_3_slot_1_right_answer_ua', 'level_3_slot_2_right_answer_ua',
                    'level_3_slot_3_wrong_answer_ua', 'level_3_slot_4_wrong_answer_ua',
                    'level_4_slot_1_right_answer_ua', 'level_4_slot_2_right_answer_ua',
                    'level_4_slot_3_right_answer_ua', 'level_4_slot_4_wrong_answer_ua',
                    'created_date')


admin.site.register(PythonUnittestPyunitTheory, AdminPythonUnittestPyunitTheory)
admin.site.register(PythonUnittestPyunitTheoreticalTest, AdminPythonUnittestPyunitTheoreticalTest)


class AdminGuestsVisitStatistic(admin.ModelAdmin):
    model = GuestsVisitStatistic
    list_display = ('guests_ip', 'guests_location', 'guests_hostname', 'visit_date', 'schools_email',
                    'teams_email', 'lets_try_it_date', 'language', 'programming_language', 'guests_level',
                    'lesson_time', 'test_time', 'start_lesson_time', 'start_test_time',
                    'end_theoretical_start_practical_test_time', 'end_test_time', 'theoretical_test_result',
                    'practical_test_result', 'register_date', 'statistic_date')


admin.site.register(GuestsVisitStatistic, AdminGuestsVisitStatistic)


class AdminJooTipsSiteErrorsStatistic(admin.ModelAdmin):
    model = JooTipsSiteErrorsStatistic
    list_display = ('guests_ip', 'guests_location', 'guests_hostname',
                    'error_400', 'error_403', 'error_404', 'error_500', 'record_date')


admin.site.register(JooTipsSiteErrorsStatistic, AdminJooTipsSiteErrorsStatistic)
