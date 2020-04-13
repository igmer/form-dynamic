import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {
  readonly  BASEURL = 'http://10.168.10.80/';

  constructor(private  http: Http) { }
  public getFormConfig(filename) {
    return this.http.get(this.BASEURL + filename);
  }
}
