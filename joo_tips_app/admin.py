from django.contrib import admin

from .models import *


class AdminPythonBasicsTheory(admin.ModelAdmin):
    model = PythonBasicsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonBasicsTheoreticalTask(admin.ModelAdmin):
    model = PythonBasicsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonBasicsTheory, AdminPythonBasicsTheory)
admin.site.register(PythonBasicsTheoreticalTask, AdminPythonBasicsTheoreticalTask)


class AdminPythonTheoryVariables(admin.ModelAdmin):
    model = PythonVariablesTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonVariablesTheoreticalTask(admin.ModelAdmin):
    model = PythonVariablesTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonVariablesTheory, AdminPythonTheoryVariables)
admin.site.register(PythonVariablesTheoreticalTask, AdminPythonVariablesTheoreticalTask)


class AdminPythonDataTypesTheory(admin.ModelAdmin):
    model = PythonDataTypesTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonDataTypesTheoreticalTask(admin.ModelAdmin):
    model = PythonDataTypesTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonDataTypesTheory, AdminPythonDataTypesTheory)
admin.site.register(PythonDataTypesTheoreticalTask, AdminPythonDataTypesTheoreticalTask)


class AdminPythonExceptionsTheory(admin.ModelAdmin):
    model = PythonExceptionsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonExceptionsTheoreticalTask(admin.ModelAdmin):
    model = PythonExceptionsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonExceptionsTheory, AdminPythonExceptionsTheory)
admin.site.register(PythonExceptionsTheoreticalTask, AdminPythonExceptionsTheoreticalTask)


class AdminPythonStringsTheory(admin.ModelAdmin):
    model = PythonStringsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonStringsTheoreticalTask(admin.ModelAdmin):
    model = PythonStringsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonStringsTheory, AdminPythonStringsTheory)
admin.site.register(PythonStringsTheoreticalTask, AdminPythonStringsTheoreticalTask)


class AdminPythonListsTheory(admin.ModelAdmin):
    model = PythonListsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonListsTheoreticalTask(admin.ModelAdmin):
    model = PythonListsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonListsTheory, AdminPythonListsTheory)
admin.site.register(PythonListsTheoreticalTask, AdminPythonListsTheoreticalTask)


class AdminPythonTuplesTheory(admin.ModelAdmin):
    model = PythonTuplesTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonTuplesTheoreticalTask(admin.ModelAdmin):
    model = PythonTuplesTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonTuplesTheory, AdminPythonTuplesTheory)
admin.site.register(PythonTuplesTheoreticalTask, AdminPythonTuplesTheoreticalTask)


class AdminPythonDictionariesTheory(admin.ModelAdmin):
    model = PythonDictionariesTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonDictionariesTheoreticalTask(admin.ModelAdmin):
    model = PythonDictionariesTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonDictionariesTheory, AdminPythonDictionariesTheory)
admin.site.register(PythonDictionariesTheoreticalTask, AdminPythonDictionariesTheoreticalTask)


class AdminPythonSetsTheory(admin.ModelAdmin):
    model = PythonSetsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonSetsTheoreticalTask(admin.ModelAdmin):
    model = PythonSetsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonSetsTheory, AdminPythonSetsTheory)
admin.site.register(PythonSetsTheoreticalTask, AdminPythonSetsTheoreticalTask)


class AdminPythonArraysRelatedListsTheory(admin.ModelAdmin):
    model = PythonArraysRelatedListsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonArraysRelatedListsTheoreticalTask(admin.ModelAdmin):
    model = PythonArraysRelatedListsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonArraysRelatedListsTheory, AdminPythonArraysRelatedListsTheory)
admin.site.register(PythonArraysRelatedListsTheoreticalTask, AdminPythonArraysRelatedListsTheoreticalTask)


class AdminPythonStacsQueuesTheory(admin.ModelAdmin):
    model = PythonStacsQueuesTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonStacsQueuesTheoreticalTask(admin.ModelAdmin):
    model = PythonStacsQueuesTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonStacsQueuesTheory, AdminPythonStacsQueuesTheory)
admin.site.register(PythonStacsQueuesTheoreticalTask, AdminPythonStacsQueuesTheoreticalTask)


