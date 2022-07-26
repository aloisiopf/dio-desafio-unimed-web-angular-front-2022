import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from "./model/Book";

/*
 *const books criada para testes até API ser desenvolvida 
*/
export const books: Book[] = [
    { id: '1', name: 'Book1', price: 10, quantity: 1, category: "Ação", img: "img1"},
    { id: '2', name: 'Book2', price: 15, quantity: 1, category: "Ação", img: "img2"},
    { id: '3', name: 'Book3', price: 8, quantity: 1, category: "Ação", img: "img3"}
];

@Injectable()
export class BooksService {
    private url = 'assets/db/books.json';
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    constructor(private http: HttpClient){

    }

    //Método para API
    getBooks(){
       return this.http.get(this.url);
    }
}