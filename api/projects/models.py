from django.db import models
from users.models import User


class Membership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='memberships')
    project = models.ForeignKey('Project', on_delete=models.CASCADE, related_name='memberships')


class Project(models.Model):
    users = models.ManyToManyField(User, through=Membership, related_name='projects')
    name = models.CharField(max_length=128)
