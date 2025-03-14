import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { TestCase } from '../../model/test-case';
import { TestCaseService } from '../../service/test-case.service';
import { StatusComponent } from '../../grid/status/status.component';

@Component({
  selector: 'app-cases',
  imports: [AgGridAngular, StatusComponent],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.css',
})
export class CasesComponent {
  testCaseService = inject(TestCaseService);

  rowData: TestCase[] = [];

  get tableHeight(): number {
    return this.rowData.length * 25 + 20;
  }

  loaded: boolean = false;

  colDefs: ColDef[] = [
    {
      field: 'id',
      comparator(valueA, valueB, isDescending) {
        return (valueA - valueB) * (isDescending ? -1 : 1);
      },
    },
    { field: 'code' },
    { field: 'testPlanId' },
    { field: 'testSteps' },
    {
      field: 'description',
      filter: true,
      filterValueGetter: (params) => params.data,
    },
    { field: 'preConditions' },
    { field: 'status', cellRenderer: StatusComponent },
  ];

  async onGridReady() {
    this.rowData = await this.testCaseService.fetchAll();
  }

  async onBodyScroll(event: any) {
    if (this.tableHeight - event.top < 50) {
      const gridBody = document.querySelector(
        '.ag-body-viewport'
      ) as HTMLElement;
      const scrollTop = gridBody.scrollTop;

      const newRows = await this.testCaseService.fetchAll();
      const allRows = [...this.rowData, ...newRows];
      this.rowData = allRows as TestCase[];

      gridBody.scrollTop = scrollTop;
    }
  }
}
