import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-convenience',
    templateUrl: './convenience.component.html',
    styleUrls: ['./convenience.component.scss']
})
export class ConvenienceComponent {
    constructor(private router: Router) { }

    onInformation() {
        this.router.navigateByUrl('/home/information');
    }
}
