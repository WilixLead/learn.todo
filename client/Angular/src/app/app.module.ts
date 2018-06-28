import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { BoardsService } from './Boards.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { boardComponent } from './board/board.component';
import { boardItemComponent } from './board-item/board-item.component';


@NgModule({
  declarations: [
    AppComponent,
    boardComponent,
    boardItemComponent,
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
