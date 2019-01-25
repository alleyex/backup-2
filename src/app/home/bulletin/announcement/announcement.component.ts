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
        if (hyperlink !== '') {
            this.dialog.open(DialogComponent, { data: { link: hyperlink } });
        }
    }
}

export interface PeriodicElement {
    posision: number;
    title: string;
    date: string;
    link: string;
    web: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
     // tslint:disable-next-line:max-line-length
     { posision: 1, title: '和平區武陵路（中124線）為配合108年武陵櫻花季疏運措施自108年2月7日起至27日止全天候管制通行', date: '民國108年01月24日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fpublic.jpg?alt=media&token=f1aa894e-f3f5-4310-9b79-3fd4586d976f', web:null },

     // tslint:disable-next-line:max-line-length
     { posision: 1, title: '武陵賓館櫻花季午、晚餐訂餐及價位公告', date: '民國107年11月11日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fww.jpg?alt=media&token=1a5e68b3-ce01-47aa-94b7-264cab0bb7cc', web:null },

     // tslint:disable-next-line:max-line-length
     { posision: 1, title: '一年一度「2019武陵戶外音樂會」-梅麗人生即將開始啦！', date: '民國107年11月11日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2F49614597_2219429494755810_4293303099252015104_n.jpg?alt=media&token=91fb118e-0535-437b-9be5-80665248a7ff', web:null },

      // tslint:disable-next-line:max-line-length
      { posision: 1, title: '108年武陵農場櫻花季新聞稿', date: '民國107年11月2日', link : null, web : true },
    // tslint:disable-next-line:max-line-length
    { posision: 1, title: '108年度櫻花季國民賓館客房已全部訂完', date: '民國107年11月2日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2F1102.png?alt=media&token=94923a6a-72e3-434c-b0d7-9e25a320113a', web:null },
    // tslint:disable-next-line:max-line-length
    { posision: 1, title: '武陵農場108年櫻花季國民賓館訂房及露營區訂位重要說明', date: '民國107年10月25日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fann-01.jpg?alt=media&token=d4a962e1-e8ca-4bfc-9976-9d8061f80f46', web:null },
    // tslint:disable-next-line:max-line-length
    { posision: 2, title: '武陵農場蔣公行館參觀方式', date: '民國106年08月04日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fcontent-02.jpg?alt=media&token=901aeb24-033e-4e42-b473-e225e436884d', web:null },
    // tslint:disable-next-line:max-line-length
    { posision: 3, title: '因應狂犬病役情,遊客請勿攜帶哺乳類動物進入武陵農場', date: '民國107年08月08日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fcontent-03.jpg?alt=media&token=58bf1cf0-cd06-4201-8625-c3b6dcd6e178', web:null },
    // tslint:disable-next-line:max-line-length
    { posision: 4, title: '武陵賓館自103年1月1日起客房內不提供盥洗用品', date: '民國103年07月01日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fcontent-04.jpg?alt=media&token=4f739e3a-c7ad-4691-aef2-2dafe1f62b22', web:null } 
     
];
