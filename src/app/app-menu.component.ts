import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu-top',
    template: `
    <p-menubar [model]="items">
        <div>
            <button type="button" pButton label="Logout" icon="pi pi-power-off" style="margin-left:.25em"></button>
        </div>
    </p-menubar>`,
    styles: [``]
})
export class AppMenuTopComponent {
    items: MenuItem[];

    constructor() {
        this.items = [
            {
                label: 'Rent A Car', url:"/"
            },
            {
                label: 'CarList', icon: 'fa fa-car', url:'cars'
            },
            {
                label: 'BrandList', icon: 'fas fa-copyright', url:'brands'
            },
            {
                label: 'ColorList', icon: 'fas fa-palette', url:'colors'
            },
            {
                label: 'RentalList', icon: 'far fa-handshake'
            },
        ];
    }
}
