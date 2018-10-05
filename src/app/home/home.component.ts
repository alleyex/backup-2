import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    categorys = [
        { title: '天氣路況', isActive: true },
        { title: '公告訊息', isActive: false },
        { title: '便民服務', isActive: false },
        { title: '產品服務', isActive: false }
    ];


}
