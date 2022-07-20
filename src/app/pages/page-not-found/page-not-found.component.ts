import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {}

  goToHome() {
    this.navigationService.GoToHome();
  }
}
