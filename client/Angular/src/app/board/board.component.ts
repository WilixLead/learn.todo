import { Component, OnInit, Input } from '@angular/core';
import { Board, BoardsService, Boarditem } from '..//Boards.service'
import { ApiService } from '../api.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: [ './board.component.css']
})
export class boardComponent implements OnInit {
  @Input('isBoard') board:Board;
  constructor(private boardsService: BoardsService) { }

  removeBoard(i, board:Board) {
    
    this.boardsService.saveDeleteBoard(i, board.id );
    
  }

  ItemAdd(id, board) {
    if (board.NewItem == 0) {
      return;
    }
    let item = new Boarditem;
    item.text = board.NewItem;
    board.items.push(item); 
    this.boardsService.AddItemNew(board.id, board);
    board.NewItem = '';
    console.log(board);
  }
  
  ngOnInit() {
  }
}
