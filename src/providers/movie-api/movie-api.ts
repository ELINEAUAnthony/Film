import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MovieApiProvider {
  private Url = 'https://api.themoviedb.org/3/movie/'

  private httpOptions = {
    headers : new HttpHeaders({
      "content-type": "application/js"
    }),
    params:{
      "api_key" : "3af9c524dd7e2699f76bded125a10ba9"
    }
  }
  constructor(public http: HttpClient) {
    console.log('Hello MovieApiProvider Provider');
  }
 /* getFilm(id) {
    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/movie/'+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }*/
  public getFilm(id):Observable<any>{
    return this.http.get<any>(this.Url + id,this.httpOptions);
  }
}
