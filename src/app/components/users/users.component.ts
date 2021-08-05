import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  showExtended: boolean = true
  loaded: boolean = false
  enableAdd: boolean = true
  showUserForm: boolean = false

  constructor() { }
    
  ngOnInit() {
    
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 70,
          address: {
              street: '50 Main St',
              city: 'Boston',
              state: 'MA',
          },
          isActive: true,
          registered: new Date('08/05/2021 08:30:00'),
          hide: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
              street: '20 School St',
              city: 'Lynn',
              state: 'MA',
          },
          isActive: false,
          registered: new Date('07/31/2019 11:30:00'),
          hide: true
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
              street: '55 Mill St',
              city: 'Miami',
              state: 'FL',
          },
          isActive: true,
          registered: new Date('03/27/2020 06:45:00'),
          hide: true
        }
      ]

      this.loaded = true
    
    

  }

  addUser(user: User) {
    this.users.push(user);
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide
  // }

  onSubmit(e: any): any {
    e.preventDefault()
    console.log(123)
  }

  fireEvent(e: any): any {
    console.log(e.target.value)
  }
 
}
