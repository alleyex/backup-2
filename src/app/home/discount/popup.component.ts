import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-popup',
    template: `<img [src]="data.link" style="width: 100% ; height: 100% ;  padding: 0; margin: 0; " alt="" />`
})
export class PopupComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
