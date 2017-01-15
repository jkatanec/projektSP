from .models import Calendar, Event
from django.views import generic
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.core.urlresolvers import reverse_lazy
from django.shortcuts import render, redirect, render_to_response
from django.contrib.auth import authenticate, login
from django.views.generic import View
from .forms import UserForm
from django.http import HttpResponseRedirect
from django.contrib import auth
from django.core.context_processors import csrf
from django.template import RequestContext
from django.contrib.auth.models import Permission

class IndexView(generic.TemplateView):
    template_name = 'koledarji/index.html'

class AboutView(generic.TemplateView):
    template_name = 'koledarji/about.html'

class CalendarsView(generic.ListView):
    template_name = 'koledarji/calendars.html'
    context_object_name = 'calendars_list'
    def get_queryset(self):
        return Calendar.objects.all()

class DetailView(generic.DetailView):
    model = Calendar
    template_name = 'koledarji/detail.html'


class UserFormView(View):
    form_class = UserForm
    template_name = 'koledarji/registration_form.html'

    #<algorithm>$<iterations>$<salt>$<hash>


    #display blank form
    def get(self, request):
        form = self.form_class(None)
        return render(request, self.template_name, {'form': form})

    #process form data
    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            user = form.save(commit=False)

            #cleaned (normalized) data
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user.set_password(password)
            user.save()
            permission = Permission.objects.get(name='Can delete user')
            user.user_permissions.remove(permission)

            user = authenticate(username=username, password=password)

            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('koledarji:index')
        return render(request, self.template_name, {'form': form})

#login
def auth_view(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = auth.authenticate(username=username, password=password)

    if user is not None:
        auth.login(request, user)
        return HttpResponseRedirect('/prijavljen/')
    else:
        return HttpResponseRedirect('/koledarji/invalid')
def loggedin(request):
    return render_to_response('prijavljen/index.html',
                              {'full_name':request.user.username})
def invalid_login(request):
    return render_to_response('koledarji/invalid_login.html', RequestContext(request, {}))
def logout(request):
    auth.logout(request)
    return render_to_response('koledarji/logout.html', RequestContext(request, {}))