import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MovieApiProvider {
  private Urlpopular = 'https://api.themoviedb.org/3/movie/popular?'
  private Urlrated = 'https://api.themoviedb.org/3/movie/top_rated?'
  private Urlupcoming ='https://api.themoviedb.org/3/movie/upcoming?'
  private Urlid = 'https://api.themoviedb.org/3/movie/'

  Page = 1
  

  private httpOptions = {
    headers : new HttpHeaders({
      "content-type": "application/js"
    }),
    params:{
      "api_key" : "3af9c524dd7e2699f76bded125a10ba9",
      "language": "fr-FR",
      "page": this.Page.toString(),
      
      
    }
  }
  constructor(public http: HttpClient) {
    console.log('Hello MovieApiProvider Provider');
  }
  public getFilmbyid(id):Observable<any>{
    this.httpOptions.params.page = "1";
    return this.http.get(this.Urlid+id,this.httpOptions)
  }
  public getFilmpopular(iDpage):Observable<any>{
    this.httpOptions.params.page = iDpage.toString()
    return this.http.get(this.Urlpopular ,this.httpOptions);
  }
  public getFilmrated(iDpage):Observable<any>{
    this.httpOptions.params.page = iDpage.toString()
    return this.http.get(this.Urlrated ,this.httpOptions);
  }

  public getFilmupcoming(iDpage):Observable<any>{
    this.httpOptions.params.page = iDpage.toString()
    return this.http.get(this.Urlupcoming,this.httpOptions);
  }

}
