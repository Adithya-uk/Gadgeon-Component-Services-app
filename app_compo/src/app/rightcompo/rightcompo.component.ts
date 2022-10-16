import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightcompo',
  templateUrl: './rightcompo.component.html',
  styleUrls: ['./rightcompo.component.css']
})
export class RightcompoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Innovative";
  btnclick(){
    alert("hello from "+this.title);
  }
}
