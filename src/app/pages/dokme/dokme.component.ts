import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DokmeDto,
  FireSiktirDto,
  MetadataUrlDto,
  MySiktirsDto,
} from 'src/app/dto';
import {
  DokmeService,
  NavigationService,
  SiktirService,
} from 'src/app/services';

@Component({
  selector: 'app-dokme',
  templateUrl: './dokme.component.html',
  styleUrls: ['./dokme.component.scss'],
})
export class DokmeComponent implements OnInit {
  dokmeId = '';
  item!: DokmeDto;
  mySiktirs: MySiktirsDto[] = [];
  constructor(
    private route: ActivatedRoute,
    private dokmeService: DokmeService,
    private siktirService: SiktirService,
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.dokmeId = params['id'];
      this.loadData();
    });
  }
  loadData() {
    this.dokmeService.GetDokmeById(this.dokmeId).subscribe((res) => {
      this.item = res;
    });
    this.siktirService.GetUserSiktir().subscribe((res) => {
      this.mySiktirs = res;
    });
  }

  canSiktir(dokmeId: string): boolean {
    return !!this.mySiktirs.find((i) => i.dokmeId === dokmeId);
  }

  dokmeSiktirHandler(dokmeId: string) {
    const dto: FireSiktirDto = {
      dokmeId,
    };

    this.siktirService.FireSiktir(dto).subscribe((res) => {
      this.item = res;
      this.mySiktirs.push({ dokmeId: res.id });
    });
    this.vibrate();
    this.makeNoise();
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
}
