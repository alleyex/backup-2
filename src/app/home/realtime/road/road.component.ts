import { Component, OnInit, Input } from '@angular/core';
import { RoadStatus } from '../realtime.service';

@Component({
    selector: 'app-road',
    templateUrl: './road.component.html',
    styleUrls: ['./road.component.scss']
})
export class RoadComponent implements OnInit {
    @Input() status: RoadStatus;
    constructor() { }

    ngOnInit(): void { }
}
