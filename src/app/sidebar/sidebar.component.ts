import { Component, OnInit } from '@angular/core';
import { OverlayBadgeModule } from 'primeng/overlaybadge'
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
export interface sidebarItems{
  label:string,
  icon:string,
}
@Component({
  selector: 'app-sidebar',
  imports: [OverlayBadgeModule,Menubar],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone:true,
})
export class SidebarComponent implements OnInit{
  itemsOtro=[1,2,3,4]
  sidebarItems1=[
    {label:"Home",icon:""},
    {label:"Campaign",icon:""},
    {label:"Payments",icon:""},
    {label:"Influencer",icon:""},
  ]
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                styleClass:'funcionaPlis',
                items: [
                    {
                        label: 'Components',
                        icon: 'pi pi-bolt'
                    },
                  ]
            },
        ]
    }
}
