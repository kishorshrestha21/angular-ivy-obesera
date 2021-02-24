import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataserviceService {

  constructor(private _hettp: HttpClient) { }
url='https://jsonplaceholder.typicode.com/users'

jasonData():Observable<any>{
  return this._hettp.get(this.url);
}

}