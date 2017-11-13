import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-tag',
  templateUrl: './list-tag.component.html',
  styleUrls: ['./list-tag.component.css']
})
export class ListTagComponent implements OnInit {
  @Input()tags:any;
  constructor() { }

  ngOnInit() {
  }

}
