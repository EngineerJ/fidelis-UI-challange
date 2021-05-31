import { Component, Input } from '@angular/core'

@Component({
  selector: 'total-count',
  template: `
    <div class='card'>
        <span>Total Alert Counts: {{totalAlerts}}</span>
    </div>
  `,
  styles: [`
    .card { 
        padding: 5px;
        width: 405px;
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