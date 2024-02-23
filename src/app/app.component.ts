import { Component } from '@angular/core';
import { ServiceInfo } from './models/service-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servicesList = [
    {
      name:'All Characters',
      route:'/api/characters',
      params: null
    },
    {
      name:'Character By Id',
      route:'/api/character/:id',
      params: {
        key: ':id',
        value: '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8'
      }
    },
    {
      name:'Hogwats Students',
      route:'/api/characters/students',
      params: null
    },
    {
      name:'Hogarts Staff',
      route:'/api/characters/staff',
      params: null
    },
    {
      name:'Characters in a House',
      route:'/api/characters/house/',
      params: {
        key: ':house',
        value: 'gryffindor'
      }
    },
    {
      name:'All Spells',
      route:'/api/spells',
      params: null
    }
  ]
  
}
