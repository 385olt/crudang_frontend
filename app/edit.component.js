System.register(['angular2/core', './data.service', './data'], function(exports_1, context_1) {
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
    var core_1, data_service_1, data_1;
    var EditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            EditComponent = (function () {
                function EditComponent(_dataService) {
                    this._dataService = _dataService;
                    this.errorMessage = new core_1.EventEmitter();
                    this.onHide = new core_1.EventEmitter();
                }
                EditComponent.prototype.saveData = function () {
                    var _this = this;
                    this._dataService.saveData(this.editData)
                        .subscribe(function (error) { return _this.errorMessage.emit(error); });
                };
                EditComponent.prototype.cancel = function () {
                    this.onHide.emit(true);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', data_1.Data)
                ], EditComponent.prototype, "editData", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], EditComponent.prototype, "errorMessage", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], EditComponent.prototype, "onHide", void 0);
                EditComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-component',
                        templateUrl: 'app/edit.component.html'
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], EditComponent);
                return EditComponent;
            }());
            exports_1("EditComponent", EditComponent);
        }
    }
});
//# sourceMappingURL=edit.component.js.map