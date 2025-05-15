import { Component, OnInit } from '@angular/core';
import { OverlayBadgeModule } from 'primeng/overlaybadge'
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';

export interface sidebarItems{
  label:string,
  icon:string,
}
@Component({
  selector: 'app-sidebar',
  imports: [OverlayBadgeModule,Menubar,IconFieldModule,InputIconModule,TagModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone:true,
})
export class SidebarComponent implements OnInit{
  itemsOtro=[1,2,3,4]
  sidebarItems1=[
    {label:"Home",icon:"pi-microsoft"},
    {label:"Campaign",icon:"pi-volume-up"},
    {label:"Payments",icon:"pi-wallet"},
    {label:"Influencer",icon:"pi-star"},
  ]
  items: MenuItem[] | undefined;

  headerTable=["Campaign name","Budget","Allocation","Impresions","Timeline","Influencer",]

  selectTable=[
    {label:"Period:", label2:"This Year",},
    {label:"Status:", label2:"Full",},
    {label:"Social Media:", label2:"Full",},
  ]
  trTable=[1,2,3,4,5,6,]
  imgTabla=[1,2,3,4]
    ngOnInit() {
        this.items = [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
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
