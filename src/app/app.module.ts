/* Core Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/* Defined Modules */
import { UserModule } from './user/user.module';

/* Components */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* App Service */
import { AppService } from './app.service';

/* import From Materialize */
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    UserModule,
    MatTooltipModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
