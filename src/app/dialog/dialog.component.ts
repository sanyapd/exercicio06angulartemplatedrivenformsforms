import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

 namedialog: string = ''
 sobrenomedialog: string = ''
 cpfdialog: string = ''
 telefonedialog: string = ''
 enderecodialog: string = ''
 complementodialog: string = ''
 usuariodialog: string = ''
 senhadialog: string = ''
 senhaconfirmadadialog: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}

