import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { NewIngredientComponent } from './list/new-ingredient/new-ingredient.component';
import { NewFoodgroupComponent } from './list/new-foodgroup/new-foodgroup.component';
import { NewQuantitytypeComponent } from './list/new-quantitytype/new-quantitytype.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    NewIngredientComponent,
    NewFoodgroupComponent,
    NewQuantitytypeComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSortModule,
    MatToolbarModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
