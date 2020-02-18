import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {
  public userdetails:any;
  public batchCode:any;
  public showUser:any=[];
  public slicedArray:any=[];
   show:boolean=false;
   isclicked =false;
  j:number=0;
  public userUrl:any=[];
  userdetailsForm = new FormGroup(
    {
      contentId: new FormControl(''),
      userName: new FormControl('')
    }
  )
  public slicedUserUrl: any=[];
  index: any=0;
  constructor(private userdetailsservice:UserdetailsService) {
   
   }

  ngOnInit(): void {
   
  }
  getUserDetails(){
this.show =!this.show;
   const content_id = this.userdetailsForm.value.contentId;
      const user_name = this.userdetailsForm.value.userName;
      this.userdetailsservice.getdetails(content_id)
      .subscribe((data:any) => {this.userdetails = data;  
            for (let i in this.userdetails.users) { 
       
          if(this.userdetails.users[i].username == this.userdetailsForm.value.userName)
          {
            this.batchCode = this.userdetails.users[i].batchcode;  
          }        
      }

      for(let k in this.userdetails.users){
        if(this.batchCode==this.userdetails.users[k].batchcode){   
  
           if(this.userdetails.users[k].username!= this.userdetailsForm.value.userName){  
            this.showUser[this.j]=this.userdetails.users[k].username;
            this.userUrl[this.j]=this.userdetails.users[k].useravatar; 
            this.j=this.j+1;
           }
      }

   }
     this.slicedArray.push(this.showUser.slice(0,2));
        this.slicedUserUrl.push(this.userUrl.slice(0,2));

      });  
      this.isclicked=true;
  
  }

  reset(){
    this.show=false;
    this.isclicked=false;
        this.userdetailsForm.reset();
        this.showUser=[];
        this.batchCode='';
        this.j=0;
        this.slicedArray=[];
        this.userUrl=[];
        this.slicedUserUrl=[];  
      
  }
}
       
