import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog.component';

@Component({
    selector: 'app-announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
    displayedColumns: string[] = ['title', 'date'];
    dataSource = ELEMENT_DATA;

    constructor(private dialog: MatDialog) { }

    click(hyperlink) {  
        if(hyperlink != '') {
            this.dialog.open(DialogComponent, { data: { link: hyperlink } });
        }    
    }
}

export interface PeriodicElement {
    posision: number;
    title: string;
    date: string;
    link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { posision: 1, title: '武陵農場蔣公行館參觀方式', date: '民國106年08月04日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fcontent-02.jpg?alt=media&token=901aeb24-033e-4e42-b473-e225e436884d' },
    { posision: 2, title: '因應狂犬病役情,遊客請勿攜帶哺乳類動物進入武陵農場', date: '民國107年08月08日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fcontent-03.jpg?alt=media&token=58bf1cf0-cd06-4201-8625-c3b6dcd6e178' },
    { posision: 4, title: '武陵賓館自103年1月1日起客房內不提供盥洗用品', date: '民國103年07月01日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fcontent-04.jpg?alt=media&token=4f739e3a-c7ad-4691-aef2-2dafe1f62b22' },
    { posision: 5, title: '太魯閣公務段107年10月份路段管制表', date: '民國107年10月04日', link: '' },
    { posision: 6, title: '東勢林區管處管制交通公告', date: '民國107年03月19日', link: '' },
    { posision: 7, title: '雪霸國家公園登山口平台維修', date: '民國107年08月27日', link: '' },
    { posision: 8, title: '107年水蜜桃銷售價格公告', date: '民國107年03月19日', link: '' }
];