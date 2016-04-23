System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', './data'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2, Observable_1, data_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                    this._dataUrl = 'http://127.0.0.1:5000';
                }
                DataService.prototype.getData = function () {
                    return this.http.get(this._dataUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                DataService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    var data = [];
                    for (var key in body) {
                        data.push(new data_1.Data(+key, body[key]));
                    }
                    return data || {};
                };
                DataService.prototype.handleError = function (error) {
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                DataService.prototype.createData = function (d) {
                    var body = JSON.stringify(d);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._dataUrl + '/create', body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                DataService.prototype.saveData = function (d) {
                    var body = JSON.stringify(d);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._dataUrl + '/save', body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                DataService.prototype.deleteData = function (d) {
                    var body = JSON.stringify(d);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._dataUrl + '/delete', body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map