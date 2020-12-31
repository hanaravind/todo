import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';
import { ProfileService } from '../account/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  contactForm: FormGroup;
  isLoggedIn = false;

  constructor(private formBuilder: FormBuilder, private setProfile: ProfileService) { }

  ngOnInit(): void {
    this.createContactForm()
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      username: ['', Validators.required],  
      password: ['', Validators.required],
    });
  }

  get field() { return this.contactForm.controls; }

  
  onSubmit() {
    this.isLoggedIn = true
    if (this.contactForm.invalid) {
      return;
    }
    this.setProfile.setName(this.contactForm.value.username, this.isLoggedIn)
  }

}
