import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/app/services/conference.service';
import { Session } from 'inspector';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  sessions: any;
  images: string[];
  constructor(private conferenceService: ConferenceService) {
    this.images = ['../../../assets/images/aws-logo.png',
      '../../../assets/images/maven-logo.png',
      '../../../assets/images/springboot-logo.jpg'];
  }

  ngOnInit(): void {
    images:
    this.getSessions();
  }

  getSessions() {
    this.conferenceService.getSessions().subscribe(response => {
      this.sessions = response;
      console.log(this.sessions);
    });
  }

}
