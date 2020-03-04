import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryResizeService {
	list = [];

  constructor() {}

  addToList (arr){
  	this.list = arr;
  }

  getList(){
  	return this.list;
  }
}
