import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-submissionform',
  templateUrl: './submissionform.component.html',
  styleUrls: ['./submissionform.component.css']
})
export class SubmissionformComponent implements OnInit {

  favoriteColorControl = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

}
