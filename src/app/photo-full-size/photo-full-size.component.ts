import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryPageComponent } from './../gallery-page/gallery-page.component';
import {pictures} from '../pictures';


@Component({
  selector: 'app-photo-full-size',
  templateUrl: './photo-full-size.component.html',
  styleUrls: ['./photo-full-size.component.css']
})
export class PhotoFullSizeComponent implements OnInit {
	photo;

  constructor(private gall:GalleryPageComponent, private route: ActivatedRoute) {
  	console.log(gall.listOfPictures);
  }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
      this.photo = pictures[+params.get('photoId')];
    });
  }
//this.gall.listOfPictures
}
