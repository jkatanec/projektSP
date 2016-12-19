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
    url(r'^(?P<pk>[0-9]+)$', views.DetailView.as_view(), name='detail'),

    #koledarji/koledar/dodaj/
    url(r'^koledar/dodaj/$', views.CalendarCreate.as_view(),name='calendar_add'),

#koledarji/koledar/{id}/
    url(r'^koledar/(?P<pk>[0-9]+)/$', views.CalendarUpdate.as_view(),name='calendar_update'),


#koledarji/koledar/{id}/
    url(r'^koledar/(?P<pk>[0-9]+)/$', views.CalendarDelete.as_view(),name='calendar_delete')
]