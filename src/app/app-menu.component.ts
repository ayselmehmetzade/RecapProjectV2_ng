import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuItem } from 'primeng/api';
import { Iuser } from './interfaces/user';
import { AuthService } from './services/auth.service';
import { LocalstorageService } from './services/localstorage.service';

@Component({
    selector: 'app-menu-top',
    template: `
    <ng-container  *ngIf="isAuthenticated()">
        <p-menubar [model]="items">
            <button type="button" class="p-button-secondary" pButton pRipple icon="pi pi-bars" label="{{user.userName}}" (click)="menu.toggle($event)"></button>
            <p-menu appendTo="body" #menu [popup]="true" [model]="items1"></p-menu>
       </p-menubar>
    </ng-container>`,
    styles: [``]
})
export class AppMenuTopComponent {

    items: MenuItem[];
    items1: MenuItem[];

    user: Iuser = this.authService.getUser();


    constructor(private authService: AuthService, private localStorage: LocalstorageService, private toastrservice: ToastrService, private route: Router) {
        this.items = [
            {
                label: 'Rent A Car'
            },
            {
                label: 'CarList', icon: 'fa fa-car', url: 'cars'
            },
            {
                label: 'BrandList', icon: 'fas fa-copyright', url: 'brands'
            },
            {
                label: 'ColorList', icon: 'fas fa-palette', url: 'colors'
            },
            {
                label: 'RentalList', icon: 'far fa-handshake'
            },
        ];
        this.items1 = [
            { label: 'Update', icon: 'pi pi-fw pi-refresh' },
            { label: 'Log Out', icon: 'pi pi-power-off', command: () => { this.logOut(); } }
        ];
    }

    isAuthenticated(): boolean {
        return this.authService.loggedIn();
    }

    logOut() {
        this.localStorage.removeToken();
        this.route.navigate(['/login']);
    }
    ngDoCheck() {
        if (this.user !== this.authService.user) {
            this.user = this.authService.user;
        }
    }
  

}

