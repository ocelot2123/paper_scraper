from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from .models import Paper
from .serializers import PaperSerializer


class PaperViewSet(ModelViewSet):
    queryset = Paper.objects.all()
    serializer_class = PaperSerializer
    permission_classes = [AllowAny]