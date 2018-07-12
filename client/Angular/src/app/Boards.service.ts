import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Injectable()


export class BoardsService {

  private boards: Array<Board> = [];

  constructor (private api: ApiService) {
    this.load().then(() => this.startUpdate());
  }

  get() {
    return this.boards;
  }

  startUpdate () {
    setTimeout(() => {
      this.load().then(() => {
        this.startUpdate();
      });
    }, 5000);
  }

  load() {

    let currentBoard = this.boards.slice();

    return this.api.getBoards().then((res: any) => {

      res = res.json();

      if (!res) {
        return;
      }

      if (JSON.stringify(currentBoard) !== JSON.stringify(res)) {
        this.boards.splice(0, this.boards.length);
      } else {
        return;
      }

      if (this.boards.length > res.length) {
        this.boards.splice(res.length - 1);
      }

      Object.keys(res).forEach(key => {
        let board = new Board();
        board._id = res[key]._id;
        if (res[key].title) {
          board.title = res[key].title;
        } else {
          board.title = "";
        }
        if (res[key].items) {
          res[key].items.forEach(localItem => {
            let item = new Boarditem();
            item.text = localItem.text;
            board.items.push(item);
          });
        } else {
          board.items = [];
        }

        let foundBoard = this.boards.find(val => board._id == val._id);
        if (!foundBoard) {
          this.boards.push(board);
        } else {
          foundBoard.title = board.title;
          foundBoard.items = board.items;
          if (foundBoard.items.length > board.items.length) {
            foundBoard.items.splice(board.items.length - 1);
          }
          board.items.forEach((item, i) => (foundBoard.items[i] = item));
        }
      });


      this.boards.forEach((board, i) => {
        if(!res.find(val => board._id == val._id)) {
          this.boards.splice(i, 1);
        }
      });

      console.log(this.boards);

    });
  }

  addItemNew (id:string, board:Board) {
    return this.api.editBoard(id, board).then((res:any)=>{
    });
  }

  saveDeleteBoard (id:string, i) {
    return this.api.deleteBoard(id).then(()=>{
        this.boards.splice(i, 1);
    });
  }

  saveAddBoard (board:Board) {
    if(board._id.length == 0){
      return this.api.createBoard(board).then((res:any)=>{
          this.boards.push(board);
      });
    } else {
        return this.api.editBoard(board._id, board);
    }
  }

}

export class Board {

  _id: string = '';
  title: string = 'untitled';
  items: Array<Boarditem> = [];

}

export class Boarditem {

  text: string = '';

  constructor(text: string = '') {
    this.text = text;
  }

}
