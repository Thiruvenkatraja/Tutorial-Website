from django.db import models
from courses_be.models import NewCourse
confirmation_email = (
    ('1 day Before', '1 day Before'),
    ('2 day Before', '2 day Before'),
    ('3 day Before', '3 day Before')
)
certificate_email = (
    ('1 day After', '1 day After'),
    ('2 day After', '2 day After'),
    ('3 day After', '3 day After'),
    ('Immediate After Attendance', 'Immediate After Attendance')
)


class ScheduleCourse(models.Model):
    select_course = models.ForeignKey(
        NewCourse, models.PROTECT, db_column='select_course', blank=False)
    run = models.IntegerField(db_column='run', blank=False)
    PDU = models.IntegerField(db_column='PDU', blank=False)
    CET = models.IntegerField(db_column='CET', blank=False)
    STU = models.IntegerField(db_column='STU', blank=False)
    start_date = models.DateField(db_column='start_date', blank=False)
    time = models.CharField(db_column='time', max_length=20, blank=False)
    day_period = models.CharField(
        db_column='day_period', max_length=20, blank=False)
    end_date = models.DateField(db_column='end_date', blank=False)
    max_seat = models.IntegerField(db_column='max_seat', blank=False)
    fee = models.IntegerField(db_column='fee', blank=False)
    confirmation_email = models.CharField(
        db_column='confirmation_email', max_length=20, choices=confirmation_email, blank=False)
    certificate_email = models.CharField(
        db_column='certificate_email', max_length=30, choices=certificate_email, blank=False)
    visibility = models.CharField(
        db_column='visibility', max_length=10, default="UnHide", blank=False)

    class Meta:
        db_table = 'schedule_course'