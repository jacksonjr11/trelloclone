import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModel } from '../models/card_model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  api: string = 'http://localhost:3000/cards';
  constructor(private http: HttpClient) { }

  infoCard() : Observable<CardModel[]> {
    return this.http.get<CardModel[]>(`${this.api}`);
  }
}
