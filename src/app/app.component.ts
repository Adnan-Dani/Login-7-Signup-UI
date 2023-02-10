import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Hello from App component';
  imgShow: boolean = true  ;
  imgUrl: string = 'https://thumbs.dreamstime.com/b/scan-qr-code-camera-view-capturing-digital-technology-identifying-application-goods-online-barcode-information-ability-199398990.jpg';
  userName:String = '';

  onKeyup(){
    console.log(this.userName);
  }
  buttonClick(){
    console.log("Clicked");
  }

}
