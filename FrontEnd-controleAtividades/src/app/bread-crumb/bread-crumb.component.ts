
import { Component, OnInit } from '@angular/core';

import { BreadCrumbService } from "./bread-crumb.service";

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css'],
  providers: [BreadCrumbService]
})
export class BreadCrumbComponent implements OnInit {

  breads: any;

  constructor(private service: BreadCrumbService) { }

  ngOnInit() {
    //this.breads = this.service.getBreads();
  }

}
