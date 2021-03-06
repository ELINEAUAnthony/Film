import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { MovieApiProvider } from '../../providers/movie-api/movie-api';
import { NotePage } from '../note/note';
import { UpcomingPage } from '../upcoming/upcoming';
import { IMovie } from '../Interfaces/IMovie';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

export interface IMovie{

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
  scannedCode= null;
  search;
  //data;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public movieApiProvider: MovieApiProvider,
              public barcodeScanner: BarcodeScanner) {
  }


  ionViewDidLoad() {
  
    this.movieApiProvider.getFilmpopular(this.page).subscribe(
      data => {
          this.movies = data.results;
          console.log(this.movies);
   })
   
  }

  filtre(theSearch: string) {
    this.page = 1;
    if(theSearch != ""){
      this.search = theSearch;
      let res = this.movieApiProvider.searchMovies(this.search,this.page);
      console.log(res)
      res.subscribe(
        data =>{
          this.movies = data.results;
        },
        error =>{
          console.log(error);
        }
      )
    }else{
      this.movieApiProvider.getFilmpopular(this.page).subscribe(
        data => {
            this.movies = data.results;
            console.log(this.movies);
     })   
    }
  }


  goToDetail(movie:IMovie){
    console.log(movie.id);
    let data = {
      id:movie.id
    }
    this.navCtrl.push(DetailPage, data);

  }

  goToNote(){
    this.navCtrl.push(NotePage);
  }

  goToUpComing(){
    this.navCtrl.push(UpcomingPage)
  
  }

  doInfinite(infiniteScroll) {
    this.page++;
    setTimeout(() => {
      this.movieApiProvider.getFilmpopular(this.page).subscribe((data => {
        let newlist = data.results;
        newlist.forEach((movie)=>{
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


