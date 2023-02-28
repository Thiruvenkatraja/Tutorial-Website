# Generated by Django 4.1.7 on 2023-02-28 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('course_id', models.AutoField(db_column='course_id', primary_key=True, serialize=False)),
                ('course_title', models.CharField(db_column='course_title', max_length=50)),
                ('course_addded_date', models.DateField(auto_now_add=True, db_column='course_added_date')),
                ('run', models.IntegerField(db_column='run')),
                ('PDU', models.IntegerField(db_column='PDU')),
                ('CET', models.IntegerField(db_column='CET')),
                ('STU', models.IntegerField(db_column='STU')),
                ('duration', models.CharField(choices=[('09: 00am – 05: 00pm ', '09: 00am – 05: 00pm'), ('09: 00am – 01: 00pm', '09: 00am – 01: 00pm')], db_column='duration', max_length=20)),
                ('day_period', models.CharField(choices=[('Full Day', 'Full Day'), ('Two Day', 'Two Day')], db_column='day_period', max_length=20)),
                ('certificate_code', models.CharField(db_column='certificate_code', max_length=50)),
                ('fee', models.IntegerField(db_column='fee', default='Full Day')),
                ('visibility', models.CharField(choices=[('Hide', 'Hide'), ('Unhide', 'Unhide')], db_column='visibility', default='Unhide', max_length=10)),
            ],
            options={
                'db_table': 'new_course',
            },
        ),
    ]
