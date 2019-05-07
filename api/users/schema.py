from users.models import User
from graphene_django import DjangoObjectType


class UserNode(DjangoObjectType):
    class Meta:
        model = User
        only_fields = '__all__'
