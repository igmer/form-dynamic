import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ControlsService} from '../../common/forms/controls.service';
import {ControlBase} from '../../common/forms/control-base';
import {FormConfigService} from '../../services/form-config.service';

@Component({
    selector: 'app-form2',
    templateUrl: './form2.page.html',
    styleUrls: ['./form2.page.scss'],
})
export class Form2Page implements OnInit {
    controls: ControlBase<any>[];
    form: FormGroup;
    readonly FILENAME = 'form2-conf.json';

    constructor(public configService: FormConfigService,
                public controlsService: ControlsService) {
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
    }

}
