import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Form2PageRoutingModule } from './form2-routing.module';

import { Form2Page } from './form2.page';
import {Form1Page} from '../form1/form1.page';
import {DynamicFormModule} from '../../common/forms/dynamic-form.module';
import {FormConfigService} from '../../services/form-config.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Form2PageRoutingModule,
    DynamicFormModule
  ],
  declarations: [Form2Page],
  entryComponents: [Form2Page],
  providers: [FormConfigService]

})
export class Form2PageModule {}
