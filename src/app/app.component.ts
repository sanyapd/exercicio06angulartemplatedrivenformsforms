import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
constructor(private dialog: MatDialog) {}

name: string = ''
sobrenome: string = ''
cpf: string = ''
telefone: string = ''
endereco: string = ''
complemento: string = ''
usuario: string = ''
senha: string = ''
senhaconfirmada: string = ''

 submit():void{
  
  console.log(`Name = ${this.name}`)
  console.log(`Sobrenome = ${this.sobrenome}`)
  console.log(`Cpf = ${this.cpf}`)
  console.log(`Telefone = ${this.telefone}`)
  console.log(`Endereco = ${this.endereco}`)
  console.log(`Complemento = ${this.complemento}`)
  console.log(`Usuario = ${this.usuario}`)
  console.log(`Senha = ${this.senha}`)
  console.log(`SenhaConfirmada = ${this.senhaconfirmada}`)

  if (this.senha !== this.senhaconfirmada) {
    alert("As senhas não conferem! Digite as senhas iguais!");
    return
  }

  let ref = this.dialog.open(DialogComponent)

  ref.componentInstance.namedialog = this.name
  ref.componentInstance.sobrenomedialog = this.sobrenome
  ref.componentInstance.cpfdialog = this.cpf
  ref.componentInstance.telefonedialog = this.telefone
  ref.componentInstance.enderecodialog = this.endereco
  ref.componentInstance.complementodialog = this.complemento
  ref.componentInstance.usuariodialog = this.usuario
  }

} 