class AdminPythonHashTablesTheory(admin.ModelAdmin):
    model = PythonHashTablesTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonHashTablesTheoreticalTask(admin.ModelAdmin):
    model = PythonHashTablesTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonHashTablesTheory, AdminPythonHashTablesTheory)
admin.site.register(PythonHashTablesTheoreticalTask, AdminPythonHashTablesTheoreticalTask)


class AdminPythonIteratorsTheory(admin.ModelAdmin):
    model = PythonIteratorsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonIteratorsTheoreticalTask(admin.ModelAdmin):
    model = PythonIteratorsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonIteratorsTheory, AdminPythonIteratorsTheory)
admin.site.register(PythonIteratorsTheoreticalTask, AdminPythonIteratorsTheoreticalTask)


class AdminPythonFilesTheory(admin.ModelAdmin):
    model = PythonFilesTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonFilesTheoreticalTask(admin.ModelAdmin):
    model = PythonFilesTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonFilesTheory, AdminPythonFilesTheory)
admin.site.register(PythonFilesTheoreticalTask, AdminPythonFilesTheoreticalTask)


class AdminPythonRecursionTheory(admin.ModelAdmin):
    model = PythonRecursionTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonRecursionTheoreticalTask(admin.ModelAdmin):
    model = PythonRecursionTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonRecursionTheory, AdminPythonRecursionTheory)
admin.site.register(PythonRecursionTheoreticalTask, AdminPythonRecursionTheoreticalTask)


class AdminPythonSortingTheory(admin.ModelAdmin):
    model = PythonSortingTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonSortingTheoreticalTask(admin.ModelAdmin):
    model = PythonSortingTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonSortingTheory, AdminPythonSortingTheory)
admin.site.register(PythonSortingTheoreticalTask, AdminPythonSortingTheoreticalTask)


class AdminPythonFunctionsBuiltinFunctionsTheory(admin.ModelAdmin):
    model = PythonFunctionsBuiltinFunctionsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonFunctionsBuiltinFunctionsTheoreticalTask(admin.ModelAdmin):
    model = PythonFunctionsBuiltinFunctionsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonFunctionsBuiltinFunctionsTheory, AdminPythonFunctionsBuiltinFunctionsTheory)
admin.site.register(
    PythonFunctionsBuiltinFunctionsTheoreticalTask,
    AdminPythonFunctionsBuiltinFunctionsTheoreticalTask,
)


class AdminPythonLambdaFunctionsTheory(admin.ModelAdmin):
    model = PythonLambdaFunctionsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonLambdaFunctionsTheoreticalTask(admin.ModelAdmin):
    model = PythonLambdaFunctionsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonLambdaFunctionsTheory, AdminPythonLambdaFunctionsTheory)
admin.site.register(PythonLambdaFunctionsTheoreticalTask, AdminPythonLambdaFunctionsTheoreticalTask)


class AdminPythonDecoratorsTheory(admin.ModelAdmin):
    model = PythonDecoratorsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonDecoratorsTheoreticalTask(admin.ModelAdmin):
    model = PythonDecoratorsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonDecoratorsTheory, AdminPythonDecoratorsTheory)
admin.site.register(PythonDecoratorsTheoreticalTask, AdminPythonDecoratorsTheoreticalTask)


class AdminPythonRegularExpressionsTheory(admin.ModelAdmin):
    model = PythonRegularExpressionsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonRegularExpressionsTheoreticalTask(admin.ModelAdmin):
    model = PythonRegularExpressionsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonRegularExpressionsTheory, AdminPythonRegularExpressionsTheory)
admin.site.register(PythonRegularExpressionsTheoreticalTask, AdminPythonRegularExpressionsTheoreticalTask)


class AdminPythonClassesTheory(admin.ModelAdmin):
    model = PythonClassesTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonClassesTheoreticalTask(admin.ModelAdmin):
    model = PythonClassesTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonClassesTheory, AdminPythonClassesTheory)
admin.site.register(PythonClassesTheoreticalTask, AdminPythonClassesTheoreticalTask)


class AdminPythonMagicMethodsTheory(admin.ModelAdmin):
    model = PythonMagicMethodsTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonMagicMethodsTheoreticalTask(admin.ModelAdmin):
    model = PythonMagicMethodsTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonMagicMethodsTheory, AdminPythonMagicMethodsTheory)
