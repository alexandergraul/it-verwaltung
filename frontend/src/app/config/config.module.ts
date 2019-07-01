import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigOverviewComponent } from './config-overview/config-overview.component';
import { ConfigUserComponent } from './config-user/config-user.component';
import { ConfigSupplierComponent } from './config-supplier/config-supplier.component';
import { ConfigDeviceTypeComponent } from './config-device-type/config-device-type.component';

@NgModule({
  declarations: [ConfigOverviewComponent, ConfigUserComponent, ConfigSupplierComponent, ConfigDeviceTypeComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }