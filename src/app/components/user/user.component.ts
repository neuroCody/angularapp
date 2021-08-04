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
    firstName: string
    lastName: string
    age: number
    address: any
    

    foo: any
    hasKid: boolean
    numberArray: number[]
    stringArray: string[]
    mixedArray: any[]
    myTuple: [string, number, boolean]
    unusable: void
    u: undefined
    n: null

    //Methods
    constructor() {
        this.firstName = 'John'
        this.lastName = 'Doe'
        this.age = 30

        this.address = {
            street: '50 Mian St',
            city: 'Boston',
            state: 'MA',
        }

        this.hasKid = true
        this.numberArray = [1,2,3]
        this.stringArray = ['this', 'is', 'an', 'array', 'of', 'strings']
        this.mixedArray = [true, undefined, 1, 'hello']
        this.myTuple = ['hello', 2, true]
        this.unusable = undefined
        this.u = undefined
        this.n = null
        console.log(this.addNumbers(2, 3))
    }

    showAge() {
        return this.age + 2
    }

    addNumbers(num1: number, num2: number): number {
        return num1 + num2 
    }
}