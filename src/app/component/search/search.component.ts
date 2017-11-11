import { TitleService } from './../../service/title.service';
import { FetchdataService } from './../../service/fetchdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FetchdataService]
})
export class SearchComponent implements OnInit {
  data:any;
  constructor(private route:ActivatedRoute,private router:Router,private fetchService:FetchdataService,private titleService:TitleService) { 
    this.titleService.changeTitle("Tìm kiếm");
  }
  onSearch(searchInput:string){
    this.router.navigate(['/search/'+searchInput]);
  }
  ngOnInit() {
    this.route.params.subscribe(
      param => {
        if(param['key']){
          this.fetchService.fetchDataMethodGet('search/'+param['key']).subscribe(
            data => {
              console.log(data);
              this.data = data['data'];
            },
            error => {}
          );
        }
      }
    )
  }

}
