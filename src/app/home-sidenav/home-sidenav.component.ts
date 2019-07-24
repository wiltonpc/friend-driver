import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home-sidenav',
  templateUrl: './home-sidenav.component.html',
  styleUrls: ['./home-sidenav.component.less']
})

export class HomeSidenavComponent implements OnInit {
  x = true;
  mode = !this.x;
 constructor() { }

  ngOnInit() {
  }

}
