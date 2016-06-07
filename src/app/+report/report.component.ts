import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from '@angular/router';
import { EncountersService, AliensService } from '../shared/services';
import { Encounter, IAliens } from '../shared/models';
import { NgForm } from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'],
  providers: [EncountersService, AliensService],
  directives: [ROUTER_DIRECTIVES],
})

export class ReportComponent implements OnInit {

  public NO_ALIEN_SELECTED: string;
  public aliens: IAliens[];
  public encounters: Encounter;
  public sessionColonist: string;
  public date: string;


  constructor(
    private router: Router,
    private aliensService: AliensService,
    private encountersService: EncountersService
  ) {
    this.NO_ALIEN_SELECTED = '(none)';
  }

  ngOnInit() : void {

    this.sessionColonist = sessionStorage.getItem('sessionColonist');
    this.date = Date().slice(0,15);
    this.aliensService.getAliens().then( alien => this.aliens = alien );
    this.encounters = new Encounter(this.NO_ALIEN_SELECTED, this.date, '', this.sessionColonist);
  }

  onSubmit(event) : void {
    this.encountersService.createEncounter(this.encounters)
      .then( encounters => this.router.navigate(['/encounters']))
  }
  get noAlien() : boolean {
    return this.encounters.atype === this.NO_ALIEN_SELECTED
  }

}
