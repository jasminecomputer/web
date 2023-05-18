from django.shortcuts import render
from .models import MyModel
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Item
from .serializers import ItemSerializer

class ItemList(APIView):
    def get(self, request):
        items = Item.objects.all()
        serialized_items = ItemSerializer(items, many=True)
        return Response(serialized_items.data)


def index(request):
    data = MyModel.objects.all()
    return render(request, 'index.html', {'data': data})
