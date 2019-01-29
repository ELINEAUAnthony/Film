import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMovie } from '../Interfaces/IMovie';
import { FavoriteMovieProvider } from '../../providers/favorite-movie/favorite-movie';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MovieApiProvider } from '../../providers/movie-api/movie-api';

export interface IMovie{

}

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  movie: IMovie;
  isFavorite:boolean=false;
  qrData = null;
  createdCode = null;
  favoriteMovies: IMovie[] = []

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private favoriteMovieProvider : FavoriteMovieProvider,
              public barcodeScanner: BarcodeScanner,
              public movieApiProvider: MovieApiProvider) {
  }

  ionViewDidLoad() {
    this.movieApiProvider.getFilmbyid(this.navParams.get('id')).subscribe(
      data => {
          this.movie = data;
          console.log(this.movie);

          this.favoriteMovieProvider
          .isFavoriteMovie(this.movie)
          .then (value => (this.isFavorite = value));
   });

  }

  toggleFavorite(): void {
    this.isFavorite =!this.isFavorite;
    this.favoriteMovieProvider.toogleFavoriteMovie(this.movie);
  }

  createCode(){
    this.createdCode = this.navParams.get('id').toString();
    console.log(this.movie.toString())
  }

}
