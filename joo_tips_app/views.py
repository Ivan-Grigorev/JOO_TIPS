import importlib
import random
from datetime import datetime, timedelta

import ipinfo
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from django.shortcuts import redirect, render
from django.views.generic import TemplateView

from .models import *


class HomePage(TemplateView):
    model = GuestsVisitStatistic
    template_name = "homepage.html"

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
        if x_forwarded_for:
            ip = x_forwarded_for.split(",")[0]
        else:
            ip = request.META.get("REMOTE_ADDR")
        http_data = ipinfo.getHandler("001b08d2dda8e6").getDetails(ip)
        record = self.model(
            guests_ip=ip,
            guests_location=[
                http_data.city if "city" in http_data.__dict__["details"].keys() else None,
                http_data.country_name if "country_name" in http_data.__dict__["details"].keys() else None,
            ],
            guests_hostname=http_data.hostname if "hostname" in http_data.__dict__["details"].keys() else None,
            visit_date=datetime.now(),
        )
        record.save()
        return render(request, template_name="homepage.html")

    def post(self, request, *args, **kwargs):
        record = self.model(
            schools_email=request.POST.get("school-email"),
            teams_email=request.POST.get("team-email"),
        )
        record.save()
        return render(request, template_name="homepage.html")


class ProgrammingLanguageChoice(TemplateView):
    model = GuestsVisitStatistic
    template_name = "programming_language_choice.html"

    def get(self, request, *args, **kwargs):
        record = self.model(lets_try_it_date=datetime.now(), language="English")
        record.save()
        return render(request, template_name="programming_language_choice.html")


# class PythonLesson(TemplateView):
#     model = GuestsVisitStatistic
#     template_name = "web_site_in_process.html"
#
#     def get(self, request, *args, **kwargs):
#         record = self.model(language="English", programming_language="Python")
#         record.save()
#         return render(request, template_name="web_site_in_process.html")


# TODO
class PythonLessonTime:
    lesson_time = ""
    test_time = ""


class PythonLesson(TemplateView):
    model = GuestsVisitStatistic
    template_name = "python/python_themes_time.html"
    test_time = ""
    lesson_time = ""
    guest_level = ""

    def get(self, request, *args, **kwargs):
        record = self.model(language="English", programming_language="Python")
        record.save()
        if not self.request.user.is_authenticated:
            return render(request, template_name="web_site_in_process.html")
        return render(request, template_name="python/python_themes_time.html")

    def post(self, request, *args, **kwargs):
        self.test_time = (datetime.utcnow() + timedelta(minutes=int(request.POST.get("time")))).ctime()
        self.lesson_time = (datetime.utcnow() + timedelta(minutes=int(request.POST.get("time")) / 2)).ctime()
        PythonLessonTime.test_time = (datetime.utcnow() + timedelta(minutes=int(request.POST.get("time")))).ctime()
        PythonLessonTime.lesson_time = (
            datetime.utcnow() + timedelta(minutes=int(request.POST.get("time")) / 2)
        ).ctime()
        self.guest_level = request.POST.get("level")
        record = self.model(
            guests_level=self.guest_level,
            test_time=self.test_time,
            lesson_time=self.lesson_time,
            start_lesson_time=datetime.now(),
        )
        record.save()
        return render(
            request,
            template_name="python/python_theory.html",
            context={"lesson_time": self.lesson_time, "timer": self.test_time},
        )


# TODO
class PythonTheoreticalTask(TemplateView):
    # model = PythonTheoreticalTest
    template_name = "python/python_theoretical_test.html"

    def get(self, request, *args, **kwargs):
        print(f"Timers in PythonLessonTestTime: {PythonLessonTime.test_time}, {PythonLessonTime.lesson_time}")
        print(f"Timers in PythonLessonTime: {PythonLesson.test_time}, {PythonLesson.lesson_time}")
        return render(
            request,
            template_name="python/python_theoretical_test.html",
            context={"lesson_time": PythonLessonTime.lesson_time, "timer": PythonLessonTime.test_time},
        )


