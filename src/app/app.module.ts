import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertirComponent } from './components/convertir/convertir.component';
import { MonedaComponent } from './components/moneda/moneda.component';
import { TexPipe } from './tex.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertirComponent,
    MonedaComponent,
    TexPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
