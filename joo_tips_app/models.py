from django.db import models


class PythonBasicsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_basics_theory"


class PythonBasicsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonBasicsTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_basics_theoretical_task"


class PythonVariablesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_variables_theory"


class PythonVariablesTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonVariablesTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_variables_theoretical_task"


class PythonDataTypesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_data_types_theory"


class PythonDataTypesTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonDataTypesTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_data_types_theoretical_task"


class PythonExceptionsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_exceptions_theory"


class PythonExceptionsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonExceptionsTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_exceptions_theoretical_task"


class PythonStringsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_strings_theory"


class PythonStringsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonStringsTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_strings_theoretical_task"


class PythonListsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_lists_theory"


class PythonListsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonListsTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_lists_theoretical_task"


class PythonTuplesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_tuples_theory"


class PythonTuplesTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonTuplesTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_tuples_theoretical_task"


class PythonDictionariesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_dictionaries_theory"


class PythonDictionariesTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonDictionariesTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_dictionaries_theoretical_task"


class PythonSetsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_sets_theory"


class PythonSetsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonSetsTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_sets_theoretical_task"


class PythonArraysRelatedListsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_arrays_related_lists_theory"


class PythonArraysRelatedListsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonArraysRelatedListsTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_arrays_related_lists_theoretical_task"


class PythonStacsQueuesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_stacs_queues_theory"


class PythonStacsQueuesTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonStacsQueuesTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_stacs_queues_theoretical_task"


class PythonHashTablesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_hash_tables_theory"


class PythonHashTablesTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonHashTablesTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_hash_tables_theoretical_task"


class PythonIteratorsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_iterators_theory"


class PythonIteratorsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonIteratorsTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_iterators_theoretical_task"


class PythonFilesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_files_theory"


class PythonFilesTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonFilesTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_files_theoretical_task"


class PythonRecursionTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_recursion_theory"


class PythonRecursionTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonRecursionTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_recursion_theoretical_task"


class PythonSortingTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_sorting_theory"


class PythonSortingTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonSortingTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_sorting_theoretical_task"


class PythonFunctionsBuiltinFunctionsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_functions_builtin_functions_theory"


class PythonFunctionsBuiltinFunctionsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonDataTypesTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_functions_builtin_functions_theoretical_task"


class PythonLambdaFunctionsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_lambda_functions_theory"


class PythonLambdaFunctionsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonLambdaFunctionsTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_lambda_theoretical_task"


class PythonDecoratorsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_decorators_theory"


class PythonDecoratorsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonDecoratorsTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_decorators_theoretical_task"


class PythonRegularExpressionsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_regular_expressions_theory"


class PythonRegularExpressionsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonRegularExpressionsTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_regular_expressions_theoretical_task"


class PythonClassesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_classes_theory"


class PythonClassesTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonClassesTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_classes_theoretical_task"


class PythonMagicMethodsTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_magic_methods_theory"


class PythonMagicMethodsTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonMagicMethodsTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_magic_methods_theoretical_task"


class PythonModulesTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_modules_theory"


class PythonModulesTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonModulesTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_modules_theoretical_task"


class PythonPipPypiTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_pip_pypi_theory"


class PythonPipPypiTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonPipPypiTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_pip_pypi_theoretical_task"


class PythonBasicGitTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_basic_git_theory"


class PythonBasicGitTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonBasicGitTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_basic_git_theoretical_task"


class PythonGithubGitlabBitbucketTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_github_gitlab_bitbucket_theory"


class PythonGithubGitlabBitbucketTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonGithubGitlabBitbucketTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_github_gitlab_bitbucket_theoretical_task"


class PythonFlaskTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_flask_theory"


class PythonFlaskTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonFlaskTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_flask_theoretical_task"


class PythonPyramidTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_pyramid_theory"


class PythonPyramidTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonPyramidTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_pyramid_theoretical_task"


class PythonDjangoTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_django_theory"


class PythonDjangoTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonDjangoTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_django_theoretical_task"


class PythonGeventTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_gevent_theory"


class PythonGeventTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonGeventTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_gevent_theoretical_task"


class PythonSanicTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_sanic_theory"


class PythonSanicTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonSanicTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_sanic_theoretical_task"


class PythonTornadoTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_tornado_theory"


class PythonTornadoTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonTornadoTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_tornado_theoretical_task"


class PythonAiohttpTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_aiohttp_theory"


class PythonAiohttpTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonAiohttpTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_aiohttp_theoretical_task"


class PythonNoseTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_nose_theory"


class PythonNoseTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonNoseTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_nose_theoretical_task"


class PythonPytestTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_pytest_theory"


class PythonPytestTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonPytestTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_pytest_theoretical_task"


class PythonDoctestTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_doctest_theory"


class PythonDoctestTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonDoctestTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_doctest_theoretical_task"


class PythonUnittestPyunitTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme or self.text or self.text_ua or self.created_date

    class Meta:
        db_table = "python_unittest_pyunit_theory"


class PythonUnittestPyunitTheoreticalTask(models.Model):
    card = models.ForeignKey(PythonUnittestPyunitTheory, to_field="id", on_delete=models.CASCADE, editable=True)
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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "python_unittest_pyunit_theoretical_task"


class GuestsVisitStatistic(models.Model):
    guests_ip = models.TextField(null=True)
    guests_location = models.TextField(null=True)
    guests_hostname = models.TextField(null=True)
    visit_date = models.TextField(null=True)

    lets_try_it_date = models.TextField(null=True)
    language = models.TextField(null=True)
    programming_language = models.TextField(null=True)

    schools_email = models.TextField(null=True)
    teams_email = models.TextField(null=True)

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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "guests_visit_statistic"


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
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, "")))
        return " ".join(field_values)

    class Meta:
        db_table = "joo_tips_site_errors_statistic"
