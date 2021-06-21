import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient,HttpResponse } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private bookUrl='http://localhost:3000/api/books'

  constructor(private http:HttpClient) { }
  getBooks():Promise< void|Book[]> {

    return this.http.get(this.bookUrl)
    .toPromise()
    .then(response=>response as Book[])
    .catch(this.handleError);

  }

  getSingleBook(bookId:string):Promise<void|Book>{
    return this.http.get(this.bookUrl+'/'+bookId)
      .toPromise()
      .then(Response=>Response as Book)
      .catch(this.handleError);}

  createBook(newbook: Book): Promise<void | Book>{
        return this.http.post(this.bookUrl, newbook)
          .toPromise()
          .then(response => response as Book)
          .catch(this.handleError);
        }

  deletebook(bookId:string):Promise<void|Book>{
          return this.http.get(this.bookUrl+'/delete/'+bookId)
            .toPromise()
            .then(Response=>Response as Book)
            .catch(this.handleError);

  
  }
  updateBook(updateBookData: Book,bookId: string): Promise<void | Book>{
    return this.http.put(this.bookUrl+'/'+bookId, updateBookData)
      .toPromise()
      .then(response => response as Book)
      .catch(this.handleError);
    }


  private handleError(error:any){ 
    console.log("error"); 
  }
}