import { Component, Input } from '@angular/core';
import { Board, Boarditem, BoardsService } from './Boards.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inAdd: string = '';
  boards:Array<Board> = [];

  constructor(private boardsService: BoardsService){
    this.boards = boardsService.get();
  }

  addBoard() {

    if(this.inAdd == '') {
      return;
    }

    let board = new Board() ;
    board.title = this.inAdd;
    this.boardsService.saveAddBoard(board);
    console.log(this.boards);
    this.inAdd = '';
  }

}
