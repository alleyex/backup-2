import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog.component';
@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent {
    displayedColumns: string[] = ['title', 'date'];
    dataSource = NEWS_DATA;

    constructor(private dialog: MatDialog) { }

    click(hyperlink) {
        if (hyperlink !== '') {
            this.dialog.open(DialogComponent, { data: { link: hyperlink } });
        }
    }
}


export interface NewsElement {
    posision: number;
    title: string;
    date: string;
    link: string;
}

const NEWS_DATA: NewsElement[] = [
    // tslint:disable-next-line:max-line-length
    { posision: 1, title: '[森林露營計畫] - 親親戶外專案(學生專案)', date: '民國107年07月19日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fnews-01.jpg?alt=media&token=2dede30d-8df0-43e9-ba1a-de2b28e6a9b3' },
    // tslint:disable-next-line:max-line-length
    { posision: 2, title: '[杭菊體驗」-微旅行行程專案', date: '民國107年09月13日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fnews-02.jpg?alt=media&token=764d9ccf-2ac7-4fa8-aaa8-532f2bd5f694' },
    // tslint:disable-next-line:max-line-length
    { posision: 3, title: '[雙十國慶花車]退輔會三高山農場展現吸睛特色，特推出「歡慶雙十」優惠好康活動', date: '民國107年10月09日', link: 'https://firebasestorage.googleapis.com/v0/b/dorado-project.appspot.com/o/temp%2Fnews-03.jpg?alt=media&token=84d9cdaa-ff0f-4b3b-8810-024388baa208' }
];
