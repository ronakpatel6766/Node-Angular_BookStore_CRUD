import { Component, OnInit } from '@angular/core';
import{ Book } from'../book';
import{BookServiceService}from'../book-service.service';


@Component({

  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[BookServiceService]


})

//Create Component with proper Attributes
export class CreateComponent implements OnInit {
  public newbook: Book ={


    _id: '',
    name: '',
    author:'',
    price:'',
    category:'',
    rating: null
  };

  
  
  constructor(private bookService : BookServiceService) { }

  
  ngOnInit(): void {
  }

  public createNewBook(newbook: Book): void{
    this.bookService.createBook(newbook);
  }

}