import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';
import { IngredientsService } from '../services/ingredients.service';
import { NewIngredient } from '../../model/NewIngredient';
import { FoodGroup } from '../../model/FoodGroup';
import { QuantityType } from '../../model/QuantityType';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.scss'],
})
export class NewIngredientComponent implements OnInit {
  form!: FormGroup;
  foodGroups!: FoodGroup[];
  quantityType!: QuantityType[];


  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    public dialogRef: MatDialogRef<NewIngredientComponent>,
    private _formBuilder: FormBuilder,
    private _service: IngredientsService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getFoodGroups();
    this.getQuantityTypes();

  }

  createForm(): void {
    this.form = this._formBuilder.group({
      Name: ['', [Validators.required, Validators.maxLength(50)]],
      Quantity: [null, [Validators.required]],
      ExpirationDate: [null, [Validators.required]],
      Group: [null, [Validators.required]],
      QuantityType: [null, [Validators.required]],
    });
    if(this.editData){
      this.form.controls['Name'].setValue(this.editData.Name)
      this.form.controls['Quantity'].setValue(this.editData.Quantity)
      this.form.controls['ExpirationDate'].setValue(this.editData.ExpirationDate)
      this.form.controls['Group'].setValue(this.editData.Group)
      this.form.controls['QuantityType'].setValue(this.editData.QuantityType)

    }
  }

  postIngredient() {
    let request: NewIngredient = {
      Name: this.form.get('Name')?.value,
      Quantity: this.form.get('Quantity')?.value,
      ExpirationDate: this.form.get('ExpirationDate')?.value,
      GroupId_id: this.form.get('Group')?.value,
      QuantityTypeId_id: this.form.get('QuantityType')?.value,
    }

    if(!this.editData){
      this._service.postIngredients(request).subscribe({
        next: () => {
          this.dialogRef.close();
        }
      });
    }
    else
      this.updateIngredient(request)
  }

  updateIngredient(data: NewIngredient){
    this._service.putIngredients(this.editData.Id, data).subscribe({
      next: () => {
        this.form.reset();
        this.dialogRef.close();
      }
    });
  }

  getFoodGroups(){
    this._service.getFoodGroups().subscribe(res => {
      this.foodGroups = res
    })
  }

  getQuantityTypes(){
    this._service.getQuantityType().subscribe(res => {
      this.quantityType = res
    })
  }
}
