import { Component, Input, OnInit } from '@angular/core';
import { MetadataUrlDto } from 'src/app/dto';
import { NavigationService } from 'src/app/services';

@Component({
  selector: 'app-url-preview',
  templateUrl: './url-preview.component.html',
  styleUrls: ['./url-preview.component.scss'],
})
export class UrlPreviewComponent implements OnInit {
  @Input() data!: MetadataUrlDto;

  constructor(public navigationService: NavigationService) {}

  ngOnInit(): void {}
  goToUrl(url: string) {
    this.navigationService.goToDokmeUrl(url);
  }
}
