import { Component, Input } from '@angular/core'

@Component({
  selector: 'total-count',
  template: `
    <span class='card'>Total Alert Counts: {{totalAlerts}}<span>
  `,
  styles: [`
    .card { 
        border: 2px;
        background-color: grey;
        color:white;
    }
  `]
})
export class TotalCountComponent { 
    @Input() alerts:any;
    @Input() totalAlerts:number;
    constructor(){
        this.totalAlerts=0;
    }  
}