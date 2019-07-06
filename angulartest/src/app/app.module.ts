import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PostlistComponent } from './postlist/postlist.component';
import { AuthorlistComponent } from './authorlist/authorlist.component';
import { AppRoutingModule } from './app-routing-module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostlistComponent,
    AuthorlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
