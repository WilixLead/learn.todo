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

  saveBoardItem(board: Board) {
    console.log(board);
    this.boardsService.saveAddBoard(board);
  }

  removeBoard(board:Board) {

    this.boardsService.saveDeleteBoard(board);

  }

  itemAdd(_id, board) {
    if (board.NewItem == 0) {
      return;
    }
    let item = new Boarditem;
    item.text = board.NewItem;
    board.items.push(item);
    this.boardsService.addItemNew(board._id, board);
    board.NewItem = '';
    console.log(board);
  }

  ngOnInit() {
  }
}
