import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Board, BoardsService, Boarditem } from '..//Boards.service'
import { ApiService } from '../api.service';
import { DragulaService } from "ng2-dragula/ng2-dragula";
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: [
    "../../../node_modules/dragula/dist/dragula.css",
    './board.component.css'
  ]
})
export class BoardComponent implements OnInit, OnDestroy {
  @Input('isBoard') board:Board;

  dropSubscription: Subscription;

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
    if (!board.NewItem) {
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
    this.dropSubscription = this.dragula.drop.subscribe(() => {
      this.saveBoardItem(this.board);
    });
  }

  ngOnDestroy() {
    if (this.dropSubscription) {
      this.dropSubscription.unsubscribe();
    }
  }
}
