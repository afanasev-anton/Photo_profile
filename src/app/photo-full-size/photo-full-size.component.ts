import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { GalleryResizeService } from '../gallery-resize.service';

//import {pictures} from '../pictures';



@Component({
  selector: 'app-photo-full-size',
  templateUrl: './photo-full-size.component.html',
  styleUrls: ['./photo-full-size.component.css']
})
export class PhotoFullSizeComponent implements OnInit {
	photo;
  list;

  constructor(private route: ActivatedRoute,private lst: GalleryResizeService) {
    this.list = lst.getList();
  }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
      this.photo = this.list[+params.get('photoId')];
    });
  }


	getDate(obj){
    var str = "";
    var d = new Date(obj.takenDate);
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "numeric"
    };
    return d.toLocaleString('de-AT',options);
  }

  getIndexN(obj){
    var i = this.list.indexOf(obj)+1;
    if (i == this.list.length) {
      i = 0;
    }
    return i;
  }
  getIndexP(obj){
    var i = this.list.indexOf(obj)-1;
    if (i < 0) {
      i = this.list.length-1;
    }
    return i;
  }
}