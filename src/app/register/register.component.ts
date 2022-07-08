import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterfaceService } from '../user-interface.service';
import { UserInterface } from './../user-interface';
import { User } from '../user.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User[] = [];
  registeruser!:FormGroup

  displayedColumn=['id','fname','sname','lname','address','role','status','email','password']

  constructor(private userInterface: UserInterface,
    private router: Router ) { }

  ngOnInit(){
    // this.userInterface.getUser().subscribe((users)=>{
    //   console.log(users);
    // });
    this.fetchUser();
    this.registeruser = new FormGroup({
      id:new FormControl('',[Validators.required]),
      fname:new FormControl('',[Validators.required]),
      sname:new FormControl('',[Validators.required]),
      lname:new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),

    })
  }
  fetchUser(){
    this.userInterface
    .getUser()
    .subscribe((data)=>{
      // this.user=data;
      console.log('Data requested');
      console.log(this.user);
    });
  }
}

  // saveUsers(){
  //   this.userInterface.addUsers(this.users).subscribe(data =>{
  //     console.log(data)
  //     this.goToUsersList();
  //   },
  //       error => console.log(error));
  // }
  //   goToUsersList(){
  //   this.router.navigate(['/login']);
  // }
  //   onSubmit(){
  //   console.log(this.users);
  //   this.saveUsers();
  // }



