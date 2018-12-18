import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MovieApiProvider {
  private Url = 'https://api.themoviedb.org/3/movie/popular?'


  private httpOptions = {
    headers : new HttpHeaders({
      "content-type": "application/js"
    }),
    params:{
      "api_key" : "3af9c524dd7e2699f76bded125a10ba9",
      "language": "fr-FR",
      "Popular": "string"
    }
  }
  constructor(public http: HttpClient) {
    console.log('Hello MovieApiProvider Provider');
  }
  public getFilm():Observable<any>{
    return this.http.get<any>(this.Url ,this.httpOptions);
  }
}
