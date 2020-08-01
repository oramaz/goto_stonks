# Generated by Django 2.2.7 on 2020-08-01 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0010_auto_20200801_1730'),
    ]

    operations = [
        migrations.CreateModel(
            name='Paragraph',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, null=True)),
                ('text', models.TextField(null=True)),
                ('time', models.TimeField(null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='News',
        ),
        migrations.AlterField(
            model_name='deal',
            name='time',
            field=models.DateTimeField(null=True),
        ),
    ]
