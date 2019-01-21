import { Component,OnInit ,ViewChild } from '@angular/core';
import { LeadsearchService } from './leadsearch.service';
import {MatPaginator, MatSort,MatTableDataSource} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-leadsearch',
  templateUrl: './leadsearch.component.html',
  styleUrls: ['./leadsearch.component.scss']
})
export class LeadsearchComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['leadId','leadName','leadType','lead_mobileNumber','lead_sourceChannel','entryDate'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

	Action = [{'Id': '1',	'action': 'Facilities'},
						{'Id': '2', 'action': 'View'},
						{'Id': '3',	'action': 'Call Log'},
						{'Id': '4',	'action': 'Visit Log'},
						{'Id': '5',	'action': 'Reassign Lead'},
						{'Id': '6',	'action': 'Product Suggestions'}];

  constructor(private LeadsearchService: LeadsearchService) { }

  ngOnInit() {
  //  this.onSearch();
 this.dataSource.paginator = this.paginator;
  }


  onSearch(searchInput) {


    const salesLeadListBody = {'leadName': searchInput}
		

    this.LeadsearchService.searchLeadList(salesLeadListBody).subscribe((data : any)=>
    {
          this.dataSource= new MatTableDataSource(data.message);
            console.log(this.dataSource);
    });

}







}
