from django.contrib import admin

from .models import *


class AdminPythonBasicsTheory(admin.ModelAdmin):
    model = PythonBasicsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonBasicsTheoreticalTest(admin.ModelAdmin):
    model = PythonBasicsTheoreticalTest
    list_display = [field.name for field in model._meta.get_fields()]


admin.site.register(PythonBasicsTheory, AdminPythonBasicsTheory)
admin.site.register(PythonBasicsTheoreticalTest, AdminPythonBasicsTheoreticalTest)


class AdminPythonTheoryVariables(admin.ModelAdmin):
    model = PythonVariablesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonVariablesTheoreticalTest(admin.ModelAdmin):
    model = PythonVariablesTheoreticalTest
    list_display = [field.name for field in model._meta.get_fields()]


admin.site.register(PythonVariablesTheory, AdminPythonTheoryVariables)
admin.site.register(PythonVariablesTheoreticalTest, AdminPythonVariablesTheoreticalTest)


class AdminPythonTheoryDataTypes(models.Model):
    model = PythonDataTypesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonDataTypesTheoreticalTest(admin.ModelAdmin):
    model = PythonDataTypesTheoreticalTest
    list_display = [field.name for field in model._meta.get_fields()]


admin.site.register(PythonDataTypesTheory, AdminPythonTheoryDataTypes)
admin.site.register(PythonDataTypesTheoreticalTest, AdminPythonDataTypesTheoreticalTest)


class AdminPythonExceptionsTheory(admin.ModelAdmin):
    model = PythonExceptionsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonExceptionsTheoreticalTest(admin.ModelAdmin):
    model = PythonExceptionsTheoreticalTest
    list_display = [field.name for field in model._meta.get_fields()]


admin.site.register(PythonExceptionsTheory, AdminPythonExceptionsTheory)
admin.site.register(PythonExceptionsTheoreticalTest, AdminPythonExceptionsTheoreticalTest)


class AdminPythonStringsTheory(admin.ModelAdmin):
    model = PythonStringsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonStringsTheoreticalTest(admin.ModelAdmin):
    model = PythonStringsTheoreticalTest
    list_display = [field.name for field in model._meta.get_fields()]


admin.site.register(PythonStringsTheory, AdminPythonStringsTheory)
admin.site.register(PythonStringsTheoreticalTest, AdminPythonStringsTheoreticalTest)


class AdminPythonListsTheory(admin.ModelAdmin):
    model = PythonListsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonListsTheoreticalTest(admin.ModelAdmin):
    model = PythonListsTheoreticalTest
    list_display = [field.name for field in model._meta.get_fields()]


admin.site.register(PythonListsTheory, AdminPythonListsTheory)
admin.site.register(PythonListsTheoreticalTest, AdminPythonListsTheoreticalTest)


class AdminPythonTuplesTheory(admin.ModelAdmin):
    model = PythonTuplesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTuplesTheoreticalTest(admin.ModelAdmin):
    model = PythonTuplesTheoreticalTest
    list_display = [field.name for field in model._meta.get_fields()]


admin.site.register(PythonTuplesTheory, AdminPythonTuplesTheory)
admin.site.register(PythonTuplesTheoreticalTest, AdminPythonTuplesTheoreticalTest)


class AdminPythonDictionariesTheory(admin.ModelAdmin):
    model = PythonDictionariesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonDictionariesTheoreticalTest(admin.ModelAdmin):
    model = PythonDictionariesTheoreticalTest
    list_display = [field.name for field in model._meta.get_fields()]


admin.site.register(PythonDictionariesTheory, AdminPythonDictionariesTheory)
admin.site.register(PythonDictionariesTheoreticalTest, AdminPythonDictionariesTheoreticalTest)


class AdminPythonSetsTheory(admin.ModelAdmin):
    model = PythonSetsTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonSetsTheoreticalTest(admin.ModelAdmin):
    model = PythonSetsTheoreticalTest
    list_display = [field.name for field in model._meta.get_fields()]


admin.site.register(PythonSetsTheory, AdminPythonSetsTheory)
admin.site.register(PythonSetsTheoreticalTest, AdminPythonSetsTheoreticalTest)

# TODO
class AdminPythonTheoryArraysRelatedLists(admin.ModelAdmin):
    model = PythonTheoryArraysRelatedLists
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryStacsQueues(admin.ModelAdmin):
    model = PythonTheoryStacsQueues
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryHashTables(admin.ModelAdmin):
    model = PythonTheoryHashTables
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryIterators(admin.ModelAdmin):
    model = PythonTheoryIterators
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryFiles(admin.ModelAdmin):
    model = PythonTheoryFiles
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryRecursion(admin.ModelAdmin):
    model = PythonTheoryRecursion
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheorySorting(admin.ModelAdmin):
    model = PythonTheorySorting
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryFunctionsBuiltinFunctions(admin.ModelAdmin):
    model = PythonTheoryFunctionsBuiltinFunctions
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryLambdaFunctions(admin.ModelAdmin):
    model = PythonTheoryLambdaFunctions
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryDecorators(admin.ModelAdmin):
    model = PythonTheoryDecorators
    list_display = [field.name for field in model._meta.get_fields()]


class AdminPythonTheoryRegularExpressions(admin.ModelAdmin):
    model = PythonTheoryRegularExpressions
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryClasses(admin.ModelAdmin):
    model = PythonTheoryClasses
    list_display = [field.name for field in model._meta.get_fields()]


class AdminPythonTheoryMagicMethods(admin.ModelAdmin):
    model = PythonTheoryMagicMethods
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryModules(admin.ModelAdmin):
    model = PythonModulesTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryPipPypi(admin.ModelAdmin):
    model = PythonPipPypiTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryBasicGit(admin.ModelAdmin):
    model = PythonBasicGitTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryGithubGitlabBitbucket(admin.ModelAdmin):
    model = PythonGithubGitlabBitbucketTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryFlask(admin.ModelAdmin):
    model = PythonFlaskTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryPyramid(admin.ModelAdmin):
    model = PythonTheoryPyramid
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryDjango(admin.ModelAdmin):
    model = PythonTheoryDjango
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryGevent(admin.ModelAdmin):
    model = PythonGeventTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheorySanic(admin.ModelAdmin):
    model = PythonTheorySanic
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryTornado(admin.ModelAdmin):
    model = PythonTornadoTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryAiohttp(admin.ModelAdmin):
    model = PythonTheoryAiohttp
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryNose(admin.ModelAdmin):
    model = PythonTheoryNose
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryPytest(admin.ModelAdmin):
    model = PythonPytestTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryDoctest(admin.ModelAdmin):
    model = PythonDoctestTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')


class AdminPythonTheoryUnittestPyunit(admin.ModelAdmin):
    model = PythonUnittestPyunitTheory
    list_display = ('id', 'theme', 'text', 'text_ua', 'created_date')
