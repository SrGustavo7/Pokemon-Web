import { Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
// modelo creado
import {ContactForm} from '../../models/contactForm';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  CorreoModel = new ContactForm();


  constructor() { }
  onSubmit(): any{
    console.log(this.CorreoModel);
  // Guardo el objeto como un string
    localStorage.setItem('datos', JSON.stringify(this.CorreoModel));
   }
  ngOnInit(): void {
  }

}


