import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneService {
  getAuthors() {
    return ['ng g c one', 'ng g s one', 'put "service: OneService" in component.ts inside constructors parameter '];
  }
  constructor() { }
}
