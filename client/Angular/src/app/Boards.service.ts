import { Injectable } from '@angular/core'; 
import { ApiService } from './api.service';

@Injectable()


export class BoardsService {	 
    private items: Array<Boarditem> = []; 
    private boards: Array<Board> = []; 
    constructor(private api:ApiService) {    
    } 
}
  export class Board { 
    id:string = ''; 
    title:string = 'untitled'; 
    items:Array<Boarditem> = [];    
    } 

  export class Boarditem { 
    text:string = ''; 
    constructor(text:string = ''){ 
    this.text = text; 
    } 
    }
    