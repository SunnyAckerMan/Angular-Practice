import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  [x: string]: any;
  title = 'Cal-Pro';
  parentMessage = 'Message Changed';
  message!: string;
  fromChildOutOut!: String;
  imgUrl =
    'https://i.pinimg.com/736x/c2/bf/74/c2bf74d9ef43bf24dcf73cde5a24f61c.jpg';
  messages = 'Message from TS Comp File';
  bool: boolean = false; //change to red!green!class//styleBinding!

  @ViewChild(PostComponent) childComp: any;
  log: any;
  constructor() {
    console.log(this.childComp);
    this.form = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
    });
  }
  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }
  receiveMessage($event: any) {
    this.fromChildOutOut = $event;
  }

  buttonClick() {
    console.log('Button Click');
  }
  onKey() {
    console.log('Entered Succefully!');
  }
  onKeyUp(username: any) {
    console.log(username);
  }
  onKeyUps() {
    console.log(this.userName);
  }
  //TASK..................................................................
  userName: any;
  posttitle: any;
  postDetails: any;
  imageUrl: any;
  postUrl: any;
  addBackground: any;

  //ngFor
  postArray: Array<string> = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5'];
  objArray: Array<any> = [
    { id: 1, PostTitle: 'post 1' },
    { id: 2, PostTitle: 'post 2' },
    { id: 3, PostTitle: 'post 3' },
    { id: 4, PostTitle: 'post 4' },
    { id: 5, PostTitle: 'post 5' },
  ];
  //ngIf
  stepForm: any;

  onClick(status: any) {
    this.stepForm = status;
  }

  //ngStyle
  isActive: boolean = true;

  //TASK

  name!: string;
  email!: string;
  address!: string;
  userArray: Array<any> = [];
  onClickX() {
    this.userArray.push({
      name: this.name,
      email: this.email,
      address: this.address,
    });
    console.log(this.userArray);
  }
  onDelete(index: number) {
    this.userArray.splice(index, 1);
  }

  //pipes
  userdetails = {
    name: 'User 1',
    city: 'Dhaka',
    CountryCode: 'BD',
  };

  dummyText: string =
    'huoibhuygudaidbiaudbuyagdyuiaiodoaiuwbdoyaffobicbabwudboiwabdiabwdibaduyhbadawdawidbaboybvcuybuabwbdaibwidobaidbabdoabwdabdiabdoiawhdaidbvoyawvdouavibjcbcbyvbaidbidbabwoduyavbwdiawbdiadbaodvbiybisbaybvbibdawboyuabdiabdoabwdoibaodibayuefbibfioadbwyib';

  //FORM
  getValue(f: FormControl) {
    console.log(f);
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  form: any;
}
