import { Component }  from "@angular/core"

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    //template: '<h2>John Doe</h2>'
    // styles: [`
    //     h2 {
    //         color: blue
    //     }
    // `]
})

export class UserComponent {
    //properties
    firstName = "John";
    lastName = "Smith";
    age = 30;
    address= {
        street: "50 Main St.",
        city: "Boston",
        state: "MA"
    };

    //Methods
    constructor() {
       
    }

    showAge() {
        return this.age + 2
    }
}