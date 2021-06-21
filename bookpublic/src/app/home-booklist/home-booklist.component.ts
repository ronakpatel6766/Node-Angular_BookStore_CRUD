import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';


@Component({
  selector: 'app-home-booklist',
  templateUrl: './home-booklist.component.html',
  styleUrls: ['./home-booklist.component.css'],
  providers: [BookServiceService]
})

//Homelist Class 
export class HomeBooklistComponent implements OnInit {
  books:Book[]
  // this is the construictor of homelist compoennt 
  constructor(private bookService:BookServiceService) {  }
  ngOnInit(): void {

    this.bookService
    .getBooks()
    .then((books:Book[])=>{

      this.books = books.map(book =>{
        return book;

      });

    });
    
  }

}