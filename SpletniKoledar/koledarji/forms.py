from django.contrib.auth.models import User
from django import forms

class UserForm(forms.ModelForm):
    first_name = forms.CharField(max_length=200, label='Ime')
    last_name = forms.CharField(max_length=200, label='Priimek')
    password = forms.CharField(widget=forms.PasswordInput, label='Geslo')
    username = forms.CharField(max_length=200, label='Uporabniško ime')
    email = forms.EmailField(label='E-mail')

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password']
