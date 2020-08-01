from django.contrib import admin

from .models import *


admin.site.register(Project)
admin.site.register(Invite)
admin.site.register(BillingRecord)
admin.site.register(StockHistory)
admin.site.register(IpoRecord)
admin.site.register(StockRecord)
admin.site.register(ToSale)
admin.site.register(ToBuy)