admin.site.register(PythonMagicMethodsTheoreticalTask, AdminPythonMagicMethodsTheoreticalTask)


class AdminPythonModulesTheory(admin.ModelAdmin):
    model = PythonModulesTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonModulesTheoreticalTask(admin.ModelAdmin):
    model = PythonModulesTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonModulesTheory, AdminPythonModulesTheory)
admin.site.register(PythonModulesTheoreticalTask, AdminPythonModulesTheoreticalTask)


class AdminPythonPipPypiTheory(admin.ModelAdmin):
    model = PythonPipPypiTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonPipPypiTheoreticalTask(admin.ModelAdmin):
    model = PythonPipPypiTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonPipPypiTheory, AdminPythonPipPypiTheory)
admin.site.register(PythonPipPypiTheoreticalTask, AdminPythonPipPypiTheoreticalTask)


class AdminPythonBasicGitTheory(admin.ModelAdmin):
    model = PythonBasicGitTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonBasicGitTheoreticalTask(admin.ModelAdmin):
    model = PythonBasicGitTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonBasicGitTheory, AdminPythonBasicGitTheory)
admin.site.register(PythonBasicGitTheoreticalTask, AdminPythonBasicGitTheoreticalTask)


class AdminPythonGithubGitlabBitbucketTheory(admin.ModelAdmin):
    model = PythonGithubGitlabBitbucketTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonGithubGitlabBitbucketTheoreticalTask(admin.ModelAdmin):
    model = PythonGithubGitlabBitbucketTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonGithubGitlabBitbucketTheory, AdminPythonGithubGitlabBitbucketTheory)
admin.site.register(PythonGithubGitlabBitbucketTheoreticalTask, AdminPythonGithubGitlabBitbucketTheoreticalTask)


class AdminPythonFlaskTheory(admin.ModelAdmin):
    model = PythonFlaskTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonFlaskTheoreticalTask(admin.ModelAdmin):
    model = PythonFlaskTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonFlaskTheory, AdminPythonFlaskTheory)
admin.site.register(PythonFlaskTheoreticalTask, AdminPythonFlaskTheoreticalTask)


class AdminPythonPyramidTheory(admin.ModelAdmin):
    model = PythonPyramidTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonPyramidTheoreticalTask(admin.ModelAdmin):
    model = PythonPyramidTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonPyramidTheory, AdminPythonPyramidTheory)
admin.site.register(PythonPyramidTheoreticalTask, AdminPythonPyramidTheoreticalTask)


class AdminPythonDjangoTheory(admin.ModelAdmin):
    model = PythonDjangoTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonDjangoTheoreticalTask(admin.ModelAdmin):
    model = PythonDjangoTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonDjangoTheory, AdminPythonDjangoTheory)
admin.site.register(PythonDjangoTheoreticalTask, AdminPythonDjangoTheoreticalTask)


class AdminPythonGeventTheory(admin.ModelAdmin):
    model = PythonGeventTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonGeventTheoreticalTask(admin.ModelAdmin):
    model = PythonGeventTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonGeventTheory, AdminPythonGeventTheory)
admin.site.register(PythonGeventTheoreticalTask, AdminPythonGeventTheoreticalTask)


class AdminPythonSanicTheory(admin.ModelAdmin):
    model = PythonSanicTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonSanicTheoreticalTask(admin.ModelAdmin):
    model = PythonSanicTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonSanicTheory, AdminPythonSanicTheory)
admin.site.register(PythonSanicTheoreticalTask, AdminPythonSanicTheoreticalTask)


class AdminPythonTornadoTheory(admin.ModelAdmin):
    model = PythonTornadoTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonTornadoTheoreticalTask(admin.ModelAdmin):
    model = PythonTornadoTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonTornadoTheory, AdminPythonTornadoTheory)
admin.site.register(PythonTornadoTheoreticalTask, AdminPythonTornadoTheoreticalTask)


class AdminPythonAiohttpTheory(admin.ModelAdmin):
    model = PythonAiohttpTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonAiohttpTheoreticalTask(admin.ModelAdmin):
    model = PythonAiohttpTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonAiohttpTheory, AdminPythonAiohttpTheory)
admin.site.register(PythonAiohttpTheoreticalTask, AdminPythonAiohttpTheoreticalTask)


