import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';


interface sidebarToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})

export class MenuAdminComponent implements OnInit {

  constructor() { }
  
  
  ngOnInit(): void {
    
  }

  

}
