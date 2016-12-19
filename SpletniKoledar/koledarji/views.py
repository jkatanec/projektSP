from .models import Calendar, Event
from django.views import generic
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.core.urlresolvers import reverse_lazy
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views.generic import View
from .forms import UserForm

class IndexView(generic.ListView):
    template_name = 'koledarji/index.html'
    context_object_name = 'calendars_list'
    def get_queryset(self):
        return Calendar.objects.all()

class AboutView(generic.ListView):
    template_name = 'koledarji/about.html'
    context_object_name = 'calendars_list'
    def get_queryset(self):
        return Calendar.objects.all()

class CalendarsView(generic.ListView):
    template_name = 'koledarji/calendars.html'
    context_object_name = 'calendars_list'
    def get_queryset(self):
        return Calendar.objects.all()


class DetailView(generic.DetailView):
    model = Calendar
    template_name = 'koledarji/detail.html'

class CalendarCreate(CreateView):
    model = Calendar
    fields = ['name', 'description']

class CalendarUpdate(UpdateView):
    model = Calendar
    fields = ['name', 'description']

class CalendarDelete(DeleteView):
    model = Calendar
    success_url = reverse_lazy('koledarji:index')

class UserFormView(View):
    form_class = UserForm
    template_name = 'koledarji/registration_form.html'

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

            user = authenticate(username=username, password=password)

            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('koledarji:index')
        return render(request, self.template_name, {'form': form})