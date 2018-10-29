import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopupComponent } from './popup.component';

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html',
    styleUrls: ['./discount.component.scss']
})
export class DiscountComponent   {
    constructor(private dialog: MatDialog) { }

    onClick(hyperlink) {
        if (hyperlink === 1) {
            // tslint:disable-next-line:max-line-length
            this.dialog.open(PopupComponent, { data: { link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fdis-01.jpg?alt=media&token=7d43117d-231b-4b5f-b9db-58aaba8d88c7'} });
        } else {
            // tslint:disable-next-line:max-line-length
            this.dialog.open(PopupComponent, { data: { link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fdis-2.jpg?alt=media&token=7f0dcd18-b9d7-4599-b52f-795622f97895'} });

        }
    }
}
