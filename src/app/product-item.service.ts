import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductItemService implements OnInit{

  imagePath = "/Users/raju/Desktop/AngularTraining/Project/myProject/src/assets/img.jpeg";

  constructor() { }

  ngOnInit(): void {  }

  public productList = [
    {
      img:'/assets/img.jpeg',
      id:1,
      title:'Mobile',
      details:"Some quick example text to build on the Product  and make up the bulk of the card's content."
    },
    {
      img:'/assets/laptop.png',
      id:2,
      title:'Laptop',
      details:"Some quick example text to build on the Product  and make up the bulk of the card's content."
    },
    {
      img:'/assets/tv.png',
      id:3,
      title:'Tv',
      details:"Some quick example text to build on the Product  and make up the bulk of the card's content."
    },
    {
      img:'/assets/ac.png',
      id:4,
      title:'Ac',
      details:"Some quick example text to build on the Product  and make up the bulk of the card's content."
    },
    {
      img:'/assets/charger.png',
      id:5,
      title:'Charger',
      details:"Some quick example text to build on the Product  and make up the bulk of the card's content."
    },
    {
      img:'/assets/charger.png',
      id:6,
      title:'Charger',
      details:"Some quick example text to build on the Product  and make up the bulk of the card's content."
    },
    {
      img:'/assets/charger.png',
      id:7,
      title:'Charger',
      details:"Some quick example text to build on the Product  and make up the bulk of the card's content."
    },
  ];
}
