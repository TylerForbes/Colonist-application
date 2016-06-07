import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { EncountersService } from '../shared/services';
import { Encounter } from '../shared/models';

@Component({
 moduleId: module.id,
 selector: 'app-register',
 templateUrl: 'encounters.component.html',
 styleUrls: ['encounters.component.css'],
 providers: [EncountersService],
 directives: [ROUTER_DIRECTIVES]
})
export class EncountersComponent implements OnInit {

  public encounters: Encounter[];

 constructor(
   private router: Router,
   private encountersService: EncountersService
 ) {}

 ngOnInit() {
   this.encountersService.getEncounter().then( result =>
      this.encounters = result );
 }

}
