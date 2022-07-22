import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DokmeDto } from 'src/app/dto';
import { DokmeService } from 'src/app/services';

@Component({
  selector: 'app-list-dokme',
  templateUrl: './list-dokme.component.html',
  styleUrls: ['./list-dokme.component.scss'],
})
export class ListDokmeComponent implements OnInit {
  dokmeList: DokmeDto[] = [];
  @Output() DokmeSiktirHandler = new EventEmitter();
  @Input() set UpdateItem(v: DokmeDto | null) {
    if (v) {
      const index = this.dokmeList.findIndex((i) => i.id == v.id);
      this.dokmeList[index] = v;
    }
  }
  constructor(private dokmeService: DokmeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dokmeService.GetAllDokme().subscribe((res) => {
      this.dokmeList = res;
    });
  }

  dokmeSiktirHandler(dokmeId: string) {
    this.DokmeSiktirHandler.emit(dokmeId);
  }
}
