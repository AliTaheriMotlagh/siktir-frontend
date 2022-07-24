import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DokmeDto, MySiktirsDto } from 'src/app/dto';
import { DokmeService, SiktirService } from 'src/app/services';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-dokme',
  templateUrl: './list-dokme.component.html',
  styleUrls: ['./list-dokme.component.scss'],
})
export class ListDokmeComponent implements OnInit {
  dokmeList: DokmeDto[] = [];
  mySiktirs: MySiktirsDto[] = [];
  isDokmeLoading = false;
  @Output() DokmeSiktirHandler = new EventEmitter();
  @Input() set UpdateItem(v: DokmeDto | null) {
    if (v) {
      const index = this.dokmeList.findIndex((i) => i.id == v.id);
      this.dokmeList[index] = v;
      this.mySiktirs.push({ dokmeId: v.id });
    }
  }

  constructor(
    private dokmeService: DokmeService,
    private siktirService: SiktirService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dokmeService.GetAllDokme().subscribe((res) => {
      this.dokmeList = res;
    });
    this.siktirService.GetMySiktir().subscribe((res) => {
      this.mySiktirs = res;
    });
  }

  dokmeSiktirHandler(dokmeId: string) {
    this.DokmeSiktirHandler.emit(dokmeId);
    this.vibrate();
    this.makeNoise();
  }

  canSiktir(dokmeId: string): boolean {
    return !!this.mySiktirs.find((i) => i.dokmeId === dokmeId);
  }

  vibrate() {
    if (!window.navigator.vibrate) {
      return;
    }
    navigator.vibrate([200]);
  }

  makeNoise() {
    var audio = new Audio();
    audio.src = "/assets/sounds/beep.wav";
    audio.load();
    audio.play();
  }

  getScreenshotOfUrl(dokmeUrl: string) {
    return `https://api.apiflash.com/v1/urltoimage?access_key=${environment.screenshotApiKey}&wait_until=page_loaded&url=${dokmeUrl}`;
  }

  transform(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
