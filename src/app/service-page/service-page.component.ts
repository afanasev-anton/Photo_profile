import { Component, OnInit } from '@angular/core';
import { offers } from '../offer';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
offers = offers;
items= [];

info = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  date: new FormControl(''),
  email: new FormControl(''),
  message: new FormControl('')
});

  constructor() { }

	removeItem(i){
  	this.items.splice(i,1);
};
	clearCart(){
  	this.items= [];
  	return this.items;
};
	addMore(offers){
    offers.qtty ++;

  };

  	addtoCart(offers){
    if(offers.qtty == 0){
      offers.qtty++;
      this.items.push(offers);
    }else {
      for(let item of this.items){
        (item.name == offers.name) ? item.qtty++ : null ;
      }
    }

  	};

  	addLess(offers,i){
    if (offers.qtty ==1){
      offers.qtty --;
      this.items.splice(i,1)
      return this.items;
    }else {
      offers.qtty --;
      return this.items;
    }
  	};

  	calcTotal() {
    let total = 0;
    for(let item of this.items){
      total = total + (item.qtty * item.price);
      // total += (item.qtty * item.price);
    }
    return (total+ "$")
};



  ngOnInit(): void {
  }

}
