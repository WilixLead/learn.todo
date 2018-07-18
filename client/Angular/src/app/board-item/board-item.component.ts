import { Component, OnInit, Input } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { Boarditem, BoardsService, Board, } from '../Boards.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'boardItem',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {
  @Input('isIndex') i;  
  @Input('isBoard') board:Board;
  @Input('isBoardItem') item:Boarditem;
  constructor(private boardsService: BoardsService){

    }

  removeItem(board:Board) {
  board.items.splice(this.i, 1)
  this.boardsService.saveAddBoard(board);
  }

  saveItemEdit(board) {
    this.boardsService.saveAddBoard(this.board);
  }

  ngOnInit() {
  }

}
