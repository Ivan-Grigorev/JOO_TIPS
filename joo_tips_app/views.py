from django.shortcuts import render, redirect
from django.views.generic import TemplateView

from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages

from .models import *

from datetime import datetime
import ipinfo


class HomePage(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'homepage.html'

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        http_data = ipinfo.getHandler('001b08d2dda8e6').getDetails(ip)
        record = self.model(guests_ip=ip,
                            guests_location=[http_data.city
                                             if 'city' in http_data.__dict__['details'].keys() else None,
                                             http_data.country_name
                                             if 'country_name' in http_data.__dict__['details'].keys() else None],
                            guests_hostname=http_data.hostname
                                             if 'hostname' in http_data.__dict__['details'].keys() else None,
                            visit_date=datetime.now())
        record.save()
        return render(request, template_name='homepage.html')

    def post(self, request, *args, **kwargs):
        record = self.model(schools_email=request.POST.get('school-email'),
                            teams_email=request.POST.get('team-email'))
        record.save()
        return render(request, template_name='homepage.html')


class ProgrammingLanguageChoice(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'web_site_in_process.html'

    def get(self, request, *args, **kwargs):
        record = self.model(lets_try_it_date=datetime.now(),
                            language='English')
        record.save()
        return render(request, template_name='web_site_in_process.html')


class PythonLessonTest(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'web_site_in_process.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='English',
                            programming_language='Python')
        record.save()
        return render(request, template_name='web_site_in_process.html')


class JavaScriptLessonTest(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'web_site_in_process.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='English',
                            programming_language='JavaScript')
        record.save()
        return render(request, template_name='web_site_in_process.html')


class JavaLessonTest(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'web_site_in_process.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='English',
                            programming_language='Java')
        record.save()
        return render(request, template_name='web_site_in_process.html')


class SwiftLessonTest(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'web_site_in_process.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='English',
                            programming_language='Swift')
        record.save()
        return render(request, template_name='web_site_in_process.html')


class CsharpLessonTest(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'web_site_in_process.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='English',
                            programming_language='C#')
        record.save()
        return render(request, template_name='web_site_in_process.html')


class CplusplusLessonTest(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'web_site_in_process.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='English',
                            programming_language='C++')
        record.save()
        return render(request, template_name='web_site_in_process.html')


class GolangLessonTest(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'web_site_in_process.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='English',
                            programming_language='Golang')
        record.save()
        return render(request, template_name='web_site_in_process.html')


class PhpLessonTest(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'web_site_in_process.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='English',
                            programming_language='PHP')
        record.save()
        return render(request, template_name='web_site_in_process.html')


class RegisterView(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'web_site_in_process.html'  # register.html

    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        if User.objects.filter(username=username).exists():
            messages.error(request, f"{username} already exist!")
        else:
            user = User.objects.create_user(username=username,
                                            email=request.POST.get('email'),
                                            password=request.POST.get('password'))
            record = self.model(register_date=datetime.now())
            record.save()
            login(request, user)
            return redirect('users_homepage')
        return render(request, template_name='web_site_in_process.html')  # register.html


class LoginView(TemplateView):
    template_name = 'web_site_in_process.html'  # login.html

    def post(self, request, *args, **kwargs):
        user = authenticate(request, username=request.POST.get('username'),
                                     password=request.POST.get('password'))
        if user is not None:
            login(request, user)
            return redirect('users_homepage')
        else:
            messages.error(request, 'Username or password does not exist!')
        return render(request, template_name='web_site_in_process.html')  # login.html


class LogoutView(TemplateView):

    def get(self, request, *args, **kwargs):
        logout(request)
        return redirect('homepage')


class Error400Page(TemplateView):
    model = JooTipsSiteErrorsStatistic
    template_name = 'errors_views/error_view.html'

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        http_data = ipinfo.getHandler('001b08d2dda8e6').getDetails(ip)
        record = self.model(guests_ip=ip,
                            guests_location=[http_data.city
                                             if 'city' in http_data.__dict__['details'].keys() else None,
                                             http_data.country_name
                                             if 'country_name' in http_data.__dict__['details'].keys() else None],
                            guests_hostname=http_data.hostname
                            if 'hostname' in http_data.__dict__['details'].keys() else None,
                            error_400=True)
        record.save()
        return render(request, template_name='errors_views/400.html', status=400)


class Error403Page(TemplateView):
    model = JooTipsSiteErrorsStatistic
    template_name = 'errors_views/error_view.html'

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        http_data = ipinfo.getHandler('001b08d2dda8e6').getDetails(ip)
        record = self.model(guests_ip=ip,
                            guests_location=[http_data.city
                                             if 'city' in http_data.__dict__['details'].keys() else None,
                                             http_data.country_name
                                             if 'country_name' in http_data.__dict__['details'].keys() else None],
                            guests_hostname=http_data.hostname
                            if 'hostname' in http_data.__dict__['details'].keys() else None,
                            error_403=True)
        record.save()
        return render(request, template_name='errors_views/403.html', status=403)


class Error404Page(TemplateView):
    model = JooTipsSiteErrorsStatistic
    template_name = 'errors_views/error_view.html'

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        http_data = ipinfo.getHandler('001b08d2dda8e6').getDetails(ip)
        record = self.model(guests_ip=ip,
                            guests_location=[http_data.city
                                             if 'city' in http_data.__dict__['details'].keys() else None,
                                             http_data.country_name
                                             if 'country_name' in http_data.__dict__['details'].keys() else None],
                            guests_hostname=http_data.hostname
                            if 'hostname' in http_data.__dict__['details'].keys() else None,
                            error_404=True)
        record.save()
        return render(request, template_name='errors_views/404.html', status=404)


class Error500Page(TemplateView):
    model = JooTipsSiteErrorsStatistic
    template_name = 'errors_views/error_view.html'

    def get(self, request, *args, **kwargs):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        http_data = ipinfo.getHandler('001b08d2dda8e6').getDetails(ip)
        record = self.model(guests_ip=ip,
                            guests_location=[http_data.city
                                             if 'city' in http_data.__dict__['details'].keys() else None,
                                             http_data.country_name
                                             if 'country_name' in http_data.__dict__['details'].keys() else None],
                            guests_hostname=http_data.hostname
                            if 'hostname' in http_data.__dict__['details'].keys() else None,
                            error_500=True)
        record.save()
        return render(request, template_name='errors_views/500.html', status=500)