# class TheoryCards TODO
# @cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_theory_cards(request):
    global guests_card_1, guests_card_2, guests_card_3
    guests_card_1 = random.randint(1, 10)
    theme_1 = PythonBasicsTheory.objects.all().filter(id=guests_card_1)
    guests_card_2 = random.randint(1, 4)
    theme_2 = PythonVariablesTheory.objects.all().filter(id=guests_card_2)
    guests_card_3 = random.randint(1, 4)
    theme_3 = PythonDataTypesTheory.objects.all().filter(id=guests_card_3)
    theme_4 = random.choice(
        [
            PythonBasicsTheory.objects.all().filter(id=random.randint(1, 10)),
            PythonVariablesTheory.objects.all().filter(id=random.randint(1, 4)),
            PythonDataTypesTheory.objects.all().filter(id=random.randint(1, 4)),
        ]
    )
    text = [theme_1[0], theme_2[0], theme_3[0], theme_4[0]]
    if theme_4[0] == theme_1[0] or theme_4[0] == theme_2[0] or theme_4[0] == theme_3[0]:
        theme_4 = random.choice(
            [
                PythonBasicsTheory.objects.all().filter(id=random.randint(1, 10)),
                PythonVariablesTheory.objects.all().filter(id=random.randint(1, 4)),
                PythonDataTypesTheory.objects.all().filter(id=random.randint(1, 4)),
            ]
        )
        text[3] = theme_4[0]
    if request.method == "POST":
        record = GuestsVisitStatistic(start_test_time=datetime.now())
        record.save()
        return redirect("python_theoretical_test")
    return render(request=request, template_name="python_theory.html", context={"text": text})


theoretical_test_counter = 0
practical_test_counter = 0
right_answers = []
tests_results = []


# class TheoreticalTest TODO
# @cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_theoretical_test(request):
    global question_theme, theoretical_test_counter, right_answers, tests_results
    question_theme = random.choice(
        [
            PythonBasicsTheoreticalTask.objects.all().filter(card_id=guests_card_1),
            PythonVariablesTheoreticalTask.objects.all().filter(card_id=guests_card_2),
            PythonDataTypesTheoreticalTask.objects.all().filter(card_id=guests_card_3),
        ]
    )
    right_answer = question_theme.values_list("level_1_slot_1_right_answer", flat=True)
    right_answers.append(right_answer[0])
    wrong_answer = question_theme.values_list("level_1_slot_2_wrong_answer", flat=True)
    left_slot = random.choice([right_answer, wrong_answer])
    right_slot = wrong_answer if left_slot == right_answer else right_answer
    total_tests = 2
    if request.method == "POST":
        right_answers.append(right_answer[0])
        tests_results.extend([1 if request.POST.get("slot") in right_answers else 0])
        theoretical_test_counter += 1
        if theoretical_test_counter == total_tests:
            right_answers.extend([right_answer[0]])
            theoretical_test_counter -= total_tests
            record = GuestsVisitStatistic(
                end_theoretical_start_practical_test_time=datetime.now(), theoretical_test_result=tests_results
            )
            record.save()
            return redirect("python_practical_test")
        return redirect("python_theoretical_test")
    return render(
        request,
        template_name="python_theoretical_test.html",
        context={
            "test_counter": theoretical_test_counter + 1,
            "total_tests": total_tests,
            # 'timer': test_time,
            "question": question_theme.values_list("question", flat=True)[0],
            "left_slot": left_slot,
            "right_slot": right_slot,
        },
    )
    # return render(request, template_name='python/python_theoretical_test.html')


# class PracticalTest TODO
# @cache_control(no_cache=True, must_revalidate=True, no_store=True)
def python_practical_test(request):
    global practical_test_counter, right_answers
    folder = question_theme.values_list("theme", flat=True)[0]
    theme = folder
    card = question_theme.values_list("card_id", flat=True)[0]
    test_number = random.choice([1, 2])
    test_file = importlib.import_module(f"joo_tips_app.practical_tests.python.{folder}.{theme}_{card}_{test_number}")
    total_tests = 6
    answers = [test_file.var_r, test_file.var_w]
    right_answers.append(test_file.var_r)
    if request.method == "POST":
        right_answers.append(test_file.var_r)
        tests_results.extend([1 if request.POST.get("slot") in right_answers else 0])
        practical_test_counter += 1
        if practical_test_counter == total_tests:
            practical_test_counter -= total_tests
            record = GuestsVisitStatistic(practical_test_result=tests_results[2:], end_test_time=datetime.now())
            record.save()
            return redirect("progress_statistic_guests")
        return redirect("python_practical_test")
    return render(
        request,
        template_name="python_practical_test.html",
        context={
            "test_counter": practical_test_counter + 1,
            "total_tests": total_tests,
            # 'timer': test_time,
            "question": test_file.question,
            "code": test_file.var_u_screen,
            "answers": answers,
        },
    )


# class ProgressStatistic TODO
def progress_statistic_guests(request):
    test_result = sum(tests_results)
    day_result = 0
    week_result = 0
    month_result = 0
    year_result = 0
    tests_results.clear()
    return render(
        request,
        template_name="progress_statistic.html",
        context={
            "test_result": test_result,
            "day_result": day_result,
            "week_result": week_result,
            "month_result": month_result,
            "year_result": year_result,
        },
    )


