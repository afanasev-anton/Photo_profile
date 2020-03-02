import { Component, OnInit } from '@angular/core';
import {pictures} from '../pictures';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
	listOfPictures = pictures;

  constructor() { }

  ngOnInit(): void {
  }

}
