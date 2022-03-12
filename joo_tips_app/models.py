from django.db import models

from django.contrib.auth.models import User


class PythonTheory(models.Model):
    theme = models.TextField()
    text = models.TextField()
    text_ua = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text or self.text_ua

    class Meta:
        db_table = 'python_theory'


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
