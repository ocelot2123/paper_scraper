from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("papers", views.PaperViewSet, "papers")

urlpatterns = router.urls