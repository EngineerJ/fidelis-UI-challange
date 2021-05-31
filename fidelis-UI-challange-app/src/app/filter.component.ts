import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'filter',
  template: `
    <div class='card'>
        <div class='card-body'>
            <span>Filters: {{filters}} </span>
            <span class='reset' (click)="reset()">Reset</span>
        </div>
    </div>
  `,
  styles: [`
    .card { 
        padding: 5px;
        border: 2px solid #000;
        width: 400px;
        resize: both;
        overflow: auto;
    }
    .reset { float: right;
             padding-left: 5px; }
  `]
})
export class FilterComponent { 
    @Input() filters:string[];
    @Output() resetFilters:any = new EventEmitter();
    constructor(){
        this.filters=[];
    }
    
    ngOnInit(){
        this.filters = this.getUniqueFilters(this.filters);
    }

    getUniqueFilters(filters:string[]){
        return Array.from(new Set(Object.assign([],filters)));
    }

    reset(){
        this.filters=[];
        this.resetFilters.emit(this.filters);
    }

}