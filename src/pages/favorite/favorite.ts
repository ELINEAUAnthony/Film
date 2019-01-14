import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoriteMovieProvider } from '../../providers/favorite-movie/favorite-movie';
import { IMovie, DetailPage } from '../detail/detail';
import { FilmPage } from '../film/film';


@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  favoriteMovies: IMovie[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private favoriteMovieProvider: FavoriteMovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
  }

  ionViewWillEnter() {
    this.initFavoriteMovies();
  }

  private initFavoriteMovies() {
    this.favoriteMovieProvider
      .getFavoriteMovies()
      .then(favs => (this.favoriteMovies = favs))
      }
      
      findMovie() {
        this.navCtrl.push(FilmPage);
      }
     
      goToDetail(movie: IMovie) {
        this.navCtrl.push(DetailPage, movie);
      }
}

