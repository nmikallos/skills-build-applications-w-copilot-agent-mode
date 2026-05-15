from djongo import models


class Team(models.Model):
    id = models.ObjectIdField(primary_key=True, default=None, editable=False)
    name = models.CharField(max_length=100, unique=True)
    class Meta:
        db_table = 'teams'


class User(models.Model):
    id = models.ObjectIdField(primary_key=True, default=None, editable=False)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='members')
    class Meta:
        db_table = 'users'


class Activity(models.Model):
    id = models.ObjectIdField(primary_key=True, default=None, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='activities')
    type = models.CharField(max_length=100)
    duration = models.IntegerField()  # in minutes
    date = models.DateField()
    class Meta:
        db_table = 'activities'


class Workout(models.Model):
    id = models.ObjectIdField(primary_key=True, default=None, editable=False)
    name = models.CharField(max_length=100)
    description = models.TextField()
    suggested_for = models.ManyToManyField(Team, related_name='workouts')
    class Meta:
        db_table = 'workouts'


class Leaderboard(models.Model):
    id = models.ObjectIdField(primary_key=True, default=None, editable=False)
    team = models.OneToOneField(Team, on_delete=models.CASCADE, related_name='leaderboard')
    points = models.IntegerField(default=0)
    class Meta:
        db_table = 'leaderboard'
