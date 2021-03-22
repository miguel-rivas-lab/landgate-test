import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PersonModel } from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() {
  }

  static mockPeopleList = [
    { firstName: 'John', lastName: 'Doe', age: '21', workTitle: 'Wanna be Signer' },
    { firstName: 'Jane', lastName: 'Burada', age: '22', workTitle: 'Signer' },
    { firstName: 'Bob', lastName: 'Barker', age: '80', workTitle: 'TV Host' },
    { firstName: 'Zahir', lastName: 'Aslam', age: '24', workTitle: 'Wanna be Signer' },
    { firstName: 'Sandra', lastName: 'Karimova', age: '23', workTitle: 'Wanna be Signer' },
    { firstName: 'Asuman', lastName: 'Yangibayeva', age: '62', workTitle: 'Signer' },
    { firstName: 'Vuqar', lastName: 'Resulov', age: '800', workTitle: 'TV Host' },
    { firstName: 'Zeynep', lastName: 'Salmargn', age: '241', workTitle: 'Wanna be Signer' },
    { firstName: 'Yesim', lastName: 'Kerimov', age: '1', workTitle: 'Wanna be Signer' },
    { firstName: 'Arzu', lastName: 'Yilmaz', age: '52', workTitle: 'Signer' },
    { firstName: 'Pervane', lastName: 'Qehremanova', age: '10', workTitle: 'TV Host' },
    { firstName: 'Esmaye', lastName: 'Ahmed', age: '18', workTitle: 'Wanna be Signer' },
  ];

  getPeople(): Observable<PersonModel[]> {
    // TODO: Finish this implementation using the data from mockPeopleList
    // of(true).pipe(delay(100))
    return null;
  }
}
