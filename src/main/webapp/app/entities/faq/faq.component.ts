import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  public isCollapsedFirst = false;
  public isCollapsedSecond = true;
  public isCollapsedThird = true;
  public isCollapsedFourth = true;
  constructor() {}

  ngOnInit() {}
}
