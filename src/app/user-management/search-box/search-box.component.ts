import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
	@Input('placeholder')
	text="Default string,this param will be passed from the user of this component";

  	constructor() {

  	}

	ngOnInit() {

	}

	clear(input){
		console.log("clear input");
		input.value="";
	}
}
