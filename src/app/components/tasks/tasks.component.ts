import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  public number=0


  public message1=""
  public message2=""
  dec(){
//this.number--
this.number=this.number-1 >0 ? this.number-1 :0
  }

  inc(){
//this.number++
this.number=this.number+1
  }

  morning(){
this.message1 ="Good Morning"
  }
afternoon(){
this.message1="Good AfterNoon"
}

evening(){
this.message1="Good Evening"
}

wish(abc:string){
  this.message2=abc
}

}
