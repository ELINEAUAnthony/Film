import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FavoritePage } from '../pages/favorite/favorite';
import { DetailPage } from '../pages/detail/detail';
import { MorePage } from '../pages/more/more';
import { FilmPage } from '../pages/film/film';
import { MovieApiProvider } from '../providers/movie-api/movie-api';
import { IonicStorageModule } from '@ionic/storage';
import { NotePage } from '../pages/note/note';
import { UpcomingPage } from '../pages/upcoming/upcoming';


@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    DetailPage,
    MorePage,
    FilmPage,
    TabsPage,
    NotePage,
    UpcomingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilmPage,
    FavoritePage,
    DetailPage,
    MorePage,
    TabsPage,
    NotePage,
    UpcomingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieApiProvider
  ]
})
export class AppModule {}
