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

  ngOnInit() {
  }
}
