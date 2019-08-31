import { ISignup } from './../models/signup';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  userData = {};
  constructor() { }
}
