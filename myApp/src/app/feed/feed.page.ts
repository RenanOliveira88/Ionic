import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})



export class FeedPage implements OnInit {
  public nome_Usuario:string = "Renan Oliveira";
  constructor() { }

  public somaDoisNumeros(num1:number, num2:number): void{
	alert(num1 + num2);
	}

  ngOnInit() {
	
  }
  ionViewDidEnter(){
	this.somaDoisNumeros(10, 99);
  }

}
