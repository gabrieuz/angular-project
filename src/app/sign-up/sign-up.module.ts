import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { MenuComponent } from "../components/menu/menu.component";
import { ToolbarComponent } from "../components/toolbar/toolbar.component";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    MenuComponent,
    ToolbarComponent,
    ReactiveFormsModule

],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
