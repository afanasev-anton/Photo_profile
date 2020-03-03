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
comment= [];

info = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  date: new FormControl(''),
  email: new FormControl(''),
  message: new FormControl('')
});
adding = new FormGroup({
  message: new FormControl(''),
  options: new FormControl('')
});

  constructor() { }

  addtoCart(offer){
    if(offer.qtty == 0){
      offer.qtty++;
      this.items.push(offer);
      console.log(this.items);
    }else {
      for(let item of this.items){
        (item.name == offer.name) ? item.qtty++ : null ;
        console.log(this.items);
      }
    }

    };

	removeItem(i){
    this.items[i].qtty = 0;
  	this.items.splice(i,1);

};
	clearCart(){
  	this.items= [];
    for(let item of this.offers){item.qtty = 0}
    console.log(this.offers);
};
	addMore(offers){
    offers.qtty ++;

  };

    getItems(){
    return this.items;
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



   ngOnInit() {
    this.items = this.getItems();
  }
  onSubmit(){

  let update = this.adding.value;
  this.comment.push(update);
  console.log(update);
  this.adding.reset();
}
}
