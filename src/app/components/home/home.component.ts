import { Component, OnInit } from '@angular/core';
interface laptop{
  name:string,
  price:number,
  warnty:string,
  color:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  /*
  public name:string = "mahendra"
  private name1:any = "Mahendra"
  name2:string = "Mahi"
*/

public laptops:string[] =["Hp","Lenovo","Acer"]

public obj:laptop= {name:"hp",price:12000,warnty:"2Years",color:"black"}

public latest_laps:laptop[]=[
  {name:"hp",price:12000,warnty:"2Years",color:"black"},
  {name:"acer",price:11000,warnty:"1Years",color:"red"},
  {name:"dell",price:15000,warnty:"6months",color:"gray"},
  {name:"lenovo",price:22000,warnty:"3Years",color:"blue"}
]

  constructor(){}


  ngOnInit(): void {
    //console.log(this.name)
   // console.log(this.name1)
   // console.log(this.name2)
   // alert("Welcome to angular")
   this.getValue()
   console.log(this.laptops[0])
   console.log(this.laptops[2])
   console.log(this.latest_laps[0].price)
  }


  getValue(){
    console.log("Welcome to angular method")
  }

}
