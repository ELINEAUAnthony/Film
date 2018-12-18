import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { MovieApiProvider } from '../../providers/movie-api/movie-api';


interface IMovie {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  language: string;
}

@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {
  film:any;
  movies=[];
  myFilm;
  page=1
  constructor(public navCtrl: NavController, public navParams: NavParams,public movieApiProvider: MovieApiProvider) {
  }


  ionViewDidLoad() {
  
    this.movieApiProvider.getFilm(this.page).subscribe(
      data => {
        
          
          this.movies = data.results;
   })
   
   console.log(this.movies)
  }

  goToDetail(movie:IMovie){
    this.navCtrl.push(DetailPage, movie);
  }
  doInfinite(infiniteScroll) {
    this.page++;
    setTimeout(() => {
      this.movieApiProvider.getFilm(this.page).subscribe((data => {
        let newlist = data.results;
        newlist.forEach((movie)=>{
          this.movies.push(movie);
        });
      }));
      infiniteScroll.complete();
    }, 500);
  }


}


