import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { ListOfDataKey } from './modals/ListOfDataKey.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-hta-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hta-table.component.html',
  styleUrl: './hta-table.component.css',
})
export class HtaTableComponent implements OnInit, OnChanges {
  @Input() fetchedData: any[] = []; //here is the propery needed to show data fetched from the api or any something else
  @Input() tableHeaderList!: any; //here is the header list will be configured by the user
  @Input() listofObject!: ListOfDataKey[]; //model object key
  @Input() tableBodyList!: any; //incoming data
  @Input() isHidden: boolean = true;
  @Input() tableStyle: any; //here is the style needed to be handled by the user
  @Input() isEditable: boolean = false; //here is the property needed to make user able to show/hide edit button for the selected row
  @Input() isDeleteble: boolean = false; //here is the property needed to make user able to show/hide delete button for the selected row
  @Input() isAdding: boolean = false; //here is the property needed to make user able to show/hide button needed to add details for the selected row
  @Input() isShowing: boolean = false; //here is the property needed to make user able to show/hide button needed to show details for the selected row
  @Output() callbackEdit: EventEmitter<any> = new EventEmitter(); //here is the emitter needed to make the user able to edit the selected row
  @Output() callbackDelete: EventEmitter<any> = new EventEmitter(); //here is the emitter needed to make the user able to delete the selected row
  @Output() callbackAdded: EventEmitter<any> = new EventEmitter(); //here is the emitter needed to make the user able to add more details on the selected row
  @Output() callbackShow: EventEmitter<any> = new EventEmitter(); //here is the emitter needed to make the user able to show more details on the selected row

  isList: boolean = false;
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['tableBodyList'].currentValue?.length > 0) {
      this.tableBodyList = changes?.['tableBodyList'].currentValue;
    }
  }

  handleEditMode(rowData: any) {
    this.callbackEdit.emit(rowData);
  }

  handleDeleteMode(rowData: any) {
    this.callbackDelete.emit(rowData);
  }

  handleAddMode(rowData: any) {
    this.callbackAdded.emit(rowData);
  }

  handleShowModel(rowData: any) {
    this.callbackShow.emit(rowData);
  }
}
