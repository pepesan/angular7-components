import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AnidadosModule} from './anidados/anidados.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {SharedDataModule} from './shared-data/shared-data.module';
import {ServiceSharedModule} from './service-shared/service-shared.module';
import {ViewChildSharedModule} from './view-child-shared/view-child-shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnidadosModule,
    SharedDataModule,
    ServiceSharedModule,
    ViewChildSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
