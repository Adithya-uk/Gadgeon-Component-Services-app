import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // title="banglore"
  // today=Date()
  user={
    id:100,
    name:"kannaappi",
    dob:'10-10-2022',
    salary:35000
  }
}
