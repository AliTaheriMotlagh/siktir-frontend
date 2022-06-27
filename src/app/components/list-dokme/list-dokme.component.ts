import { Component, OnInit } from '@angular/core';
import { DokmeDto } from 'src/app/dto';
import { DokmeService } from 'src/app/services';

@Component({
  selector: 'app-list-dokme',
  templateUrl: './list-dokme.component.html',
  styleUrls: ['./list-dokme.component.scss'],
})
export class ListDokmeComponent implements OnInit {
  constructor(private dokmeService: DokmeService) {}
  dokmeList: DokmeDto[] = [];

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.dokmeService.getAllDokme().subscribe((res: any) => {
      this.dokmeList = res;
      debugger;
    });
  }
}
