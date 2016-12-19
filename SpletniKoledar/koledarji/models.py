from django.db import models
from django.core.urlresolvers import reverse

class Calendar(models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=1000)

    def get_absolute_url(self):
        return reverse('koledarji:detail', kwargs={'pk':self.pk})

    def _str_(self):
        return self.name + ' - ' + self.description

class Event(models.Model):
    name = models.CharField(max_length=250)
    location = models.CharField(max_length=250)
    date = models.CharField(max_length=250)
    start = models.CharField(max_length=250)
    duration = models.CharField(max_length=250)
    description = models.CharField(max_length=1000)
    calendar = models.ForeignKey(Calendar, on_delete=models.CASCADE)
    is_important = models.BooleanField(default=False)

    def _str_(self):
        return self.name + ' - ' + self.description