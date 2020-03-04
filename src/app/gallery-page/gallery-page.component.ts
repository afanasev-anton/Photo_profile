import { Component, OnInit } from '@angular/core';
import {pictures} from '../pictures';
import { GalleryResizeService } from '../gallery-resize.service';


@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
	listOfPictures = pictures;
	/*types = [];
	locations = [];*/

  constructor(private lst: GalleryResizeService) {
    lst.addToList(pictures);
    /*for (var i = 0; i < this.listOfPictures.length; i++) {
        if (!this.types.includes(this.listOfPictures[i].cat)) {
          this.types.push(this.listOfPictures[i].cat);
        }
    }

    for (var i = 0; i < this.listOfPictures.length; i++) {
        if (!this.types.includes(this.listOfPictures[i].location)) {
          this.types.push(this.listOfPictures[i].location);
        }
    }*/
  }

  ngOnInit(): void {
  }

  showList(str){
    if (str == "all") {
      
      this.listOfPictures = pictures;
      this.lst.addToList(this.listOfPictures);
    } else {
      this.listOfPictures = [];

      switch (str) {
        case "Nature":
          for (var i = 0; i < pictures.length; i++) {
            if (pictures[i].cat == "Nature") {
              this.listOfPictures.push(pictures[i]);
            }
          }
          this.lst.addToList(this.listOfPictures);
          break;
        case "City":
          for (var i = 0; i < pictures.length; i++) {
            if (pictures[i].cat == "City") {
              this.listOfPictures.push(pictures[i]);
            }
          }
          this.lst.addToList(this.listOfPictures);
          break;
        case "Portrait":
          for (var i = 0; i < pictures.length; i++) {
            if (pictures[i].cat == "Portrait") {
              this.listOfPictures.push(pictures[i]);
            }
          }
          this.lst.addToList(this.listOfPictures);
          break;
      }
    }
  }
  
// PLACEHOLDER FOR SORTING FUNCTION
  sortByDate(direction){
    switch (direction) {
      case "up":
        var arr = this.listOfPictures;
        for (var i = 0; i < arr.length; i++) {
          arr[i].takenDate = new Date(arr[i].takenDate);
        }
        arr.sort(function(a, b){return a.takenDate - b.takenDate});
        console.log(arr);
        this.listOfPictures = arr;
        break;
      case "down":
        var arr = this.listOfPictures;
        for (var i = 0; i < arr.length; i++) {
          arr[i].takenDate = new Date(arr[i].takenDate);
        }
        arr.sort(function(a, b){return b.takenDate - a.takenDate});
        console.log(arr);
        this.listOfPictures = arr;
        break;
    }
  }

}
