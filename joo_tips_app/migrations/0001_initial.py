# Generated by Django 4.0.2 on 2022-03-10 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GolangTheory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.TextField()),
                ('text', models.TextField()),
                ('text_ua', models.TextField()),
                ('created_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'golang_theory',
            },
        ),
        migrations.CreateModel(
            name='JavaScriptTheory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.TextField()),
                ('text', models.TextField()),
                ('text_ua', models.TextField()),
                ('created_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'javascript_theory',
            },
        ),
        migrations.CreateModel(
            name='PythonTheory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.TextField()),
                ('text', models.TextField()),
                ('text_ua', models.TextField()),
                ('created_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'python_theory',
            },
        ),
    ]
