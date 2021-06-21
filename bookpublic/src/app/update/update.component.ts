import { Component, OnInit } from '@angular/core';
import{BookServiceService}from'../book-service.service';
import{ Book }from'../book';
import{ActivatedRoute,Params}from'@angular/router';
import{switchMap}from'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[BookServiceService]
})

//UpdateComponent class imported from Oninit 
export class UpdateComponent implements OnInit {
  public selectedBook: Book ={
    _id: '',
    name: '',
    author:'',
    price:'',
    category:'',
    rating: null
  };
  
  //Constructor of this page Added with BookService 
  constructor(private BookService : BookServiceService,private route:ActivatedRoute) { }
  pageContent ={
    header: {
      title:'', body:''
    }
  }

  //function of NgOninit in getsibgke book
  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.BookService.getSingleBook(params.bookid)
    }))

    .subscribe((selectedBook:Book) => {
        this.selectedBook = selectedBook;
        this.pageContent.header.title = selectedBook.name;
        this.pageContent.header.body = 'Details for selected Book';
  });

  }
  updatenewbook(selectedBook:Book):void{
    
   
   this.BookService.updateBook(selectedBook,selectedBook._id);

  }
  
}