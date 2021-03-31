import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu-top',
    template: `<p-menubar [model]="items">
        <div>
            <input type="text" pInputText placeholder="Search">
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
                label: 'CarList', icon: 'fa fa-car'
            },
            {
                label: 'BrandList', icon: 'fas fa-copyright'
            },
            {
                label: 'ColorList', icon: 'fas fa-palette'
            },
            {
                label: 'RentalList', icon: 'far fa-handshake'
            },

        ];
    }
}
