import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})



export class FeedPage implements OnInit {
  public feed_content ={
      name: "Renan Oliveira Dynamic",
      text: "Random mussumsis ipsunsis cacildis da me um copo de cachacis"

  }
  public nome_Usuario:string = "Renan Oliveira";
  constructor(private http: HTTP) {}

  public somaDoisNumeros(num1:number, num2:number): void{
	alert(num1 + num2);
	}

  ngOnInit() {
	
  }
  ionViewDidEnter(){
	//this.somaDoisNumeros(10, 99);

    this.http.get('http://ionic.io', {}, {})
    .then(data => {
      alert('deu certo')
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

    })
    .catch(error => {
      alert('erro');
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }

}
