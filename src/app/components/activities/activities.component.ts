import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card_model';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  data: any[] = [];
  tasks: any[] = [];

  constructor(private service: CardService) { }

  ngOnInit():void {
    this.requestCard();
  }

  requestCard(){
    return this.service.infoCard().subscribe((data: CardModel[]) => {
      console.log(data)
      this.data = data;
    });
  }
}
