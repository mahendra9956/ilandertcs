import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

public navs=[
  {
    name:"Home",
    url:"/home",
    sub:[]
  },
  {
    name:"About",
    url:"/about",
    sub:[]
  },
  {
    name:"Products",
    url:"/products",
    sub:[
    {
      name: "Used Laps",
      url: "/usedlaps"
    },
    {
      name: "New Laps",
      url: "/newlaps"
    }
    ]
  },
  {
    name:"Contact",
    url: "/contact",
    sub:[]
  },
  {
    name: "Register",
    url:"/register",
    sub:[]
  },
  {
    name:"Login",
    url:"/login",
    sub:[]
  },
  {
    name: "Blog",
    url: "/blog",
    sub:[
      {
        name: "Blog-1",
        url: "/blog1"
      },
      {
        name: "Blog-2",
        url: "/blog2"
      }
      ]
  },
  {
    name: "Admin",
    url: "/admin",
    sub:[]
  },
  {
    name: "Tasks",
    url: "/tasks", 
    sub:[]
  }

]

}