class AdminPythonNoseTheory(admin.ModelAdmin):
    model = PythonNoseTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonNoseTheoreticalTask(admin.ModelAdmin):
    model = PythonNoseTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonNoseTheory, AdminPythonNoseTheory)
admin.site.register(PythonNoseTheoreticalTask, AdminPythonNoseTheoreticalTask)


class AdminPythonPytestTheory(admin.ModelAdmin):
    model = PythonPytestTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonPytestTheoreticalTask(admin.ModelAdmin):
    model = PythonPytestTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonPytestTheory, AdminPythonPytestTheory)
admin.site.register(PythonPytestTheoreticalTask, AdminPythonPytestTheoreticalTask)


class AdminPythonDoctestTheory(admin.ModelAdmin):
    model = PythonDoctestTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonDoctestTheoreticalTask(admin.ModelAdmin):
    model = PythonDoctestTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonDoctestTheory, AdminPythonDoctestTheory)
admin.site.register(PythonDoctestTheoreticalTask, AdminPythonDoctestTheoreticalTask)


class AdminPythonUnittestPyunitTheory(admin.ModelAdmin):
    model = PythonUnittestPyunitTheory
    list_display = ("id", "theme", "text", "text_ua", "created_date")


class AdminPythonUnittestPyunitTheoreticalTask(admin.ModelAdmin):
    model = PythonUnittestPyunitTheoreticalTask
    list_display = (
        "id",
        "card_id",
        "theme",
        "question",
        "level_1_slot_1_right_answer",
        "level_1_slot_2_wrong_answer",
        "level_2_slot_1_right_answer",
        "level_2_slot_2_wrong_answer",
        "level_2_slot_3_wrong_answer",
        "level_2_slot_4_wrong_answer",
        "level_3_slot_1_right_answer",
        "level_3_slot_2_right_answer",
        "level_3_slot_3_wrong_answer",
        "level_3_slot_4_wrong_answer",
        "level_4_slot_1_right_answer",
        "level_4_slot_2_right_answer",
        "level_4_slot_3_right_answer",
        "level_4_slot_4_wrong_answer",
        "question_ua",
        "level_1_slot_1_right_answer_ua",
        "level_1_slot_2_wrong_answer_ua",
        "level_2_slot_1_right_answer_ua",
        "level_2_slot_2_wrong_answer_ua",
        "level_2_slot_3_wrong_answer_ua",
        "level_2_slot_4_wrong_answer_ua",
        "level_3_slot_1_right_answer_ua",
        "level_3_slot_2_right_answer_ua",
        "level_3_slot_3_wrong_answer_ua",
        "level_3_slot_4_wrong_answer_ua",
        "level_4_slot_1_right_answer_ua",
        "level_4_slot_2_right_answer_ua",
        "level_4_slot_3_right_answer_ua",
        "level_4_slot_4_wrong_answer_ua",
        "created_date",
    )


admin.site.register(PythonUnittestPyunitTheory, AdminPythonUnittestPyunitTheory)
admin.site.register(PythonUnittestPyunitTheoreticalTask, AdminPythonUnittestPyunitTheoreticalTask)


class AdminGuestsVisitStatistic(admin.ModelAdmin):
    model = GuestsVisitStatistic
    list_display = (
        "id",
        "guests_ip",
        "guests_location",
        "guests_hostname",
        "visit_date",
        "schools_email",
        "teams_email",
        "lets_try_it_date",
        "language",
        "programming_language",
        "guests_level",
        "lesson_time",
        "test_time",
        "start_lesson_time",
        "start_test_time",
        "end_theoretical_start_practical_test_time",
        "end_test_time",
        "theoretical_test_result",
        "practical_test_result",
        "register_date",
        "statistic_date",
    )


admin.site.register(GuestsVisitStatistic, AdminGuestsVisitStatistic)


class AdminJooTipsSiteErrorsStatistic(admin.ModelAdmin):
    model = JooTipsSiteErrorsStatistic
    list_display = (
        "id",
        "guests_ip",
        "guests_location",
        "guests_hostname",
        "error_400",
        "error_403",
        "error_404",
        "error_500",
        "record_date",
    )


admin.site.register(JooTipsSiteErrorsStatistic, AdminJooTipsSiteErrorsStatistic)
