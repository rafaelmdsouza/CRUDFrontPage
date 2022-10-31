import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewIngredient } from 'src/app/model/NewIngredient';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-new-foodgroup',
  templateUrl: './new-foodgroup.component.html',
  styleUrls: ['./new-foodgroup.component.scss']
})
export class NewFoodgroupComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewFoodgroupComponent>,
    private _formBuilder: FormBuilder,
    private _service: IngredientsService
  ) {}

  ngOnInit(): void {
    this.createForm();

  }

  createForm(): void {
    this.form = this._formBuilder.group({
      Name: ['', [Validators.required, Validators.maxLength(50)]],
    })
    }


  postFoodGroup() {
      this._service.postFoodGroups(this.form.value).subscribe({
        next: () => {
          this.dialogRef.close();
        }
      });
}
}
