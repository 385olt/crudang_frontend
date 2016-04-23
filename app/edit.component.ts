import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { DataService }      from './data.service'
import { Data }             from './data'

@Component({
    selector: 'edit-component',
    templateUrl: 'app/edit.component.html'
  })
export class EditComponent {
  @Input() editData: Data;
  @Output() errorMessage = new EventEmitter<string>();
  @Output() onHide = new EventEmitter<boolean>();

  constructor(private _dataService: DataService) {}

  saveData() {
    this._dataService.saveData(this.editData)
                        .subscribe(
                          error => this.errorMessage.emit(<any>error)
                        );
  }

  cancel() {
    this.onHide.emit(true);
  }
}
