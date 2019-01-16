import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { MovieApiProvider } from '../../providers/movie-api/movie-api';
import { FilmPage } from '../film/film';
import { UpcomingPage } from '../upcoming/upcoming';
import { IMovie } from '../Interfaces/IMovie';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

export interface IMovie{

}


@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})

export class NotePage {
  film:any;
  movies=[];
  myFilm;
  page=1
  scannedCode = null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public movieApiProvider: MovieApiProvider,
              public barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
  
    this.movieApiProvider.getFilmrated(this.page).subscribe(
      data => {
          this.movies = data.results;
          console.log(this.movies);
   })
   
   
  }
  //bouton pour aller sur detail
  goToDetail(movie:IMovie){
    console.log(movie.id);
    let data = {
      id:movie.id
    }
    this.navCtrl.push(DetailPage, data);

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
      this.movieApiProvider.getFilmrated(this.page).subscribe((data => {
        let NextPage = data.results;
        NextPage.forEach((movie)=>{
          this.movies.push(movie);
        });
      }));
      infiniteScroll.complete();
    }, 500);
  }
  scanCode(movie:IMovie){
    this.barcodeScanner.scan().then(barcodeData=>{
    this.scannedCode = barcodeData.text;
    this.navCtrl.push(DetailPage, {id : barcodeData.text.toString()})
  })
    }
}


