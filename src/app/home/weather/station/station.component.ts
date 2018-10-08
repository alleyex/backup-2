import { Component, OnInit } from '@angular/core';
import { WeatherService, WeatherStation } from '../weather.service';

@Component({
    selector: 'app-station',
    templateUrl: './station.component.html',
    styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
    constructor(private weatherService: WeatherService) {}
    stations: WeatherStation[];

    ngOnInit(): void {        
            this.stations = this.weatherService.getWeather();
            console.log(this.stations);     
    }
}