import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Encounter } from '../models';

@Injectable()
export class EncountersService {

  encounterUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters'

 constructor(private http: Http) {}

 getEncounter(): Promise<Encounter[]> {

   return this.http.get(this.encounterUrl)
          .toPromise()
          .then( response => response.json().encounters )
          .catch( this.handleError )

 }

 createEncounter(encounter: Encounter): Promise<Encounter> {

   let headers = new Headers({ 'Content-Type': 'application/json'});
   let body = JSON.stringify({ encounter })

   return this.http.post(this.encounterUrl, body, { headers })
    .toPromise()
    .then( response => response.json().encounter )
    .catch(this.handleError)

 }

 private handleError(error: any) {
   console.log('There was an error, error');
   return Promise.reject(error.message || error);
 }

}
