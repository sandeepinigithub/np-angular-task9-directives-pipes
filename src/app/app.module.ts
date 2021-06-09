import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { SearchFilterPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { OnlineStatusComponent } from './online-status/online-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    HomeComponent,
    SearchFilterPipe,
    UsersComponent,
    OnlineStatusComponent
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
