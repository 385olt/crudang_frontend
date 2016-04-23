import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Data }       from './data';

@Injectable()
export class DataService {

  constructor(private http: Http) {

  }

  private _dataUrl = 'http://127.0.0.1:5000';

  getData(): Observable<Data[]> {
    return this.http.get(this._dataUrl)
                      .map(this.extractData)
                      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >=300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    let data: Data[] = [];
    for(var key in body) {
      data.push(new Data(+key, body[key]));
    }
    return data || { };
  }

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  createData(d: Data): Observable<Data> {
    let body = JSON.stringify(d);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._dataUrl + '/create', body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
  }

  saveData(d: Data): Observable<Data> {
    let body = JSON.stringify(d);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._dataUrl + '/save', body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
  }

  deleteData(d: Data): Observable<Data> {
    let body = JSON.stringify(d);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._dataUrl + '/delete', body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
  }
}
