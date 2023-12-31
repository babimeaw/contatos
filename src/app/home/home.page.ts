import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/contato';

@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {
nome!: string;
telefone! : number;
email ! : string;
sexo !: string;
lista_contatos: Contato[] = [];

constructor(private alertController: AlertController) {
let c1 : Contato = new Contato("Tamilyn Camille Costa",91094415, "tamilyn.cc@hotmail.com.br", "Feminino")
let c2 : Contato = new Contato("Yasmim Haffermann Bilovus",91094400, "yasmimhb@gmail.com","Feminino")
let c3 : Contato = new Contato("Ermindo Treviso Neto",91091115,"ermindone@gmail.com", "Masculino")
let c4 : Contato = new Contato("Gabriel Dibs",91091100, "dibzinho@gmail.com", "Não declarado")
this.lista_contatos.push(c1);
this.lista_contatos.push(c2);
this.lista_contatos.push(c3);
this.lista_contatos.push(c4);

}

cadastrar(){
if(!this.nome || !this.telefone || !this.email || !this.sexo){
this.presentAlert("Erro", "Todos os campos são obrigatórios!");
}else{
this.presentAlert("Sucesso", "Contato Cadastrado!");
}
let novo : Contato = new Contato(this.nome, this.telefone, this.email, this.sexo);
this.lista_contatos.push(novo);
}

async presentAlert(subHeader: string, message: string) {
const alert = await this.alertController.create({
header: 'Agenda de Contatos',
subHeader: subHeader,
message: message,
buttons: ['OK'],
});

await alert.present();
}
}