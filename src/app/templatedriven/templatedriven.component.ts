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

  

  // contactForm: { value: any; };
  
  // contact:contact;

  constructor() { }

  ngOnInit() {

    // this.contact = { 
      
    //   firstname:"",
    //   lastname:"",
    //   email:"",
    //   password:"",
    //   cpassword:"",
    // };
    
  }

  // onSubmit(contactForm) {
  //   console.log(this.contactForm.value);
  // }

}


// export class contact {
//   firstname:string;
//   lastname:string;
//   email:string;
//   password:string;
//   cpassword:string;
// } 
