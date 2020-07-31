from django.contrib.auth.models import User
from django.http import JsonResponse

def get_users(request):
    all_users = User.objects.all()

    result = [
        {
            "name": user.username,
        }
        for user in all_users
    ]

    return JsonResponse(result, safe=False)