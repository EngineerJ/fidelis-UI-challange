import { Component, Input } from '@angular/core'

@Component({
  selector: 'statistical-box',
  templateUrl: './statistical-box.component.html',
  styles: [`
    .card { 
        padding: 5px;
        border: 2px solid #000;
        width: 400px;
    }
    .card-body { padding-right:20px; }
    .subject{ padding: 0px 10px; }
    .count { float: right; }
  `]
})
export class StatisticalBoxComponent { 
    @Input() type:string;
    @Input() alerts:any;
    subject:string[]=[];
    displayedStatistics:{subject:string, count:number}[]=[];

    constructor(){
        this.type='';
        this.alerts=[];
    }

    ngOnInit(){
        this.returnStatistics();
    }
  
    returnStatistics(){
        this.subject.push(this.alerts.map((alert:any) => alert[this.type as keyof typeof alert]).filter((value:any, index:any, self:any) => self.indexOf(value) === index));
        this.populateStatisticsArray();
    }

    populateStatisticsArray(){
        for (let i = 0; i < this.subject[0].length; i++) {
            let elements = this.subject[0];
            for (let j = 0; j < elements.length; j++) {
                const subject = elements[j];
                let count:number = this.alerts.reduce((occurrences:number, alert:any) =>alert[this.type as keyof typeof alert] == subject ? occurrences + 1 : occurrences, 0);
                this.displayedStatistics.push({subject,count});
            }
            break;
        }
    }
}