import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from 'protractor';
import { Speaker } from '../models/speaker-model';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  private sessionsURL = 'http://localhost:8080/api/v1/sessions';

  private speakersURL = 'http://localhost:8080/api/v1/speakers';

  constructor(private httpClient: HttpClient) { }

  getSessions(): Observable<Session[]>{
    return this.httpClient.get<Session[]>(this.sessionsURL);
  }

  getSpeakers(): Observable<Speaker[]>{
    return this.httpClient.get<Speaker[]>(this.speakersURL);
  }

}
