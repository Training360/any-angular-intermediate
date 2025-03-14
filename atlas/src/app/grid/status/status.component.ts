import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
})
export class StatusComponent implements ICellRendererAngularComp {
  status: string = '';

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.refresh(params);
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.status = params.value;
    return true;
  }
}
