
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  private static breads: any;
  public bread: any;
  private static headerStatic: string;
  public header: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bread = BreadCrumbComponent.breads;
    this.header = BreadCrumbComponent.headerStatic;
  }

  

  public setBreads(data: any){
    BreadCrumbComponent.breads = data;
  }

  public setHeader(data: string){
    BreadCrumbComponent.headerStatic = data;
  }

}
