import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  
 
  }

  ocultar:string = ''

    logout(){
      localStorage.setItem('inicio','0')
      this.ocultar = '0'
    }
  

  }





