import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  tittle: string = 'Em andamento'

  constructor() { }

  ngOnInit(): void {
  }

}
