import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NewDokmeComponent } from './pages/new-dokme/new-dokme.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ListDokmeComponent } from './components/list-dokme/list-dokme.component';
import { RegisterComponent } from './pages/register/register.component';
import { FingerprintjsProAngularModule } from '@fingerprintjs/fingerprintjs-pro-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewDokmeComponent,
    PageNotFoundComponent,
    ListDokmeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FingerprintjsProAngularModule.forRoot({
      loadOptions: { apiKey: 'iiuIAXZValPDjn7qAtXg' },
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
