import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CountAndSalary } from 'src/app/interfaces/Client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-salary-and-count',
  templateUrl: './salary-and-count.component.html',
  styleUrls: ['./salary-and-count.component.scss']
})
export class SalaryAndCountComponent{
  field: "cidade" | "sexo" | "especie" = 'cidade';

  displayedColumns: string[] = ['agrupamento', 'count', 'salario'];

  options: string[] = ['cidade', 'sexo', 'especie'];

  dataSource: MatTableDataSource<CountAndSalary> = new MatTableDataSource<CountAndSalary>();

  @ViewChild(MatPaginator) "paginator": MatPaginator;

  constructor(private clientSrv: ClientService) { }

  getCountAndSalary(): void {
    this.clientSrv.findSalaryAndCount(this.field).subscribe(clients => {
      const dataSource = new MatTableDataSource(clients);
      dataSource.paginator = this.paginator;
      this.dataSource = dataSource;
    })
  }

}
