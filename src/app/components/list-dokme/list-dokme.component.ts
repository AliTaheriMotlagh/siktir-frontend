import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DokmeDto, MetadataUrlDto, MySiktirsDto } from 'src/app/dto';
import {
  DokmeService,
  NavigationService,
  SiktirService,
} from 'src/app/services';
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
  urlItem: MetadataUrlDto = {
    description: 'Bahram · Single · 2021 · 1 songs.',
    img: 'https://pbs.twimg.com/card_img/1549074405657034754/y0Tq-qxy?format=jpg&name=240x240',
    hostname: 'https://open.spotify.com',
    icon: 'https://open.spotify.com/favicon.ico',
    title: 'بشنو',
    url: 'https://open.spotify.com/album/5ayHMAS0qRZWlVYxP2F2uz',
  };

  constructor(
    private dokmeService: DokmeService,
    private siktirService: SiktirService,
    private navigationService: NavigationService
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
    audio.src = '/assets/sounds/beep.wav';
    audio.load();
    audio.play();
  }

  goToUrl(url: string) {
    this.navigationService.goToDokmeUrl(url);
  }
}
