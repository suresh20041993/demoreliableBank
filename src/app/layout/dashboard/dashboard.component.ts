import { Component, OnInit ,ViewChild} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DashboardService } from './dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    values = new MatTableDataSource<any>();
    
   // Dashboad column names we need to create here
     displayedColumns: string[] = ['leadId','leadName','leadType','lead_mobileNumber','lead_sourceChannel','entryDate'];
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    // public alerts: Array<any> = [];
    // public sliders: Array<any> = [];


    salesLeadsAnalysis: any = {
		'Year_To_Date': 0,
		'Quarter_To_Date': 0,
		'Current_Month': 0,
		'Monthly_Growth': 0,
    } ;
    
    
    constructor(private DashboardService:DashboardService,){

        
    }
    

//    onView() {

//             this.DashboardService.view().subscribe((data : any)=>
//             {
//                   this.values=data.message;
//                     console.log(this.values);
//             }); 


            onView() {

                this.DashboardService.view().subscribe((data : any)=>
                {
                      this.values= new MatTableDataSource(data.message);
                        console.log(this.values);
                });

 }



   

    // constructor() {
    //     this.sliders.push(
    //         {
    //             imagePath: 'assets/images/slider1.jpg',
    //             label: 'First slide label',
    //             text:
    //                 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    //         },
    //         {
    //             imagePath: 'assets/images/slider2.jpg',
    //             label: 'Second slide label',
    //             text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    //         },
    //         {
    //             imagePath: 'assets/images/slider3.jpg',
    //             label: 'Third slide label',
    //             text:
    //                 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    //         }
    //     );

    //     this.alerts.push(
    //         {
    //             id: 1,
    //             type: 'success',
    //             message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //             Voluptates est animi quibusdam praesentium quam, et perspiciatis,
    //             consectetur velit culpa molestias dignissimos
    //             voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
    //         },
    //         {
    //             id: 2,
    //             type: 'warning',
    //             message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //             Voluptates est animi quibusdam praesentium quam, et perspiciatis,
    //             consectetur velit culpa molestias dignissimos
    //             voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
    //         }
    //     );
    // }

   

    ngOnInit() {

            this.onView();
            this.values.paginator = this.paginator;

    }

   




    // analysisSalesLeadList() {
	// 	const userDetails = this.DashboardService.getuserLoginDetails();
	// 	const analysisSalesLeadListBody = 'processVariables=' + JSON.stringify({
	// 		// 'processId': '38daf132ac4b11e8a78b0e1da0678571',
	// 		'processId': '174cc2deac4b11e8a78b0e1da0678571',
	// 		'ProcessVariables': {'userId': userDetails.uid},
	// 		'projectId': 'ee9503dc9c4d11e7a78b0e1da0678571'
	// 	});

	// 	this.DashboardService.StatusLeadsList(analysisSalesLeadListBody).subscribe(res => {
	// 		console.log(' analysis of sales lead list', res);
	// 		this.salesLeadsAnalysis = res.ProcessVariables.LeadStatics[0];
        
	// 	});
	// }


}
