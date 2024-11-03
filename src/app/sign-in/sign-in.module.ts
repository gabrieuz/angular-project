import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import { ToolbarComponent } from "../components/toolbar/toolbar.component";
import { MenuComponent } from "../components/menu/menu.component";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule,
    ToolbarComponent,
    MenuComponent,
    ReactiveFormsModule
],
  declarations: [SignInPage]
})
export class SignInPageModule {}