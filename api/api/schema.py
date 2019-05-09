import graphene
import projects.schema
import users.schema


class Mutation(projects.schema.Mutation, users.schema.Mutation):
    pass


class Query(projects.schema.Query):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
