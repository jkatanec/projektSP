from django.contrib.auth.models import User
from django import forms
from .models import Calendar, Event

class UserForm(forms.ModelForm):
    first_name = forms.CharField(max_length=200, label='First_name', localize=True)
    last_name = forms.CharField(max_length=200, label='Priimek')
    password = forms.CharField(widget=forms.PasswordInput, label='Geslo')
    username = forms.CharField(max_length=200, label='Uporabniško ime')
    email = forms.EmailField(label='E-mail')

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password']

class CalendarForm(forms.ModelForm):
    name = forms.CharField(label='Ime')
    description = forms.CharField(label='Opis')

    class Meta:
        model = Calendar
        fields = ['name', 'description']

class EventForm(forms.ModelForm):
    name = forms.CharField(label='Ime')
    location = forms.CharField(label='Lokacija')
    day = forms.IntegerField(label='Dan')
    month = forms.IntegerField(label='Mesec')
    year = forms.IntegerField(label='Leto')
    start = forms.CharField(label='Začetek')
    duration = forms.CharField(label='Trajanje')
    description = forms.CharField(label='Opis')
    public = forms.BooleanField(label='Javen dogodek', required=False)
    is_important = forms.BooleanField(label='Pomemben dogodek', required=False)

    class Meta:
        model = Event
        fields = ['name', 'location', 'day', 'month', 'year', 'start', 'duration', 'description', 'public', 'is_important', ]
