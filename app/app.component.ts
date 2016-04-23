import { Component, OnInit }  from 'angular2/core';
import { HTTP_PROVIDERS }			from 'angular2/http';

import { DataService } 	from './data.service';
import { EditComponent } from './edit.component';
import { Data }					from './data';

@Component({
		selector: 'my-app',
		templateUrl: 'app/app.component.html',
		directives: [EditComponent],
		providers: [DataService, HTTP_PROVIDERS]
	})
export class AppComponent {
	editData: Data;
	newData: Data;
	data: Data[];
	errorMessage: string;

	constructor(
		private _dataService: DataService
	) {
		this.newData = new Data(0, '');
	}

	ngOnInit() {
		this.getData();
	}

	getData() {
		this._dataService.getData()
												.subscribe(
													data => this.data = data,
													error => this.errorMessage = <any>error
												);
	}

	createData() {
		if (this.newData.data) {
	  	this._dataService.createData(this.newData)
													.subscribe(
														data => this.data.push(data[0]),
														error => this.errorMessage = <any>error
													);

			this.newData.data = '';
		}
	}

	removeData(d: Data) {
		for(var dt in this.data) {
			if (d.id == this.data[dt].id) {
				this.data.splice(+dt, 1);
			}
		}
	}

	deleteData(d: Data) {
			this._dataService.deleteData(d)
													.subscribe(
														data => this.removeData(data[0]),
														error => this.errorMessage = <any>error
													);
	}

	onSelect(d: Data) {
		this.editData = d;
	}

	onHide(b: boolean) {
		this.editData = null;
	}

}
