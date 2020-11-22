import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/app/services/conference.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers: any;
  images: string[];
  constructor(private conferenceService:ConferenceService) {
    this.images = ['../../../assets/images/1.png',
    '../../../assets/images/2.webp',
    '../../../assets/images/3.jpg'];
   }

  ngOnInit(): void {
    this.getSpeakers();
  }

  getSpeakers(){
    this.conferenceService.getSpeakers().subscribe(response => {
      this.speakers = response;
      console.log(this.speakers);
    });
  }
}
