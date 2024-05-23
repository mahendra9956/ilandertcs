import { Component, OnInit } from '@angular/core';

interface Laptops{
  id:string,
  name:string,
  img:string,
  price:number,
  warnty:number,
  content:string
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{


/*
  public name:string ="Laptops"

  public img:string ="hp.jpg"

  public img1: string ="asus.jpg"
  */

  public laptops:Laptops[]=[
    {
      id:"ILT1001",
      name:"Hp Laptop",
      img: "hp.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem aperiam  perspiciatis veniam quam minima quod dolore rerum perferendis facere ipsum, nihil nam dignissimos cupiditate nostrum officia porro corporis Dolores",
      price: 15000,
      warnty: 1
    }, 
    {
      id:"ILT1002",
      name:"Asus Laptop",
      img: "asus.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem aperiam  perspiciatis veniam quam minima quod dolore rerum perferendis facere ipsum, nihil nam dignissimos cupiditate nostrum officia porro corporis Dolores",
      price: 20000,
      warnty: 1.6
    },
    {
      id:"ILT1003",
      name:"Dell Laptop",
      img: "dell.webp",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem aperiam  perspiciatis veniam quam minima quod dolore rerum perferendis facere ipsum, nihil nam dignissimos cupiditate nostrum officia porro corporis Dolores",
      price: 25000,
      warnty: 2
    },
    {
      id:"ILT1004",
      name:"Acer Laptop",
      img: "acer.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem aperiam  perspiciatis veniam quam minima quod dolore rerum perferendis facere ipsum, nihil nam dignissimos cupiditate nostrum officia porro corporis Dolores",
      price: 35000,
      warnty: 2.5
    },
    {
      id:"ILT1005",
      name:"Lenovo Laptop",
      img: "lenovo.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem aperiam  perspiciatis veniam quam minima quod dolore rerum perferendis facere ipsum, nihil nam dignissimos cupiditate nostrum officia porro corporis Dolores",
      price: 30000,
      warnty: 2
    },
    {
      id:"ILT1006",
      name:"MI Laptop",
      img: "mi.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem aperiam  perspiciatis veniam quam minima quod dolore rerum perferendis facere ipsum, nihil nam dignissimos cupiditate nostrum officia porro corporis Dolores",
      price: 50000,
      warnty: 3 
    }
  ]

  constructor(){}

  ngOnInit(): void {
    
  }







/*
  getValue(){
    return 10000
  }

  cart(name:string){
 console.log(name)
  }
  */

}
