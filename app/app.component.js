System.register(['angular2/core', 'angular2/http', './data.service', './edit.component', './data'], function(exports_1, context_1) {
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
    var core_1, http_1, data_service_1, edit_component_1, data_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (edit_component_1_1) {
                edit_component_1 = edit_component_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_dataService) {
                    this._dataService = _dataService;
                    this.newData = new data_1.Data(0, '');
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getData();
                };
                AppComponent.prototype.getData = function () {
                    var _this = this;
                    this._dataService.getData()
                        .subscribe(function (data) { return _this.data = data; }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.createData = function () {
                    var _this = this;
                    if (this.newData.data) {
                        this._dataService.createData(this.newData)
                            .subscribe(function (data) { return _this.data.push(data[0]); }, function (error) { return _this.errorMessage = error; });
                        this.newData.data = '';
                    }
                };
                AppComponent.prototype.removeData = function (d) {
                    for (var dt in this.data) {
                        if (d.id == this.data[dt].id) {
                            this.data.splice(+dt, 1);
                        }
                    }
                };
                AppComponent.prototype.deleteData = function (d) {
                    var _this = this;
                    this._dataService.deleteData(d)
                        .subscribe(function (data) { return _this.removeData(data[0]); }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.onSelect = function (d) {
                    this.editData = d;
                };
                AppComponent.prototype.onHide = function (b) {
                    this.editData = null;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [edit_component_1.EditComponent],
                        providers: [data_service_1.DataService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map