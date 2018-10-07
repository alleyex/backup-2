import { Component, OnInit, Output, EventEmitter, ElementRef, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    categorys = [
        { title: '天氣路況', id: 'status' },
        { title: '優惠行程', id: 'discount' },
        { title: '公告訊息', id: 'bulletin' },
        { title: '便民服務', id: 'convenience' },
        { title: '相關連結', id: 'related' }
    ];
     
    getOffsetTop(element: any) {
        let offsetTop = element.offsetTop || 0;
        if (element.offsetParent) {
            offsetTop += this.getOffsetTop(element.offsetParent);
        }
        return offsetTop;
    }

    moveScroll(category: any): void {
        let element = document.getElementById(category.id);

        //smooth effect
        let timer = 10;
        var interval = setInterval(() => {
            window.scrollTo(0, timer);
            timer += 10;
            if (timer >= this.getOffsetTop(element)) clearInterval(interval);
        }, 5);

    }
}
