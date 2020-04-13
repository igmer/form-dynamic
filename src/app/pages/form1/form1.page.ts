import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ControlBase} from '../../common/forms/control-base';
import {ControlsService} from '../../common/forms/controls.service';
import {FormConfigService} from '../../services/form-config.service';
import 'rxjs/add/operator/map';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-form1',
    templateUrl: './form1.page.html',
    styleUrls: ['./form1.page.scss'],
})
export class Form1Page implements OnInit {
    controls: ControlBase<any>[];
    form: FormGroup;
    readonly FILENAME = 'stack.php';
    submitted: any;

    constructor(public controlsService: ControlsService,
                public configService: FormConfigService,
                public  alertCtrl: AlertController) {
        this.form = new FormGroup({});
    }

    ngOnInit() {
    }



ionViewWillEnter() {
        this.configService.getFormConfig(this.FILENAME)
            .map(res => res.json())
            .subscribe(data => {
                this.controls = this.controlsService.getControls(data);
            });
        this.form.valueChanges
            .subscribe(val => {
               this.submitted = val;
            });
    }

    submitForm($event) {
        console.log('Success\n', this.submitted);
    }

}
