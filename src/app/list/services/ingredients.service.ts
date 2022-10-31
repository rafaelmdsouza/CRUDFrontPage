import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodGroup } from 'src/app/model/FoodGroup';
import { Ingredients } from '../../model/Ingredients';
import { NewIngredient } from '../../model/NewIngredient';
import { QuantityType } from '../../model/QuantityType';

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {

  private readonly apiUrl = 'https://crudtest3110.azurewebsites.net/api'
  private readonly getIngredientsUrl = `${this.apiUrl}/ingredients/`
  private readonly getFoodGroupUrl = `${this.apiUrl}/foodgroup/`
  private readonly getQuantityTypeUrl = `${this.apiUrl}/quantitytype/`


  constructor(private http: HttpClient) { }


  //Ingredients

  getIngredients(): Observable<Ingredients[]> {
    return this.http.get<Ingredients[]>(this.getIngredientsUrl)
  }

  postIngredients(data: NewIngredient): any{
    return this.http.post(this.getIngredientsUrl, data)
  }

  deleteIngredients(id: number) {
    return this.http.delete(`${this.getIngredientsUrl}${id}/delete`)
  }

  putIngredients(id: number, data:NewIngredient): Observable<any>{
    return this.http.put<any>(`${this.getIngredientsUrl}${id}`, data)
  }

  //Food Groups
  getFoodGroups(): Observable<FoodGroup[]> {
    return this.http.get<FoodGroup[]>(this.getFoodGroupUrl)
  }

  postFoodGroups(data: any) {
    return this.http.post(this.getFoodGroupUrl, data)
  }


  //Quantity Types
  getQuantityType(): Observable<QuantityType[]> {
    return this.http.get<QuantityType[]>(this.getQuantityTypeUrl)
  }

  postQuantityTypes(data: any) {
    return this.http.post(this.getQuantityTypeUrl, data)
  }
}
