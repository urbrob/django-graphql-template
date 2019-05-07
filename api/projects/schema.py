from graphene_django import DjangoObjectType
from projects.models import Project, Membership
import graphene


class ProjectNode(DjangoObjectType):
    class Meta:
        model = Project


class MembershipNode(DjangoObjectType):
    class Meta:
        model = Membership

class CreateProjectMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String()

    project = graphene.Field(ProjectNode)

    def mutate(self, info, **kwargs):
        project = Project.objects.create(name=kwargs['name'])
        Membership.objects.create(user=info.context.user, project=project)
        return CreateProjectMutation(project=project)


class Mutation(graphene.ObjectType):
    create_project = CreateProjectMutation.Field()


class Query(graphene.ObjectType):
    my_projects = graphene.List(ProjectNode)

    def resolve_my_projects(self, info):
        return Project.objects.filter(users=info.context.user)
