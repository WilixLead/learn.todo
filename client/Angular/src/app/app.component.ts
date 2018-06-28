import { Component, Input } from '@angular/core';
import { Board, Boarditem, BoardsService } from './Boards.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
constructor(private boardsService: BoardsService){
   
  }
} 
