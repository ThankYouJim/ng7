import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ],
})
export class HomeComponent implements OnInit {
  users: any[];

  constructor(private data: DataService) {}

  ngOnInit() {
    // this.data.getUsers().subscribe(data => {
    //   this.users = Object.values(data).map(user => {
    //     const [ firstname, lastname ] = user.name.split(' ');
    //     return { ...user, firstname, lastname };
    //   });
    //   console.log(this.users);
    // });
    this.users = [
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
          geo: {
            lat: '-68.6102',
            lng: '-47.0653',
          },
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications',
        },
        firstname: 'Clementine',
        lastname: 'Bauch',
      },
    ];
    // this.users = [];
  }
}
