import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { OccupationService, ColonistService } from '../shared/services';
import { IOccupation, Colonist } from '../shared/models';
import { NgForm } from '@angular/common';

@Component({
 moduleId: module.id,
 selector: 'app-register',
 templateUrl: 'register.component.html',
 styleUrls: ['register.component.css'],
 providers: [OccupationService, ColonistService],
 directives: [ROUTER_DIRECTIVES]
})
export class RegisterComponent implements OnInit {

  public NO_OCCUPATION_SELECTED: string;
  public occupations: IOccupation[];
  public colonist: Colonist;

 constructor(
   private router: Router,
   private colonistService: ColonistService,
   private occupationService: OccupationService
 ) {
   this.NO_OCCUPATION_SELECTED = '(none)';
 }

 ngOnInit() {
   this.colonist = new Colonist( null, null, this.NO_OCCUPATION_SELECTED );
   this.occupationService.getJobs().then(( jobs )=>{ this.occupations = jobs
   });

 }
 onSubmit(event): void {
   this.colonistService.createColonist(this.colonist)
          .then( (colonist) => {
            this.router.navigate(['/encounters']),
        sessionStorage.setItem('sessionColonist', colonist.id)
      } );        }

 get noOccupation() : boolean {
   return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
 }

}
