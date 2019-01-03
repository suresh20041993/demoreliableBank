import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgForm} from  '@angular/forms';
import { LeadcreateserviceService } from './leadcreateservice.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
  

@Component({
  selector: 'app-leadcreation',
  templateUrl: './leadcreation.component.html',
  styleUrls: ['./leadcreation.component.scss']
})

export class LeadcreationComponent implements OnInit {
   
  author: any;
  output: string;
  constructor(private LeadcreateserviceService: LeadcreateserviceService,public router: Router) { }

  ngOnInit() {
  }




  onCreate(leadType,leadUserName)
  {
      console.log(leadType);
      console.log(leadUserName);
      const userDetails = this.LeadcreateserviceService.getuserLoginDetails();
     console.log(userDetails.uid);
      const userId = userDetails.uid;
      console.log(userId);
    this.LeadcreateserviceService.Create(leadType,leadUserName,userId).subscribe((data : any)=>
      {

        if(data.code==200)
        {
          this.output='Lead Created SucessFully';
          this.router.navigate(['/layout/dashboard']);
          

        }
        else if(data.code==300)
        {
          this.output=' ';

        }
        else
        {
          this.output='';


        }
     
      });
  

  }


}