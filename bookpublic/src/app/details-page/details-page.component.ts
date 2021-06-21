import { Component, OnInit } from '@angular/core';
import{Book }from'../book';
import{BookServiceService}from'../book-service.service';
import{switchMap}from'rxjs/operators';
import{ActivatedRoute,Params}from'@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers:[BookServiceService]
})

//class DetailsPage component
export class DetailsPageComponent implements OnInit {

  constructor(private BookService:BookServiceService,private route:ActivatedRoute) { }
  newbook: Book;
  pageContent ={
    header: {
      title:'', body:''
    }
  };
  // getsingleBook function on init in Details Page 
  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.BookService.getSingleBook(params.bookid);
    }))
      .subscribe((newbook:Book) => {
        console.log('Selected Book', newbook);
        this.newbook = newbook;
        this.pageContent.header.title = newbook.name;
        this.pageContent.header.body = 'Information of your clicked Book';
      });

  }


}