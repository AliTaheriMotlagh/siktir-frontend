import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DokmeDto, FireSiktirDto, SelectOptionDto } from 'src/app/dto';
import { SiktirService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  updateItem: DokmeDto | null = null;
  private ngUnsubscribe = new Subject<void>();
  constructor(private siktirService: SiktirService) {}

  ngOnInit(): void {}

  dokmeSiktirHandler(dokmeId: string) {
    const dto: FireSiktirDto = {
      dokmeId,
    };

    this.siktirService
      .FireSiktir(dto)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.updateItem = res;
      });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
