import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

info = new FormGroup({
  fullName: new FormControl(''),
  options: new FormControl(''),
  email: new FormControl(''),
  message: new FormControl('')
});
  constructor() { }

  ngOnInit(): void {
  }

}
