import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMovie } from '../Interfaces/IMovie';
import { FavoriteMovieProvider } from '../../providers/favorite-movie/favorite-movie';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

export interface IMovie{

}

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  movie: IMovie;
  favorite: boolean =false;
  isFavorite:boolean=false;
  qrData = null;
  createdCode = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private favoriteMovieProvider : FavoriteMovieProvider,
              public barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    this.movie = this.navParams.data;
    this.favoriteMovieProvider
      .isFavoriteMovie(this.movie)
      .then (value => (this.favorite = value));
  }

  toggleFavorite(): void {
    this.isFavorite =!this.isFavorite;
    this.favoriteMovieProvider.toogleFavoriteMovie(this.movie);
  }

  createCode(){
    this.createdCode = this.movie.id.toString();
    console.log(this.movie.id.toString())
  }

  

}
