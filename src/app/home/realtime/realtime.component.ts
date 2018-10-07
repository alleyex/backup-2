import { Component, OnInit } from '@angular/core';
import { RealtimeService, RoadStatus } from './realtime.service';

@Component({
    selector: 'app-realtime',
    templateUrl: './realtime.component.html',
    styleUrls: ['./realtime.component.scss']
})
export class RealtimeComponent implements OnInit {
    statuses: RoadStatus[];
    constructor(private realtimeService: RealtimeService) { }

    get() {
        this.statuses = this.realtimeService.getRoadStatus();
        console.log(this.statuses);
    }

    ngOnInit(): void {

    }
}
