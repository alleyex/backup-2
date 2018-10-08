import { Component, OnInit } from '@angular/core';
import { RealtimeService, RoadStatus } from './realtime.service';

@Component({
    selector: 'app-realtime',
    templateUrl: './realtime.component.html',
    styleUrls: ['./realtime.component.scss']
})
export class RealtimeComponent implements OnInit {
    statuses: RoadStatus[];
    markedIndex = 100;

    constructor(private realtimeService: RealtimeService) { }
       
    ngOnInit(): void {
        this.statuses = this.realtimeService.getRoadStatus();       
    } 
}
