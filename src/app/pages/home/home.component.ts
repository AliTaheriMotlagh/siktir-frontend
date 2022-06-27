import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {}
  goToNewDokme() {
    this.navigationService.goToNewDokme();
  }
}
