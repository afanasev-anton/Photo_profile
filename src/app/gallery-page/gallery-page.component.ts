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

  showList(str){
    if (str == "") {
      this.listOfPictures = pictures;
    } else {
      this.listOfPictures = [];
      switch (str) {
        case "Nature":
          for (var i = 0; i < pictures.length; i++) {
            if (pictures[i].cat == "Nature") {
              this.listOfPictures.push(pictures[i]);
            }
          }
          break;
        case "City":
          for (var i = 0; i < pictures.length; i++) {
            if (pictures[i].cat == "City") {
              this.listOfPictures.push(pictures[i]);
            }
          }
          break;
        case "Portrait":
          for (var i = 0; i < pictures.length; i++) {
            if (pictures[i].cat == "Portrait") {
              this.listOfPictures.push(pictures[i]);
            }
          }
          break;
      }
    }
  }
  getlistOfPictures(){
    return this.listOfPictures;
  }
// PLACEHOLDER FOR SORTING FUNCTION
  sortByDate(direction){ }

}
