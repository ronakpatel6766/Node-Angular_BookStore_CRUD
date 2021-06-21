import { Component, OnInit } from '@angular/core';
import{Book}from'../book';
import{BookServiceService}from'../book-service.service';
import{switchMap}from'rxjs/operators';
import{ActivatedRoute,Params}from'@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[BookServiceService]
})

//DElete Component 
export class DeleteComponent implements OnInit {

  constructor(private BookService:BookServiceService,private route:ActivatedRoute) { }

newbook: Book;
  pageContent ={
    header: {
      title:'', body:''
    }
  };

  //with appropriate form and data
  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.BookService.deletebook(params.bookid);
    }))
      .subscribe((newbook:Book) => {
        console.log('Selected Book', newbook);
        this.newbook = newbook;
        this.pageContent.header.title = newbook.name;
        this.pageContent.header.body = 'Information of your clicked Book';
      });

  }


}