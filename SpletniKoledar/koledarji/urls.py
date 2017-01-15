from django.conf.urls import url
from . import views

app_name = 'koledarji'

urlpatterns = [
    #/koledarji/
    url(r'^$', views.IndexView.as_view(), name='index'),

    url(r'^koledarji/$', views.CalendarsView.as_view(), name='calendars'),

    url(r'^registracija/$', views.UserFormView.as_view(), name='register'),

    url(r'^about/$', views.AboutView.as_view(), name='about'),

    #/koledarji/{id}/         POPRAVI
    url(r'^(?P<pk>[0-9]+)/$', views.DetailView.as_view(), name='detail'),


    #user auth urls
    url(r'^auth/$', 'koledarji.views.auth_view'),
    url(r'^logout/$', 'koledarji.views.logout'),
    url(r'^loggedin/$', 'koledarji.views.loggedin'),
    url(r'^invalid/$', 'koledarji.views.invalid_login'),
]