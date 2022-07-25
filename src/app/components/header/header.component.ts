import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public navigationService: NavigationService) {}

  ngOnInit(): void {}
}
