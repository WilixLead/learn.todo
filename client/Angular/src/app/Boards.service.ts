import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Injectable()


export class BoardsService {
  private items: Array<Boarditem> = [];
  private boards: Array<Board> = [];
  constructor(private api: ApiService) {
  
}

addItemNew(id:string, board:Board) { 
  return this.api.editBoard(id, board).then((res:any)=>{ 
    
    }) 
}

saveDeleteBoard(id:string, i){ 
  return this.api.deleteBoard(id).then(()=>{ 
    this.boards.splice(i, 1);
  })  
  }

saveAddBoard(board:Board) {
  if(board.id.length == 0){ 
    return this.api.createBoard(board).then((res:any)=>{ 
      this.boards.push(board); 
      
    }) 
    
    } else {	 
    return this.api.editBoard(board.id, board); 
    } 
}

get() {
  return this.boards;
}
}
export class Board {
  id: string = '';
  title: string = 'untitled';
  items: Array<Boarditem> = [];
}

export class Boarditem {
  text: string = '';
  constructor(text: string = '') {
    this.text = text;
  }
}
