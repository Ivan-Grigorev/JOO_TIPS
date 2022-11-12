from datetime import datetime

import ipinfo
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from django.shortcuts import redirect, render
from django.views.generic import TemplateView

from .models import *


class HomePageUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = "ua/homepage_ua.html"

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
        return render(request, template_name="ua/homepage_ua.html")

    def post(self, request, *args, **kwargs):
        record = self.model(
            schools_email=request.POST.get("school-email"),
            teams_email=request.POST.get("team-email"),
        )
        record.save()
        return render(request, template_name="ua/homepage_ua.html")


class ProgrammingLanguageChoiceUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = "ua/programming_language_choice_ua.html"

    def get(self, request, *args, **kwargs):
        record = self.model(lets_try_it_date=datetime.now(), language="Ukrainian")
        record.save()
        return render(request, template_name="ua/programming_language_choice_ua.html")


class PythonLessonUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = "ua/web_site_in_process_ua.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="Ukrainian", programming_language="Python")
        record.save()
        return render(request, template_name="ua/web_site_in_process_ua.html")


class JavaScriptLessonUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = "ua/web_site_in_process_ua.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="Ukrainian", programming_language="JavaScript")
        record.save()
        return render(request, template_name="ua/web_site_in_process_ua.html")


class JavaLessonUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = "ua/web_site_in_process_ua.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="Ukrainian", programming_language="Java")
        record.save()
        return render(request, template_name="ua/web_site_in_process_ua.html")


class SwiftLessonUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = "ua/web_site_in_process_ua.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="Ukrainian", programming_language="Swift")
        record.save()
        return render(request, template_name="ua/web_site_in_process_ua.html")


class CsharpLessonUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = "ua/web_site_in_process_ua.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="Ukrainian", programming_language="C#")
        record.save()
        return render(request, template_name="ua/web_site_in_process_ua.html")


class CplusplusLessonUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = "ua/web_site_in_process_ua.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="Ukrainian", programming_language="C++")
        record.save()
        return render(request, template_name="ua/web_site_in_process_ua.html")


class GolangLessonUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = "ua/web_site_in_process_ua.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="Ukrainian", programming_language="Golang")
        record.save()
        return render(request, template_name="ua/web_site_in_process_ua.html")


class PhpLessonUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = "ua/web_site_in_process_ua.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="Ukrainian", programming_language="PHP")
        record.save()
        return render(request, template_name="ua/web_site_in_process_ua.html")


class RegisterViewUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = "ua/register_ua.html"

    def post(self, request, *args, **kwargs):
        username = request.POST.get("username")
        if User.objects.filter(username=username).exists():
            messages.error(request, f"{username} вже існує!")
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
        return render(request, template_name="ua/register_ua.html")


class LoginViewUa(TemplateView):
    template_name = "ua/login_ua.html"

    def post(self, request, *args, **kwargs):
        user = authenticate(request, username=request.POST.get("username"), password=request.POST.get("password"))
        if user is not None:
            if user.groups.filter(name="Pupils").exists():
                login(request, user)
                return redirect("pupils_homepage_ua")
            if user.groups.filter(name="Teachers").exists():
                login(request, user)
                return redirect("teachers_homepage_ua")
            if user.groups.filter(name="Mentors").exists():
                login(request, user)
                return redirect("mentors_homepage_ua")
            if user.groups.filter(name="Tech writers").exists():
                login(request, user)
                return redirect("tech_writers_page_ua")
            login(request, user)
            return redirect("users_homepage_ua")
        else:
            messages.error(request, "Логін або пароль не існує!")
        return render(request, template_name="ua/login_ua.html")


class LogoutViewUa(TemplateView):
    def get(self, request, *args, **kwargs):
        logout(request)
        return redirect("homepage_ua")


class UsersHomePageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model =
    template_name = "ua/user_ua/users_homepage_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/user_ua/users_homepage_ua.html")


class UsersStorePageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model =
    template_name = "ua/user_ua/users_store_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/user_ua/users_store_ua.html")


class PupilsHomePageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model =
    template_name = "ua/pupil_ua/pupils_homepage_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/pupil_ua/pupils_homepage_ua.html")


class PupilsEventPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/pupil_ua/pupils_event_overview_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/pupil_ua/pupils_event_overview_ua.html")


class PupilsExamPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/pupil_ua/pupils_exam_overview_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/pupil_ua/pupils_exam_overview_ua.html")


class PupilsRatingPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/pupil_ua/pupils_rating_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/pupil_ua/pupils_rating_ua.html")


class PupilsMentorPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/pupil_ua/pupils_mentor_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/pupil_ua/pupils_mentor_ua.html")

    def post(self, request, *args, **kwargs):
        pass


class PupilsPvpPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/pupil_ua/pupils_pvp_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/pupil_ua/pupils_pvp_ua.html")

    def post(self, request, *args, **kwargs):
        pass


class PupilsTvtPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/pupil_ua/pupils_tvt_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/pupil_ua/pupils_tvt_ua.html")

    def post(self, request, *args, **kwargs):
        pass


class TeachersHomePageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/teacher_ua/teachers_homepage_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/teacher_ua/teachers_homepage_ua.html")


class TeachersEventPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/teacher_ua/teachers_event_overview_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/teacher_ua/teachers_event_overview_ua.html")

    def post(self, request, *args, **kwargs):
        if request.POST.get("option") == "create_event":
            return render(request, template_name="ua/teacher_ua/teachers_create_event_ua.html")
        return render(request, template_name="ua/teacher_ua/teachers_event_overview_ua.html")


class TeachersExamPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/teacher_ua/teachers_exam_overview_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/teacher_ua/teachers_exam_overview_ua.html")

    def post(self, request, *args, **kwargs):
        if request.POST.get("option") == "create_exam":
            return render(request, template_name="ua/teacher_ua/teachers_create_exam_ua.html")
        return render(request, template_name="ua/teacher_ua/teachers_exam_overview_ua.html")


class TeachersRatingPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/teacher_ua/teachers_rating_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/teacher_ua/teachers_rating_ua.html")


class TeachersMentorPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/teacher_ua/teachers_mentor_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/teacher_ua/teachers_mentor_ua.html")


class MentorsHomePageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/mentor_ua/mentors_homepage_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/mentor_ua/mentors_homepage_ua.html")


class MentorsInvocationPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/mentor_ua/mentors_invocation_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/mentor_ua/mentors_invocation_ua.html")


class MentorsSessionPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/mentor_ua/mentors_session_overview_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/mentor_ua/mentors_session_overview_ua.html")

    def post(self, request, *args, **kwargs):
        if request.POST.get("option") == "create_session":
            return render(request, template_name="ua/mentor_ua/mentors_create_session_ua.html")
        return render(request, template_name="ua/mentor_ua/mentors_session_overview_ua.html")


class MentorsRatingPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/mentor_ua/mentors_rating_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/mentor_ua/mentors_rating_ua.html")


class TechWritersPageUa(LoginRequiredMixin, TemplateView):
    login_url = "/ua/login"
    # model
    template_name = "ua/tech_writers_page_ua.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name="ua/tech_writers_page_ua.html")
