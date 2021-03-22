import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-component',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  // TODO: Include the PersonService and get the list of People
  personas = PeopleService.mockPeopleList;

  constructor() { }

  ngOnInit() { }

}
