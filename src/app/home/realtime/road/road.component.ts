import { Component, Input } from '@angular/core';
import { RoadStatus } from '../realtime.service';

@Component({
    selector: 'app-road',
    templateUrl: './road.component.html',
    styleUrls: ['./road.component.scss']
})
export class RoadComponent  {
    @Input() status: RoadStatus;    

    getStatusClass(){
        return {
            'badge-primary': this.status.roadtype ==='道路施工',
            'badge-warning': this.status.roadtype ==='阻塞',
            'badge-info': this.status.roadtype ==='其他'
        }
    }
}