class JavaScriptLesson(TemplateView):
    model = GuestsVisitStatistic
    template_name = "web_site_in_process.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="English", programming_language="JavaScript")
        record.save()
        return render(request, template_name="web_site_in_process.html")


class JavaLesson(TemplateView):
    model = GuestsVisitStatistic
    template_name = "web_site_in_process.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="English", programming_language="Java")
        record.save()
        return render(request, template_name="web_site_in_process.html")


class SwiftLesson(TemplateView):
    model = GuestsVisitStatistic
    template_name = "web_site_in_process.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="English", programming_language="Swift")
        record.save()
        return render(request, template_name="web_site_in_process.html")


class CsharpLesson(TemplateView):
    model = GuestsVisitStatistic
    template_name = "web_site_in_process.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="English", programming_language="C#")
        record.save()
        return render(request, template_name="web_site_in_process.html")


class CplusplusLesson(TemplateView):
    model = GuestsVisitStatistic
    template_name = "web_site_in_process.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="English", programming_language="C++")
        record.save()
        return render(request, template_name="web_site_in_process.html")


class GolangLesson(TemplateView):
    model = GuestsVisitStatistic
    template_name = "web_site_in_process.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="English", programming_language="Golang")
        record.save()
        return render(request, template_name="web_site_in_process.html")


class PhpLesson(TemplateView):
    model = GuestsVisitStatistic
    template_name = "web_site_in_process.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="English", programming_language="PHP")
        record.save()
        return render(request, template_name="web_site_in_process.html")


class RegisterView(TemplateView):
    model = GuestsVisitStatistic
    template_name = "register.html"

    def post(self, request, *args, **kwargs):
        username = request.POST.get("username")
        if User.objects.filter(username=username).exists():
            messages.error(request, f"{username} already exist!")
        else:
            user = User.objects.create_user(
                username=username,
                email=request.POST.get("email"),
                password=request.POST.get("password"),
            )
            record = self.model(register_date=datetime.now())
            record.save()
            login(request, user)
            return redirect("users_homepage")
        return render(request, template_name="register.html")


class LoginView(TemplateView):
    template_name = "login.html"

    def post(self, request, *args, **kwargs):
        user = authenticate(request, username=request.POST.get("username"), password=request.POST.get("password"))
        if user is not None:
            if user.groups.filter(name="Pupils").exists():
                login(request, user)
                return redirect("pupils_homepage")
            if user.groups.filter(name="Teachers").exists():
                login(request, user)
                return redirect("teachers_homepage")
            if user.groups.filter(name="Mentors").exists():
                login(request, user)
                return redirect("mentors_homepage")
            if user.groups.filter(name="Tech writers").exists():
                login(request, user)
                return redirect("tech_writers_page")
            login(request, user)
            return redirect("users_homepage")
        else:
            messages.error(request, "Username or password does not exist!")
        return render(request, template_name="login.html")


class LogoutView(TemplateView):
    def get(self, request, *args, **kwargs):
        logout(request)
        return redirect("homepage")


class UsersHomePage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model =
    template_name = "user/users_homepage.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="user/users_homepage.html")


class UsersStorePage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model =
    template_name = "user/users_homepage.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="user/users_store.html")


class PupilsHomePage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model =
    template_name = "pupil/pupils_homepage.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="pupil/pupils_homepage.html")


class PupilsEventPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "pupil/pupils_event_overview.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="pupil/pupils_event_overview.html")


class PupilsExamPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "pupil/pupils_exam_overview.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="pupil/pupils_exam_overview.html")


class PupilsRatingPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "pupil/pupils_rating.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="pupil/pupils_rating.html")


class PupilsMentorPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "pupil/pupils_mentor.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="pupil/pupils_mentor.html")

    def post(self, request, *args, **kwargs):
        pass


class PupilsPvpPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "pupil/pupils_pvp.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="pupil/pupils_pvp.html")

    def post(self, request, *args, **kwargs):
        pass


class PupilsTvtPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "pupil/pupils_tvt.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="pupil/pupils_tvt.html")

    def post(self, request, *args, **kwargs):
        pass


class TeachersHomePage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "teacher/teachers_homepage.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="teacher/teachers_homepage.html")


class TeachersEventPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "teacher/teachers_event_overview.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="teacher/teachers_event_overview.html")

    def post(self, request, *args, **kwargs):
        if request.POST.get("option") == "create_event":
            return render(request, template_name="teacher/teachers_create_event.html")
        return render(request, template_name="teacher/teachers_event_overview.html")


class TeachersExamPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "teacher/teachers_exam_overview.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="teacher/teachers_exam_overview.html")

    def post(self, request, *args, **kwargs):
        if request.POST.get("option") == "create_exam":
            return render(request, template_name="teacher/teachers_create_exam.html")
        return render(request, template_name="teacher/teachers_exam_overview.html")


class TeachersRatingPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "teacher/teachers_rating.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="teacher/teachers_rating.html")


class TeachersMentorPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "teacher/teachers_mentor.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="teacher/teachers_mentor.html")


class MentorsHomePage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "mentor/mentors_homepage.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="mentor/mentors_homepage.html")


class MentorsInvocationPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "mentor/mentors_invocation.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="mentor/mentors_invocation.html")


class MentorsSessionPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "mentor/mentors_session_overview.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="mentor/mentors_session_overview.html")

    def post(self, request, *args, **kwargs):
        if request.POST.get("option") == "create_session":
            return render(request, template_name="mentor/mentors_create_session.html")
        return render(request, template_name="mentor/mentors_session_overview.html")


class MentorsRatingPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "mentor/mentors_rating.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="mentor/mentors_rating.html")


class TechWritersPage(LoginRequiredMixin, TemplateView):
    login_url = "/login"
    # model
    template_name = "tech_writers_page.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="tech_writers_page.html")


class Error400Page(TemplateView):
    model = JooTipsSiteErrorsStatistic
    template_name = "errors_views/error_view.html"

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
        if x_forwarded_for:
            ip = x_forwarded_for.split(",")[0]
        else:
            ip = request.META.get("REMOTE_ADDR")
        http_data = ipinfo.getHandler("001b08d2dda8e6").getDetails(ip)
        record = self.model(
            guests_ip=ip,
            guests_location=[
                http_data.city if "city" in http_data.__dict__["details"].keys() else None,
                http_data.country_name if "country_name" in http_data.__dict__["details"].keys() else None,
            ],
            guests_hostname=http_data.hostname if "hostname" in http_data.__dict__["details"].keys() else None,
            error_400=True,
        )
        record.save()
        return render(request, template_name="errors_views/400.html", status=400)


class Error403Page(TemplateView):
    model = JooTipsSiteErrorsStatistic
    template_name = "errors_views/error_view.html"

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
        if x_forwarded_for:
            ip = x_forwarded_for.split(",")[0]
        else:
            ip = request.META.get("REMOTE_ADDR")
        http_data = ipinfo.getHandler("001b08d2dda8e6").getDetails(ip)
        record = self.model(
            guests_ip=ip,
            guests_location=[
                http_data.city if "city" in http_data.__dict__["details"].keys() else None,
                http_data.country_name if "country_name" in http_data.__dict__["details"].keys() else None,
            ],
            guests_hostname=http_data.hostname if "hostname" in http_data.__dict__["details"].keys() else None,
            error_403=True,
        )
        record.save()
        return render(request, template_name="errors_views/403.html", status=403)


class Error404Page(TemplateView):
    model = JooTipsSiteErrorsStatistic
    template_name = "errors_views/error_view.html"

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
        if x_forwarded_for:
            ip = x_forwarded_for.split(",")[0]
        else:
            ip = request.META.get("REMOTE_ADDR")
        http_data = ipinfo.getHandler("001b08d2dda8e6").getDetails(ip)
        record = self.model(
            guests_ip=ip,
            guests_location=[
                http_data.city if "city" in http_data.__dict__["details"].keys() else None,
                http_data.country_name if "country_name" in http_data.__dict__["details"].keys() else None,
            ],
            guests_hostname=http_data.hostname if "hostname" in http_data.__dict__["details"].keys() else None,
            error_404=True,
        )
        record.save()
        return render(request, template_name="errors_views/404.html", status=404)


class Error500Page(TemplateView):
    model = JooTipsSiteErrorsStatistic
    template_name = "errors_views/error_view.html"

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
        if x_forwarded_for:
            ip = x_forwarded_for.split(",")[0]
        else:
            ip = request.META.get("REMOTE_ADDR")
        http_data = ipinfo.getHandler("001b08d2dda8e6").getDetails(ip)
        record = self.model(
            guests_ip=ip,
            guests_location=[
                http_data.city if "city" in http_data.__dict__["details"].keys() else None,
                http_data.country_name if "country_name" in http_data.__dict__["details"].keys() else None,
            ],
            guests_hostname=http_data.hostname if "hostname" in http_data.__dict__["details"].keys() else None,
            error_500=True,
        )
        record.save()
        return render(request, template_name="errors_views/500.html", status=500)
