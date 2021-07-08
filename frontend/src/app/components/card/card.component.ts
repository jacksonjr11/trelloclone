import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card_model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
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
