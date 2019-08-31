import { ApiClientService } from './../api-client.service';
import { ISignup } from './../../models/signup';
import { Component, OnInit } from '@angular/core';
import { navOptions } from 'src/app/models/navbar-enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStoreService } from '../data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  enumOptions = navOptions;
  isSignup = true;
  signupForm: FormGroup;
  userExistsError = false;
  invalidCreds = false;

  constructor(private apiClient: ApiClientService, private dataStore: DataStoreService, private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      adminRadio: new FormControl('admin', Validators.required)
    });

    this.signupForm.valueChanges.subscribe((val) => {
      this.userExistsError = false;
      this.invalidCreds = false;
    });
  }

  handleNavigation(action) {
    if (action === this.enumOptions.signup) {
      this.isSignup = true;
    } else {
      this.isSignup = false;
    }
  }

  sendToServer() {
    this.signupForm.markAsTouched();
    if (this.signupForm.invalid) {
      return;
    }
    let serverBody: ISignup = {
      emailId: '',
      password: '',
      role: ''
    }
    if (this.isSignup) {
      serverBody = {
        emailId: this.signupForm.get('email').value,
        password: this.signupForm.get('password').value,
        role: this.signupForm.get('adminRadio').value
      };
      this.apiClient.signUp(serverBody).subscribe((res) => {
        if (res['successflag']) {
          this.dataStore.userData['email'] = this.signupForm.get('email').value;
          this.signupForm.reset();
          this.userExistsError = false;
          this.router.navigate(['/home/app']);
        } else {
          this.userExistsError = true;
        }
      });
    } else {
      serverBody = {
        emailId: this.signupForm.get('email').value,
        password: this.signupForm.get('password').value
      };
      this.apiClient.signIn(serverBody).subscribe((res) => {
        if (res['successflag']) {
          this.dataStore.userData['email'] = this.signupForm.get('email').value;
          this.signupForm.reset();
          this.invalidCreds = false;
          this.router.navigate(['/home/app']);
        } else {
          this.invalidCreds = true;
        }
      });
    }
  }
}
