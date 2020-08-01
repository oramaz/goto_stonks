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
from webapp.models import ToSale, Deal
from webapp.models import ToBuy
from webapp.models import Project, Paragraph

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
        print(project, price, count, time, author)

    

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

        proccess_glass()

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
            project = request.query_params['project']
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
        proccess_glass()
        try:
            project = request.query_params['project']
            query = query.filter(project=all_projects.filter(name=project)[0])[:10]

            result = [
                {
                    "price": elem.price,
                    "count": elem.count,
                }
                for elem in query
            ]

            return Response(result, status=HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"status": "error"}, status=HTTP_400_BAD_REQUEST)


class GeneralInfo(APIView):
    permission_classes = ()


class Deals(APIView):
    permission_classes = ()

    def get(self, request):
        all_to_sale = ToSale.objects.all()
        all_to_buy = ToBuy.objects.all()
        print(request.query_params)

        project = request.query_params['project']
        d = Deal.objects.all().filter(project__name=project)
        result = [
                {
                    "price": elem.price,
                    "time": elem.time,
                }
                for elem in d   
            ]
        return Response(result, status=HTTP_200_OK)


class News(APIView):
    permission_classes = ()

    def post(self, request):
        try:
            data = request.data
            print(data)
            p = Paragraph(name=data["name"], time=data["time"], text=data["text"])
            p.save()
            return Response(status=HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response(status=HTTP_400_BAD_REQUEST)

def proccess_glass():
    sellers = ToSale.objects.all().order_by('price', 'time')
    buyers = ToBuy.objects.all().order_by('time', 'price')
    for buyer in buyers:
        print(buyer.id)
        sellers.filter(price__lte=buyer.price)
        count = buyer.count
        to_del = []
        if len(sellers):
            for seller in sellers:
                print(count)
                if (count > 0):
                    if seller.count <= count:
                        count -= seller.count
                        deal = Deal(time=datetime.datetime.utcnow(), project=seller.project, price=buyer.price, seller=seller.author, buyer=buyer.author, count=seller.count)
                        deal.save()
                        to_del += [seller.id]
                    else:
                        # здесь все акции которые были у скупщика проданы
                        # продавцу нужно отсыпать бабла
                        deal = Deal(time=datetime.datetime.utcnow(), project=seller.project, price=buyer.price, seller=seller.author, buyer=buyer.author, count=count)
                        deal.save()
                        seller.count -= count
                        count -= count # 0 
                        seller.save() # > 0
                        
                else:
                    break
        print(count)
        if count <= 0:
            instance = ToBuy.objects.get(id=buyer.id)
            instance.delete()
        else:
            buyer.count = count
        for id_ in to_del:
            instance = ToSale.objects.get(id=id_)
            instance.delete()
