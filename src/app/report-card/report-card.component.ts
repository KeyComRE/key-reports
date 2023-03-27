import { Component } from '@angular/core';
import { REPORTS } from '../report-data';


@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
})
export class ReportCardComponent {

  reports = REPORTS;

  onSelect($event : any): void {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    this.reports.map((d) => {
      if (d.id == id){
        d.select = isChecked;
        if (d.select == true){
        d.print = ""
        }
        else {
        d.print = "noprint"
        }
      return d;
        
      }

      return d;
       
      
  })
  }

 
  printPage() {
        
    window.print();
        
}
}

