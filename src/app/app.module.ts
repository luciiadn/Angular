import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TercerDesafioComponent } from './tercer-desafio/tercer-desafio.component';
import { ErrorHelperComponent } from './shared/components/error-helper/error-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBarComponent,
    TercerDesafioComponent,
    ErrorHelperComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
