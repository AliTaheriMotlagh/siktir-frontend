import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { DokmeDto, MetadataUrlDto, MySiktirsDto } from 'src/app/dto';
import {
  DokmeService,
  NavigationService,
  SiktirService,
} from 'src/app/services';

@Component({
  selector: 'app-list-dokme',
  templateUrl: './list-dokme.component.html',
  styleUrls: ['./list-dokme.component.scss'],
})
export class ListDokmeComponent implements OnInit, OnDestroy {
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

  private ngUnsubscribe = new Subject<void>();

  constructor(
    private dokmeService: DokmeService,
    private siktirService: SiktirService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    const source = interval(30000).pipe(takeUntil(this.ngUnsubscribe));
    source.subscribe((val) => this.loadData());
    this.loadData();
  }

  loadData() {
    this.dokmeService
      .GetAllDokme()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.dokmeList = res;
      });
    this.siktirService
      .GetUserSiktir()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
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
    this.navigationService.GoToDokmeUrl(url);
  }

  getUrlMetadata(data: DokmeDto): MetadataUrlDto {
    return {
      title: data.urlTitle,
      description: data.urlDescription,
      icon: data.urlIcon,
      img: data.urlImg,
      hostname: new URL(data.url).hostname,
      url: data.url,
    };
  }

  goToDokme(dokmeId: string) {
    this.navigationService.GoToDokme(dokmeId);
  }

  GetAbsoloteUrlOfDokme(dokmeId: string) {
    return this.navigationService.GetAbsoloteUrlOfDokme(dokmeId);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
