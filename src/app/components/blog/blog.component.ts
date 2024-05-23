import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  public bg:any={bg1:false,bg2:false,bg3:true}

  public sty:any={"color":"hotpink", "text-align":"center"}

public day:any ='hoilday'

red(){
this.bg={bg1:true,bg2:false,bg3:false}
}

blue(){
this.bg={bg1:false,bg2:true,bg3:false}
}

green(){
this.bg={bg1:false,bg2:false,bg3:true}

}


}
