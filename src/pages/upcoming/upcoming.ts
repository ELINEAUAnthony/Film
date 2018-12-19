import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { MovieApiProvider } from '../../providers/movie-api/movie-api';
import { NotePage } from '../note/note';
import { FilmPage } from '../film/film';


interface IMovie {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  language: string;
}

@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {
  film:any;
  movies=[];
  myFilm;
  page=1
  constructor(public navCtrl: NavController, public navParams: NavParams,public movieApiProvider: MovieApiProvider) {
  }

//quand ma page se charge je recupere tous les objets dans ma fonction data
  ionViewDidLoad() {
  
    this.movieApiProvider.getFilmupcoming(this.page).subscribe(
      data => {
          this.movies = data.results;
          console.log(this.movies);
   })
   
   
  }
  //bouton pour aller sur detail
  goToDetail(movie:IMovie){
    this.navCtrl.push(DetailPage, movie);
  }
  //bouton pour aller sur note
  goToNote(){
    this.navCtrl.push(NotePage);
  }

  goToPopular(){
    this.navCtrl.push(FilmPage)
  }
 
  goToUpComing(){
    this.navCtrl.push(UpcomingPage)
  }
  //scroll pour faire défiler les pages
  doInfinite(infiniteScroll) {
    //pour incrementer la page
    this.page++;
    setTimeout(() => {
      this.movieApiProvider.getFilmupcoming(this.page).subscribe((data => {
        let NextPage = data.results;
        NextPage.forEach((movie)=>{
          this.movies.push(movie);
        });
      }));
      infiniteScroll.complete();
    }, 500);
  }

}


