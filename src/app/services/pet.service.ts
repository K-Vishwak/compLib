import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Pets } from '../interfaces/pets';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpClient: HttpClient) { }

  getPets() {
    return this.httpClient.
      get('https://petstore.swagger.io/v2/pet/test?status=available').
      pipe(map(res => res), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occured:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}`, error.error);
    }
    return throwError(() => new Error('Something bad happened. Please try again'));
  }

  savePet() {
    const pet = new Pets();
    pet.name = 'Dog';
    pet.age = 10;
    pet.food = 'meat';
    pet.id = 1;
    this.httpClient.get('src/app/interfaces/pets.ts').subscribe(data => {
      console.log(data);
    })
  }
}
