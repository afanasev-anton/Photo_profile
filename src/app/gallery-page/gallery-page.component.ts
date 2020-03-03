import { Component, OnInit } from '@angular/core';
import {pictures} from '../pictures';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
	listOfPictures = pictures;
	types = [];
	locations = [];

  constructor() {
  for (var i = 0; i < this.listOfPictures.length; i++) {
      if (!this.types.includes(this.listOfPictures[i].cat)) {
        this.types.push(this.listOfPictures[i].cat);
      }
  }

  for (var i = 0; i < this.listOfPictures.length; i++) {
      if (!this.types.includes(this.listOfPictures[i].location)) {
        this.types.push(this.listOfPictures[i].location);
      }
  }
}

  ngOnInit(): void {
  }

}
