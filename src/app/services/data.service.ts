import { Injectable } from '@angular/core';
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[]
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

   getUsers(): User[] {
     console.log('Fetching users from service...')
     return this.users
   }

   addUser(user: User) {
     this.users.unshift(user)
   }

}
