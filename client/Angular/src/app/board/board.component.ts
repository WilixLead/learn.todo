import { Component, OnInit, Input } from '@angular/core';
import { Board, BoardsService, Boarditem } from '..//Boards.service'
import { ApiService } from '../api.service';
import { DragulaService } from "ng2-dragula/ng2-dragula";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: [
    "../../../node_modules/dragula/dist/dragula.css",
    './board.component.css'
  ]
})
export class BoardComponent implements OnInit {
  @Input('isBoard') board:Board;
  constructor(
    private boardsService: BoardsService,
    private dragula: DragulaService
  ) { }

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

    this.dragula.drag.subscribe(() => {
      this.saveBoardItem(this.board);
    });
    this.dragula.drop.subscribe(() => {
      this.saveBoardItem(this.board);
    });

  }
}
