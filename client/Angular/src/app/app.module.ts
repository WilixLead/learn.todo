import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { BoardsService } from './Boards.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { BoardComponent } from './board/board.component';
import { BoardItemComponent } from './board-item/board-item.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ApiService,
    BoardsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
