import { Injectable } from '@angular/core';
import { Board } from './Boards.service';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  apiUrl: string = 'http://localhost:4200';  // localhost пока нет сервера

  constructor(private http: Http) {

  }

  getBoards() {
    return this.http.get(this.apiUrl + '/boards/').toPromise();
  }

  createBoard(board: Board) {
    return this.http.post(this.apiUrl + '/board/', board).toPromise();
  }

  getBoard(id: string) {
    return this.http.get(this.apiUrl + '/board/' + id).toPromise();
  }

  editBoard(id: string, board: Board) {
    return this.http.put(this.apiUrl + '/board/' + id, board).toPromise();
  }

  deleteBoard(id: string) {
    return this.http.delete(this.apiUrl + '/board/' + id).toPromise();
  }
}


export interface ApiService {
  board: Board;
  boards: Array<Board>;
}
