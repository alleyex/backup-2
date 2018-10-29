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
        { title: '即時路況', id: 'status' },
        { title: '優惠行程', id: 'discount' },
        { title: '即時氣象', id: 'weather' },
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
        console.log(category);

        const element = document.getElementById(category.id);
        if (element) {
            console.log(element);

            // smooth effect
            let timer = 10;
            const interval = setInterval(() => {
                window.scrollTo(0, timer);
                timer += 10;
                if (timer >= this.getOffsetTop(element)) { clearInterval(interval); }
            }, 5);
        }
    }
}
