import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-midcompo',
  templateUrl: './midcompo.component.html',
  styleUrls: ['./midcompo.component.css']
})
export class MidcompoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="IoT";
  btnclick(){
    alert("hello from "+this.title);
  }
}
