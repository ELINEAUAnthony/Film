import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { MovieApiProvider } from '../../providers/movie-api/movie-api';

interface IMovie {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public movieApiProvider: MovieApiProvider) {
  }


  ionViewDidLoad() {
   
   for(let i=1;i<20;i++){
      this.getFilm(i)
     
   }
   
    console.log(this.movies);
  }

  goToDetail(movie:IMovie){
    this.navCtrl.push(DetailPage, movie);
  }
  getFilm(id){
    /*this.movieApiProvider.getFilm(id)
    .then(data => {
      data.picture= "https://image.tmdb.org/t/p/w500/44sKJOGP3fTm4QXBcIuqu0RkdP7.jpg"
      this.movies.push(data);
    });*/

    this.movieApiProvider.getFilm(id).subscribe(
      (data) => {
          data.title = "original_title";
          data.picture = "{{'https://image.tmdb.org/t/p/w500/'+ backdrop_path}}";
          this.movies.push(data);


       
        console.log(data);
      })

  }  

}
  


