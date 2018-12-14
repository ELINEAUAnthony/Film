import { Component } from '@angular/core';


import { FavoritePage } from '../favorite/favorite';
import { MorePage } from '../more/more';
import { FilmPage } from '../film/film';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FilmPage;
  tab2Root = FavoritePage;
  tab3Root = MorePage;
  

  constructor() {

  }
}
