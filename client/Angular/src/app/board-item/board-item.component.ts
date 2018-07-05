import { Component, OnInit, Input } from '@angular/core';
import { boardComponent } from '../board/board.component';
import { Boarditem, BoardsService, Board, } from '../Boards.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'boardItem',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class boardItemComponent implements OnInit {
  @Input('isIndex') i;  
  @Input('isBoard') board:Board;
  @Input('isBoardItem') item:Boarditem;
  constructor(private boardsService: BoardsService){

    }

  ngOnInit() {
  }

}
