import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
    displayedColumns: string[] = ['title', 'date'];
    dataSource = ELEMENT_DATA;
}


export interface PeriodicElement {
    posision: number;
    title: string;
    date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { posision: 1, title: '武陵農場蔣公行館參觀方式', date: '民國106年08月04日' },
    { posision: 2, title: '因應狂犬病役情,遊客請勿攜帶哺乳類動物進入武陵農場', date: '民國107年08月08日' },
    { posision: 3, title: '瑪莉亞颱風交通解除管制公告', date: '民國107年03月19日' },
    { posision: 4, title: '武陵賓館自103年1月1日起客房內不提供盥洗用品', date: '民國103年07月01日' },
    { posision: 5, title: '太魯閣公務段107年10月份路段管制表', date: '民國107年10月04日' },
    { posision: 6, title: '東勢林區管處管制交通公告', date: '民國107年03月19日' },
    { posision: 7, title: '雪霸國家公園登山口平台維修', date: '民國107年08月27日' },
    { posision: 8, title: '107年水蜜桃銷售價格公告', date: '民國107年03月19日' }

];