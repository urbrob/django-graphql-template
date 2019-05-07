from django.contrib import admin
from projects.models import Membership, Project


class MembershipAdmin(admin.StackedInline):
    model = Membership


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    inlines = [MembershipAdmin]
