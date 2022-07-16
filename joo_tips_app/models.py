from django.db import models


class PythonBasicsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_basics_theory'


class PythonBasicsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonBasicsTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_basics_theoretical_test'


class PythonVariablesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_variables_theory'


class PythonVariablesTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonVariablesTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_variables_theoretical_test'


class PythonDataTypesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = 'python_data_types_theory'


class PythonDataTypesTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonDataTypesTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_data_types_theoretical_test'


class PythonExceptionsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_exceptions_theory'


class PythonExceptionsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonExceptionsTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_exceptions_theoretical_test'


class PythonStringsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_strings_theory'


class PythonStringsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonStringsTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_strings_theoretical_test'


class PythonListsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_lists_theory'


class PythonListsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonListsTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_lists_theoretical_test'


class PythonTuplesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_tuples_theory'


class PythonTuplesTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonTuplesTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_tuples_theoretical_test'


class PythonDictionariesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_dictionaries_theory'


class PythonDictionariesTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonDictionariesTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_dictionaries_theoretical_test'


class PythonSetsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_sets_theory'


class PythonSetsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonSetsTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_sets_theoretical_test'


class PythonArraysRelatedListsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_arrays_related_lists_theory'


class PythonArraysRelatedListsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonArraysRelatedListsTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_arrays_related_lists_theoretical_test'


class PythonStacsQueuesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_stacs_queues_theory'


class PythonStacsQueuesTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonStacsQueuesTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_stacs_queues_theoretical_test'


class PythonHashTablesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_hash_tables_theory'


class PythonHashTablesTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonHashTablesTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_hash_tables_theoretical_test'


class PythonIteratorsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_iterators_theory'


class PythonIteratorsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonIteratorsTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_iterators_theoretical_test'


class PythonFilesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_files_theory'


class PythonFilesTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonFilesTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_files_theoretical_test'


class PythonRecursionTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_recursion_theory'


class PythonRecursionTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonRecursionTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_recursion_theoretical_test'


class PythonSortingTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_sorting_theory'


class PythonSortingTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonSortingTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_sorting_theoretical_test'


class PythonFunctionsBuiltinFunctionsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_functions_builtin_functions_theory'


class PythonFunctionsBuiltinFunctionsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonDataTypesTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_functions_builtin_functions_theoretical_test'


class PythonLambdaFunctionsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_lambda_functions_theory'


class PythonLambdaFunctionsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonLambdaFunctionsTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_lambda_theoretical_test'


class PythonDecoratorsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_decorators_theory'


class PythonDecoratorsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonDecoratorsTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_decorators_theoretical_test'


class PythonRegularExpressionsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_regular_expressions_theory'


class PythonRegularExpressionsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonRegularExpressionsTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_regular_expressions_theoretical_test'


class PythonClassesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_classes_theory'


class PythonClassesTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonClassesTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_classes_theoretical_test'


class PythonMagicMethodsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_magic_methods_theory'


class PythonMagicMethodsTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonMagicMethodsTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_magic_methods_theoretical_test'


class PythonModulesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_modules_theory'


class PythonModulesTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonModulesTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_modules_theoretical_test'


class PythonPipPypiTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_pip_pypi_theory'


class PythonPipPypiTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonPipPypiTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_pip_pypi_theoretical_test'


class PythonBasicGitTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_basic_git_theory'


class PythonBasicGitTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonBasicGitTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_basic_git_theoretical_test'


class PythonGithubGitlabBitbucketTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_github_gitlab_bitbucket_theory'


class PythonGithubGitlabBitbucketTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonGithubGitlabBitbucketTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_github_gitlab_bitbucket_theoretical_test'


class PythonFlaskTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_flask_theory'


class PythonFlaskTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonFlaskTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_flask_theoretical_test'


class PythonPyramidTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_pyramid_theory'


class PythonPyramidTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonPyramidTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_pyramid_theoretical_test'


class PythonDjangoTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_django_theory'


class PythonDjangoTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonDjangoTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_django_theoretical_test'


class PythonGeventTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_gevent_theory'


class PythonGeventTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonGeventTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_gevent_theoretical_test'


class PythonSanicTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_sanic_theory'


class PythonSanicTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonSanicTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_sanic_theoretical_test'


class PythonTornadoTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_tornado_theory'


class PythonTornadoTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonTornadoTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_tornado_theoretical_test'


class PythonAiohttpTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_aiohttp_theory'


class PythonAiohttpTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonAiohttpTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_aiohttp_theoretical_test'


class PythonNoseTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_nose_theory'


class PythonNoseTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonNoseTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_nose_theoretical_test'


class PythonPytestTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_pytest_theory'


class PythonPytestTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonPytestTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_pytest_theoretical_test'


class PythonDoctestTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_doctest_theory'


class PythonDoctestTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonDoctestTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_doctest_theoretical_test'


class PythonUnittestPyunitTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_unittest_pyunit_theory'


class PythonUnittestPyunitTheoreticalTest(models.Model):
    card_id = models.ForeignKey(PythonUnittestPyunitTheory, to_field='id', on_delete=models.CASCADE)
    theme = models.TextField(null=True)

    question = models.TextField(null=True)
    level_1_slot_1_right_answer = models.TextField(null=True)
    level_1_slot_2_wrong_answer = models.TextField(null=True)

    level_2_slot_1_right_answer = models.TextField(null=True)
    level_2_slot_2_wrong_answer = models.TextField(null=True)
    level_2_slot_3_wrong_answer = models.TextField(null=True)
    level_2_slot_4_wrong_answer = models.TextField(null=True)

    level_3_slot_1_right_answer = models.TextField(null=True)
    level_3_slot_2_right_answer = models.TextField(null=True)
    level_3_slot_3_wrong_answer = models.TextField(null=True)
    level_3_slot_4_wrong_answer = models.TextField(null=True)

    level_4_slot_1_right_answer = models.TextField(null=True)
    level_4_slot_2_right_answer = models.TextField(null=True)
    level_4_slot_3_right_answer = models.TextField(null=True)
    level_4_slot_4_wrong_answer = models.TextField(null=True)

    question_ua = models.TextField(null=True)
    level_1_slot_1_right_answer_ua = models.TextField(null=True)
    level_1_slot_2_wrong_answer_ua = models.TextField(null=True)

    level_2_slot_1_right_answer_ua = models.TextField(null=True)
    level_2_slot_2_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_2_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_3_slot_1_right_answer_ua = models.TextField(null=True)
    level_3_slot_2_right_answer_ua = models.TextField(null=True)
    level_3_slot_3_wrong_answer_ua = models.TextField(null=True)
    level_3_slot_4_wrong_answer_ua = models.TextField(null=True)

    level_4_slot_1_right_answer_ua = models.TextField(null=True)
    level_4_slot_2_right_answer_ua = models.TextField(null=True)
    level_4_slot_3_right_answer_ua = models.TextField(null=True)
    level_4_slot_4_wrong_answer_ua = models.TextField(null=True)

    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question or self.level_1_slot_1_right_answer or self.level_1_slot_2_wrong_answer or \
               self.question_ua or self.level_1_slot_1_right_answer_ua or self.level_1_slot_2_wrong_answer_ua

    class Meta:
        db_table = 'python_unittest_pyunit_theoretical_test'


class GuestsVisitStatistic(models.Model):
    guests_ip = models.TextField(null=True)
    guests_location = models.TextField(null=True)
    guests_hostname = models.TextField(null=True)
    visit_date = models.TextField(null=True)

    schools_email = models.TextField(null=True)
    teams_email = models.TextField(null=True)

    lets_try_it_date = models.TextField(null=True)
    language = models.TextField(null=True)
    programming_language = models.TextField(null=True)

    guests_level = models.TextField(null=True)
    lesson_time = models.TextField(null=True)
    test_time = models.TextField(null=True)
    start_lesson_time = models.TextField(null=True)
    start_test_time = models.TextField(null=True)
    end_theoretical_start_practical_test_time = models.TextField(null=True)
    end_test_time = models.TextField(null=True)

    theoretical_test_result = models.TextField(null=True)
    practical_test_result = models.TextField(null=True)

    register_date = models.TextField(null=True)
    statistic_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.guests_location  # get_all_fields()

    class Meta:
        db_table = 'guests_visit_statistic'


class JooTipsSiteErrorsStatistic(models.Model):
    guests_ip = models.TextField(null=True)
    guests_location = models.TextField(null=True)
    guests_hostname = models.TextField(null=True)
    error_400 = models.BooleanField(default=False)
    error_403 = models.BooleanField(default=False)
    error_404 = models.BooleanField(default=False)
    error_500 = models.BooleanField(default=False)
    record_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.guests_ip\
               or self.guests_location\
               or self.guests_hostname\
               or self.error_400\
               or self.error_403\
               or self.error_404\
               or self.error_500\
               or self.record_date

    class Meta:
        db_table = 'joo_tips_site_errors_statistic'

