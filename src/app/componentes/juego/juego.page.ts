import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController,AlertController } from '@ionic/angular';
@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {
  item:any=[];
  Aciertos:number=0;
  item2:any=[{Text:"Carta",Adivina:'Perro',visible:false,Adivinado:"no"},
            {Text:"Carta",Adivina:'Gato',visible:false,Adivinado:"no"},
            {Text:"Carta",Adivina:'Raton',visible:false,Adivinado:"no"},
            {Text:"Carta",Adivina:'Carro',visible:false,Adivinado:"no"},
            {Text:"Carta",Adivina:'Bus',visible:false,Adivinado:"no"}];
  validation:any=[];
  number1:any;
  number2:any;
  visible:boolean = false;
  constructor( public toastController: ToastController,
                public alertController: AlertController,) { }

  ngOnInit() {
    this.revolvercartas()
  }
  revolvercartas(){
    debugger
    let cards=["Perro","Gato","Raton","Carro","Bus"]
    cards.sort()
  
    let espacio=    {Text:"Carta",Adivina:cards[0],visible:false,Adivinado:"no"}
    let espacio1=  {Text:"Carta",Adivina:cards[1],visible:false,Adivinado:"no"}
    let espacio2=  {Text:"Carta",Adivina:cards[2],visible:false,Adivinado:"no"}
    let espacio3=  {Text:"Carta",Adivina:cards[3],visible:false,Adivinado:"no"}
    let espacio4=  {Text:"Carta",Adivina:cards[4],visible:false,Adivinado:"no"}
    this.item.push(espacio);
    this.item.push(espacio1);
    this.item.push(espacio2);
    this.item.push(espacio3);
    this.item.push(espacio4);
  }
  change(obj,vis:boolean,adivina){
    debugger
    this.visible = !this.visible;
    this.item[obj].visible=!vis
    this.number1=obj;
    this.validation.push(adivina)

  }
  change2(obj,vis:boolean,adivina){
    debugger
    let scope=this
    this.number2=obj;
    this.item2[obj].visible=!vis
    this.validation.push(adivina)
    setTimeout(()=>{    
      if(this.validation[0]==this.validation[1]){
        scope.presentAlert('Acertaste','true');
        this.Aciertos = this.Aciertos+1
        this.visible = !this.visible;
        this.item[this.number1].Adivinado="si";
        this.item2[obj].Adivinado="si";
        this.validation=[]
        this.number1="";
        this.number2="";
        const resultado = this.item2.find( item => item.Adivinado === 'no' );
        if (resultado==undefined)
        {this.messageagain()}
        debugger
      }
      else{
        scope.presentAlert('Intenta de nuevo','');
        this.visible = !this.visible;
        this.validation=[]
        this.item[this.number1].visible=false
        this.item2[this.number2].visible=false
        this.number1="";
        this.number2="";
        
      }                       

    }, 1000);
   
  }

  async presentAlert(message,type) {
    const toast = await this.toastController.create({
      color: type =='true'?'success':"danger",
      message: message,
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  async  messageagain() {
    const alert = await this.alertController.create({
      header: 'Jugar de nuevo',
      message: 'Desea Jugar de nuevo',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          cssClass: 'secondary',
          handler: (blah) => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            window.location.reload()
          }
        }
      ]
    });

    await alert.present();
  }

  
}
