import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { ListOfDataKey } from './modals/ListOfDataKey.interface';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

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
  @Input() tableBodyList: any[] = []; //incoming data
  @Input() isHidden: boolean = false;
  @Input() tableStyle: any; //here is the style needed to be handled by the user
  @Input() isEditable: boolean = false; //here is the property needed to make user able to show/hide edit button for the selected row
  @Input() isDeleteble: boolean = false; //here is the property needed to make user able to show/hide delete button for the selected row
  @Input() isAdding: boolean = false; //here is the property needed to make user able to show/hide button needed to add details for the selected row
  @Input() isShowing: boolean = false; //here is the property needed to make user able to show/hide button needed to show details for the selected row
  @Input() hasPagination: boolean = false; //here is the property needed to make user able to show/hide pagination bar
  @Input() pageSize: number = 20; //here is the property needed to make user able to set how many rows per page
  @Input() imageUrl: string = ""; //here is the property needed to define the domain to show the table images
  @Output() callbackEdit: EventEmitter<{ row: any; index: number }> =
    new EventEmitter(); //here is the emitter needed to make the user able to edit the selected row
  @Output() callbackDelete: EventEmitter<{ row: any; index: number }> =
    new EventEmitter(); //here is the emitter needed to make the user able to delete the selected row
  @Output() callbackAdded: EventEmitter<{ row: any; index: number }> =
    new EventEmitter(); //here is the emitter needed to make the user able to add more details on the selected row
  @Output() callbackShow: EventEmitter<{ row: any; index: number }> =
    new EventEmitter(); //here is the emitter needed to make the user able to show more details on the selected row
  private domSanitiser: DomSanitizer = inject(DomSanitizer);

  isList: boolean = false;
  currentPage: number = 0;
  shownTableBody: any[] = [];
  pageCount: number = 0;
  ngOnInit(): void {
    this.pageCount = Math.ceil(this.tableBodyList.length / this.pageSize);
    this.handleTableData();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['tableBodyList'].currentValue?.length > 0) {
      this.tableBodyList = changes?.['tableBodyList'].currentValue;
      this.handleTableData();
    }
  }

  handleEditMode(row: any, index: number) {
    this.callbackEdit.emit({ row, index });
  }

  handleDeleteMode(row: any, index: number) {
    this.callbackDelete.emit({ row, index });
  }

  handleAddMode(row: any, index: number) {
    this.callbackAdded.emit({ row, index });
  }

  handleShowModel(row: any, index: number) {
    this.callbackShow.emit({ row, index });
  }

  nextPage() {
    this.currentPage++;
    this.handleTableData();
  }
  prevPage() {
    this.currentPage--;
    this.handleTableData();
  }
  selectPage(index: number) {
    this.currentPage = index;
    this.handleTableData();
  }
  handleTableData() {
    let anchor = this.currentPage * this.pageSize;
    if (this.hasPagination) {
      this.shownTableBody = this.tableBodyList.slice(
        anchor,
        anchor + this.pageSize
      );
    } else {
      this.shownTableBody = this.tableBodyList;
    }
  }

  letsRender(item: string) {
    return this.domSanitiser.bypassSecurityTrustHtml(item);
  }
}
