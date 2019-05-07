import graphene
import projects.schema


class Mutation(projects.schema.Mutation):
    pass


class Query(projects.schema.Query):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
