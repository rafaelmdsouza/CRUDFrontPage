import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IngredientsService } from './services/ingredients.service';
import { Ingredients } from '../model/Ingredients';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';
import { NewFoodgroupComponent } from './new-foodgroup/new-foodgroup.component';
import { NewQuantitytypeComponent } from './new-quantitytype/new-quantitytype.component';

@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  displayedColumns: string[] = [
    'Name',
    'Group',
    'Quantity',
    'QuantityType',
    'ExpirationDate',
    'action'
  ];

  dataSource!: MatTableDataSource<Ingredients>;
  foodGroup!: any;
  quantityType!: any;
  isPersonPosted: boolean = false;

  constructor(public service: IngredientsService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.service.getIngredients().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.sort.sort({ id: 'Name', start: 'asc' } as MatSortable);
      this.dataSource.sort = this.sort;
      this.sortData(this.dataSource.sort);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openIngredientDialog() {
    this.dialog
      .open(NewIngredientComponent, {
        minWidth: '550px',
      })
      .afterClosed()
      .subscribe((res) => {
        this.getIngredients();
      });
  }

  openFoodGroupDialog() {
    this.dialog
      .open(NewFoodgroupComponent, {
        minWidth: '550px',
      })
      .afterClosed()
      .subscribe((res) => {
        this.getIngredients();
      });
  }

  openQuantityTypeDialog() {
    this.dialog
      .open(NewQuantitytypeComponent, {
        minWidth: '550px',
      })
      .afterClosed()
      .subscribe((res) => {
        this.getIngredients();
      });
  }

  delete(id: number) {
    this.service.deleteIngredients(id).subscribe(() => {this.getIngredients()});
  }

  editIngredient(ingredient: any){
    this.dialog.open(NewIngredientComponent, {
      minWidth: '550px',
      data:ingredient
    })
    .afterClosed()
      .subscribe((res) => {
        this.getIngredients();
      });
  }

  sortData(dataSort: Sort) {
    if (!dataSort.active || dataSort.direction == '') {
      this.dataSource.sort = this.sort;
      return;
    }
      this.verifyActiveSort(dataSort.active)
  }

  private verifyActiveSort(sortActive: string){
    if (sortActive === 'Name') {
      this.dataSource.sortData = (data: Ingredients[], sort: MatSort) => {
        return data.sort((a, b) => {
          let directionAsc = sort.direction === 'asc';
          return this.compare(a.Name.toLowerCase(),b.Name.toLowerCase(), directionAsc);
        });
      };
    }
    if (sortActive === 'Quantity') {
      this.dataSource.sortData = (data: Ingredients[], sort: MatSort) => {
        return data.sort((a, b) => {
          let directionAsc = sort.direction === 'asc';
          return this.compare(a.Quantity, b.Quantity, directionAsc);
        });
      };
    }
  }

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
