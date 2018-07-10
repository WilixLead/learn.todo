import { Injectable } from '@angular/core';
import { Board } from './Boards.service';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  apiUrl: string = 'http://localhost:3000/';  

  constructor(private http: Http) {

  }

  getBoards() {
    return this.http.get(this.apiUrl + 'boards').toPromise();
  }

  createBoard(board: Board) {
    return this.http.post(this.apiUrl + board.title , '/').toPromise();
  }

  editBoard(id: string, board: Board) {
    return this.http.put(this.apiUrl + 'upd', '/').toPromise();  //пока нет рабочей версии put запроса на сервере
  }

  deleteBoard(id: string) {
    return this.http.delete(this.apiUrl + id ).toPromise();
  }
}


export interface BoardsInetr {
  board: Board;
  boards: Array<Board>;
}
