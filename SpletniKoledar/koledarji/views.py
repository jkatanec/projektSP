from django.http import HttpResponse
def index(request):
    return HttpResponse("<h1>Koledarji</h1>")