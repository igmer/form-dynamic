import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Form1PageRoutingModule } from './form1-routing.module';

import { Form1Page } from './form1.page';
import {DynamicFormModule} from '../../common/forms/dynamic-form.module';
import {FormConfigService} from '../../services/form-config.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Form1PageRoutingModule,
    DynamicFormModule
  ],
  declarations: [Form1Page],
  providers: [FormConfigService],
  entryComponents: [Form1Page]
})
export class Form1PageModule {}
