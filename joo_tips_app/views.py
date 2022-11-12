from datetime import datetime

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


class PythonLesson(TemplateView):
    model = GuestsVisitStatistic
    template_name = "web_site_in_process.html"

    def get(self, request, *args, **kwargs):
        record = self.model(language="English", programming_language="Python")
        record.save()
        return render(request, template_name="web_site_in_process.html")


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
