import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialExampleRoutingModule } from './material-example-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatCommonModule } from '@angular/material/core';
import { MaterialExampleComponent } from './material-example.component';


@NgModule({
  declarations: [MaterialExampleComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MaterialExampleRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule    
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class MaterialExampleModule {


 }
