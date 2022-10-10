import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/interfaces/Client';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Input() data$: Observable<Client[]> = new Observable<Client[]>();
  displayedColumns: string[] = ['id', 'nome', 'CPF', 'salario'];
  "dataSource": MatTableDataSource<Client>;

  @ViewChild(MatPaginator) "paginator": MatPaginator;

  constructor(private router: Router) { }

  ngOnChanges(): void {
    if (this.data$) {
      this.data$.subscribe(clients => {
        this.dataSource = new MatTableDataSource(clients);
        this.dataSource.paginator = this.paginator;
      })
    }
  }

  accessClient(id: number): void {
    this.router.navigate(['/client', `${id}`]);
  }
}
