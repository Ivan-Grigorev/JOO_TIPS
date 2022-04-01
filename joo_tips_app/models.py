from django.db import models

from django.contrib.auth.models import User


class PythonTheoryBasics(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_basics'


class PythonTheoryVariables(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_variables'


class PythonTheoryDataTypes(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_data_types'


class PythonTheoryExceptions(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_exceptions'


class PythonTheoryStrings(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_strings'


class PythonTheoryLists(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_lists'


class PythonTheoryTuples(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_tuples'


class PythonTheoryDictionaries(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_dictionaries'


class PythonTheorySets(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_sets'


class PythonTheoryArraysRelatedLists(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_arrays_related_lists'


class PythonTheoryStacsQueues(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_stacs_queues'


class PythonTheoryHashTables(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_hash_tables'


class PythonTheoryIterators(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_iterators'


class PythonTheoryFiles(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_files'


class PythonTheoryRecursion(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_recursion'


class PythonTheorySorting(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_sorting'


class PythonTheoryFunctionsBuiltinFunctions(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_functions_builtin_functions'


class PythonTheoryLambdaFunctions(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_lambda_functions'


class PythonTheoryDecorators(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_decorators'


class PythonTheoryRegularExpressions(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_regular_expressions'


class PythonTheoryClasses(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_classes'


class PythonTheoryMagicMethods(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_magic_methods'


class PythonTheoryModules(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_modules'


class PythonTheoryPipPypi(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_pip_pypi'


class PythonTheoryBasicGit(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_basic_git'


class PythonTheoryGithubGitlabBitbucket(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_github_gitlab_bitbucket'


class PythonTheoryFlask(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_flask'


class PythonTheoryPyramid(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_pyramid'


class PythonTheoryDjango(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_django'


class PythonTheoryGevent(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_gevent'


class PythonTheorySanic(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_sanic'


class PythonTheoryTornado(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_tornado'


class PythonTheoryAiohttp(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_aiohttp'


class PythonTheoryNose(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_nose'


class PythonTheoryPytest(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_pytest'


class PythonTheoryDoctest(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_doctest'


class PythonTheoryUnittestPyunit(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory_unittest_pyunit'


class PythonBasicsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonTheoryBasics, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField()

    question = models.TextField()
    level_1_slot_1_right_answer = models.TextField()
    level_1_slot_2_wrong_answer = models.TextField()

    level_2_slot_1_right_answer = models.TextField()
    level_2_slot_2_wrong_answer = models.TextField()
    level_2_slot_3_wrong_answer = models.TextField()
    level_2_slot_4_wrong_answer = models.TextField()

    level_3_slot_1_right_answer = models.TextField()
    level_3_slot_2_right_answer = models.TextField()
    level_3_slot_3_wrong_answer = models.TextField()
    level_3_slot_4_wrong_answer = models.TextField()

    level_4_slot_1_right_answer = models.TextField()
    level_4_slot_2_wrong_answer = models.TextField()
    level_4_slot_3_wrong_answer = models.TextField()
    level_4_slot_4_wrong_answer = models.TextField()

    question_ua = models.TextField()
    level_1_slot_1_right_answer_ua = models.TextField()
    level_1_slot_2_wrong_answer_ua = models.TextField()

    level_2_slot_1_right_answer_ua = models.TextField()
    level_2_slot_2_wrong_answer_ua = models.TextField()
    level_2_slot_3_wrong_answer_ua = models.TextField()
    level_2_slot_4_wrong_answer_ua = models.TextField()

    level_3_slot_1_right_answer_ua = models.TextField()
    level_3_slot_2_right_answer_ua = models.TextField()
    level_3_slot_3_wrong_answer_ua = models.TextField()
    level_3_slot_4_wrong_answer_ua = models.TextField()

    level_4_slot_1_right_answer_ua = models.TextField()
    level_4_slot_2_wrong_answer_ua = models.TextField()
    level_4_slot_3_wrong_answer_ua = models.TextField()
    level_4_slot_4_wrong_answer_ua = models.TextField()

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_basics_theoretical_test'


class PythonVariablesTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonTheoryVariables, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField()

    question = models.TextField()
    level_1_slot_1_right_answer = models.TextField()
    level_1_slot_2_wrong_answer = models.TextField()

    level_2_slot_1_right_answer = models.TextField()
    level_2_slot_2_wrong_answer = models.TextField()
    level_2_slot_3_wrong_answer = models.TextField()
    level_2_slot_4_wrong_answer = models.TextField()

    level_3_slot_1_right_answer = models.TextField()
    level_3_slot_2_right_answer = models.TextField()
    level_3_slot_3_wrong_answer = models.TextField()
    level_3_slot_4_wrong_answer = models.TextField()

    level_4_slot_1_right_answer = models.TextField()
    level_4_slot_2_wrong_answer = models.TextField()
    level_4_slot_3_wrong_answer = models.TextField()
    level_4_slot_4_wrong_answer = models.TextField()

    question_ua = models.TextField()
    level_1_slot_1_right_answer_ua = models.TextField()
    level_1_slot_2_wrong_answer_ua = models.TextField()

    level_2_slot_1_right_answer_ua = models.TextField()
    level_2_slot_2_wrong_answer_ua = models.TextField()
    level_2_slot_3_wrong_answer_ua = models.TextField()
    level_2_slot_4_wrong_answer_ua = models.TextField()

    level_3_slot_1_right_answer_ua = models.TextField()
    level_3_slot_2_right_answer_ua = models.TextField()
    level_3_slot_3_wrong_answer_ua = models.TextField()
    level_3_slot_4_wrong_answer_ua = models.TextField()

    level_4_slot_1_right_answer_ua = models.TextField()
    level_4_slot_2_wrong_answer_ua = models.TextField()
    level_4_slot_3_wrong_answer_ua = models.TextField()
    level_4_slot_4_wrong_answer_ua = models.TextField()

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return

    class Meta:
        db_table = 'python_variables_theoretical_test'


class PythonDataTypesTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonTheoryDataTypes, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField()

    question = models.TextField()
    level_1_slot_1_right_answer = models.TextField()
    level_1_slot_2_wrong_answer = models.TextField()

    level_2_slot_1_right_answer = models.TextField()
    level_2_slot_2_wrong_answer = models.TextField()
    level_2_slot_3_wrong_answer = models.TextField()
    level_2_slot_4_wrong_answer = models.TextField()

    level_3_slot_1_right_answer = models.TextField()
    level_3_slot_2_right_answer = models.TextField()
    level_3_slot_3_wrong_answer = models.TextField()
    level_3_slot_4_wrong_answer = models.TextField()

    level_4_slot_1_right_answer = models.TextField()
    level_4_slot_2_wrong_answer = models.TextField()
    level_4_slot_3_wrong_answer = models.TextField()
    level_4_slot_4_wrong_answer = models.TextField()

    question_ua = models.TextField()
    level_1_slot_1_right_answer_ua = models.TextField()
    level_1_slot_2_wrong_answer_ua = models.TextField()

    level_2_slot_1_right_answer_ua = models.TextField()
    level_2_slot_2_wrong_answer_ua = models.TextField()
    level_2_slot_3_wrong_answer_ua = models.TextField()
    level_2_slot_4_wrong_answer_ua = models.TextField()

    level_3_slot_1_right_answer_ua = models.TextField()
    level_3_slot_2_right_answer_ua = models.TextField()
    level_3_slot_3_wrong_answer_ua = models.TextField()
    level_3_slot_4_wrong_answer_ua = models.TextField()

    level_4_slot_1_right_answer_ua = models.TextField()
    level_4_slot_2_wrong_answer_ua = models.TextField()
    level_4_slot_3_wrong_answer_ua = models.TextField()
    level_4_slot_4_wrong_answer_ua = models.TextField()

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return

    class Meta:
        db_table = 'python_data_types_theoretical_test'


class GolangTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'golang_theory'


class JavaScriptTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'javascript_theory'
