import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  jsonData: any;

  constructor(private http: HttpClient) {
  }

  getJsonData(){
    return this.http.get('assets/i18n/de.json');
  }
}
