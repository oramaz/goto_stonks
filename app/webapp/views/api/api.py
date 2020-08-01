import datetime
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.response import Response


from django.contrib.auth.models import User
from webapp.models import ToSale
from webapp.models import ToBuy
from webapp.models import Project

def get_users(request):
    all_users = User.objects.all()

    result = [
        {
            "name": user.username,
        }
        for user in all_users
    ]

    return JsonResponse(result, safe=False)


class SetToSale(APIView):
    permission_classes = ()

    def post(self, request,):
        all_projects = Project.objects.all()
        all_users = User.objects.all()

        project = request.data.get('project')
        price = float(request.data.get('price'))
        count = int(request.data.get('count'))
        time = datetime.datetime.now()
        author = request.data.get('author')
        
        try:
            sale = ToSale(price=price,
                        count=count, 
                        project=all_projects.filter(name=project)[0], 
                        time=time, 
                        author=all_users.filter(username=author)[0])
            sale.save()
        except Exception:
            return Response({
                "status": "error"
            }, status=HTTP_400_BAD_REQUEST)

        return Response({
            "status": "Данные успешно записаны" 
        }, status=HTTP_200_OK)


class SetToBuy(APIView):
    permission_classes = ()

    def post(self, request,):
        all_projects = Project.objects.all()
        all_users = User.objects.all()

        project = request.data.get('project')
        price = float(request.data.get('price'))
        count = int(request.data.get('count'))
        time = datetime.datetime.now()
        author = request.data.get('author')
        
        try:
            purchase = ToBuy(price=price,
                        count=count, 
                        project=all_projects.filter(name=project)[0], 
                        time=time, 
                        author=all_users.filter(username=author)[0])
            purchase.save()
        except Exception:
            return Response({
                "status": "error"
            }, status=HTTP_400_BAD_REQUEST)

        return Response({
            "status": "Данные успешно записаны" 
        }, status=HTTP_200_OK)


class GetToBuy(APIView):
    permission_classes = ()

    def get(self, request):
        all_projects = Project.objects.all()
        all_to_buy = ToBuy.objects.all()
        query = all_to_buy.order_by('price')

        try:
            project = request.data.get('project')
            query = query.filter(project=all_projects.filter(name=project)[0])[:10]

            result = [
                {
                    "price": elem.price,
                    "count": elem.count,
                }
                for elem in query
            ]

            return Response(result, status=HTTP_200_OK)
        except Exception:
            return Response({"status": "error"}, status=HTTP_400_BAD_REQUEST)


class GetToSale(APIView):
    permission_classes = ()

    def get(self, request):
        all_projects = Project.objects.all()
        all_to_sale = ToSale.objects.all()
        query = all_to_sale.order_by('price')

        try:
            project = request.data.get('project')
            query = query.filter(project=all_projects.filter(name=project)[0])[:10]

            result = [
                {
                    "price": elem.price,
                    "count": elem.count,
                }
                for elem in query
            ]

            return Response(result, status=HTTP_200_OK)
        except Exception:
            return Response({"status": "error"}, status=HTTP_400_BAD_REQUEST)


class GeneralInfo(APIView):
    permission_classes = ()


