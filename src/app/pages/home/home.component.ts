import { Component, OnInit } from '@angular/core';
import { DokmeDto, FireSiktirDto, SelectOptionDto } from 'src/app/dto';
import { NavigationService, SiktirService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  updateItem: DokmeDto | null = null;
  constructor(
    private siktirService: SiktirService,
    private navigationService: NavigationService
  ) {}


  ngOnInit(): void {}

  goToNewDokme() {
    this.navigationService.GoToNewDokme();
  }

  dokmeSiktirHandler(dokmeId: string) {
    const dto: FireSiktirDto = {
      dokmeId,
    };

    this.siktirService.FireSiktir(dto).subscribe((res) => {
      this.updateItem = res;
    });
  }
}
