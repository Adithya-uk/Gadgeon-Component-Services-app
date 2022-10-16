import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-leftcompo',
  templateUrl: './leftcompo.component.html',
  styleUrls: ['./leftcompo.component.css']
})
export class LeftcompoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Agile";
  btnclick(){
    // alert("hello from "+this.title);
    const service=new myservice();
    service.onclickbtn(this.title);
  }


}
