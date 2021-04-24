import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
  
  model: any = {};

  onSubmit() {
    alert('SUCCESS!! \n\n' + JSON.stringify(this.model, null, 4));
    
  }

  constructor() { }

  ngOnInit() {
    
  }

}
