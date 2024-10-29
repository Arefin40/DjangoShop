# Generated by Django 5.1.1 on 2024-10-28 15:29

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='merchantapplication',
            old_name='business_email',
            new_name='email',
        ),
        migrations.RenameField(
            model_name='merchantapplication',
            old_name='professional_photo',
            new_name='photo',
        ),
        migrations.AddField(
            model_name='merchantapplication',
            name='comments',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='merchantapplication',
            name='date_applied',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
