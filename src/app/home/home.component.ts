import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    categorys = [
        { title: '天氣路況', id: 'status' },
        { title: '公告訊息', id: 'notice' },
        { title: '便民服務', id: 'service' },
        { title: '產品服務', id: 'production' }
    ];   

    getOffsetTop(element: any) {
        let offsetTop = element.offsetTop || 0;
        if (element.offsetParent) {
            offsetTop += this.getOffsetTop(element.offsetParent);
        }
        return offsetTop;
    }

    onClick($element): void {        
        window.scrollTo(0,this.getOffsetTop($element));
    }

    
    moveScroll(category:any): void {  
        let element = document.getElementById(category.id);
        window.scrollTo(0,this.getOffsetTop(element));         
    }



}
