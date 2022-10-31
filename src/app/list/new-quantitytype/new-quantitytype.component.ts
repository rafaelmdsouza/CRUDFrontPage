import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewFoodgroupComponent } from '../new-foodgroup/new-foodgroup.component';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-new-quantitytype',
  templateUrl: './new-quantitytype.component.html',
  styleUrls: ['./new-quantitytype.component.scss']
})
export class NewQuantitytypeComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewQuantitytypeComponent>,
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


    postQuantityTypes() {
      this._service.postQuantityTypes(this.form.value).subscribe({
        next: () => {
          this.dialogRef.close();
        }
      });
}
}
