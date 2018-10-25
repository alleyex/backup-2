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
            'badge-danger': this.status.roadtype ==='災變',
            'badge-warning': this.status.roadtype ==='阻塞',
            'badge-secondary': this.status.roadtype ==='交通障礙',
            'badge-primary': this.status.roadtype ==='道路施工',
            'badge-info': this.status.roadtype ==='其他'

            
        }
    }
}