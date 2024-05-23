import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

public carousel=[
  {
    img:"lap1.jpg",
    alt: "Img-1"
  },
  {
    img:"lap2.jpg",
    alt: "Img-2"
  },
  {
    img:"lap3.jpg",
    alt: "Img-3"
  },
  {
    img:"llap4.avif",
    alt: "Img-4"
  },
  {
    img:"lap5.jpg",
    alt: "Img-5"
  },
  {
    img:"lap6.jpg!f305cw",
    alt: "Img-6"
  }
]

}
