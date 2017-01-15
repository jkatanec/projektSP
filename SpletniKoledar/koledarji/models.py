from __future__ import unicode_literals
from django.db import models
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Calendar(models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=1000)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)

    def get_absolute_url(self):
        return reverse('koledarji:detail', kwargs={'pk':self.pk})

    def _unicode_(self):
        return self.name
    def _str_(self):
        return self.name

@python_2_unicode_compatible
class Event(models.Model):
    name = models.CharField(max_length=250)
    location = models.CharField(max_length=250)
    day = models.IntegerField(default=1)
    month = models.IntegerField(default=1)
    year = models.IntegerField(default=2017)
    start = models.CharField(max_length=250)
    duration = models.CharField(max_length=250)
    description = models.CharField(max_length=1000)
    calendar = models.ForeignKey(Calendar, on_delete=models.CASCADE)
    public = models.BooleanField(default=False)
    is_important = models.BooleanField(default=False)

    def _unicode_(self):
        return self.name
    def _str_(self):
        return self.name