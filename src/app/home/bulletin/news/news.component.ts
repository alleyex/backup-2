import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent  {
    displayedColumns: string[] = ['title', 'date'];
    dataSource = NEWS_DATA;
}


export interface NewsElement {
    posision: number;
    title: string;
    date: string;
}

const NEWS_DATA: NewsElement[] = [
    { posision: 1, title: '[森林露營計畫] - 親親戶外專案(學生專案)', date: '民國107年07月19日' },
    { posision: 2, title: '[梨山茶暨水蜜桃行銷推廣活動]活動宣傳', date: '民國107年07月13日' },
    { posision: 3, title: '[繡球花盛開]夏日賞花趣-繡球花盛開', date: '民國107年06月27日' },
    { posision: 4, title: '清境農場2018/06/30~08/30 清境一夏風起飛羊 活動來囉', date: '民國107年06月16日' }
];