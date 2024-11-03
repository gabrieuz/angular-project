import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-example',
  templateUrl: './material-example.component.html',
  styleUrls: ['./material-example.component.scss'],
})
export class MaterialExampleComponent {

  constructor(private _formBuilder: FormBuilder) { }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


}
