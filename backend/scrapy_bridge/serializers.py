from rest_framework import serializers
from . import models


class PaperSerializer(serializers.ModelSerializer):
  class Meta:
        fields = ('id', 'title', 'first_author', 'cited_by', 'abstract', 'pdf_url',)
        model = models.Paper