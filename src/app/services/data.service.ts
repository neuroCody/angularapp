import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs'

import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[]
  data: Observable<any>

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('08/05/2021 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@yahoo.com',
        isActive: false,
        registered: new Date('07/31/2019 11:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('03/27/2020 06:45:00'),
        hide: true
      }
    ]
   }

   getData() {
     this.data = new Observable(observer => {
       setTimeout(() => {
          observer.next(1)
        }, 1000)

        setTimeout(() => {
          observer.next(2)
        }, 2000)

        setTimeout(() => {
          observer.next(3)
        }, 3000)

        setTimeout(() => {
          observer.next(4)
        }, 4000)

     })

     return this.data
   }

   getUsers(): Observable<User[]> {
     return of(this.users)
   }

   addUser(user: User) {
     this.users.unshift(user)
   }

}
