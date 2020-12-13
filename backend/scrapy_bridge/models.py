from django.db import models


class Paper(models.Model):
    title = models.TextField()
    first_author = models.CharField(max_length = 30)
    cited_by = models.CharField(max_length = 20, null = True, blank = True)
    abstract = models.TextField(null = True, blank = True)
    pdf_url = models.URLField(null = True, blank = True)

def __str__(self):
        return self.title