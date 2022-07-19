from django.shortcuts import render, redirect
from django.views.generic import TemplateView

from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages

from .models import *

from datetime import datetime
import ipinfo


class HomePageUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/homepage_ua.html'

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
        return render(request, template_name='ua/homepage_ua.html')

    def post(self, request, *args, **kwargs):
        record = self.model(schools_email=request.POST.get('school-email'),
                            teams_email=request.POST.get('team-email'))
        record.save()
        return render(request, template_name='ua/homepage_ua.html')


class ProgrammingLanguageChoiceUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(lets_try_it_date=datetime.now(),
                            language='Ukrainian')
        record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class PythonLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='Python')
        record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class JavaScriptLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='JavaScript')
        record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class JavaLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='Java')
        record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class SwiftLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='Swift')
        record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class CsharpLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='C#')
        record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class CplusplusLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='C++')
        record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class GolangLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='Golang')
        record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class PhpLessonTestUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'

    def get(self, request, *args, **kwargs):
        record = self.model(language='Ukrainian',
                            programming_language='PHP')
        record.save()
        return render(request, template_name='ua/web_site_in_process_ua.html')


class RegisterViewUa(TemplateView):
    model = GuestsVisitStatistic
    template_name = 'ua/web_site_in_process_ua.html'  # register_ua.html

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
        return render(request, template_name='ua/web_site_in_process_ua.html')  # register_ua.html


class LoginViewUa(TemplateView):
    template_name = 'ua/web_site_in_process_ua.html'  # login_ua.html

    def post(self, request, *args, **kwargs):
        user = authenticate(request, username=request.POST.get('username'),
                                     password=request.POST.get('password'))
        if user is not None:
            login(request, user)
            return redirect('users_homepage')
        else:
            messages.error(request, 'Username or password does not exist!')
        return render(request, template_name='ua/web_site_in_process_ua.html')  # login_ua.html


class LogoutViewUa(TemplateView):

    def get(self, request, *args, **kwargs):
        logout(request)
        return redirect('homepage_ua')
