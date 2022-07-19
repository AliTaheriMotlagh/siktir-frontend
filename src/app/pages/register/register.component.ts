import { Component, OnInit } from '@angular/core';
import { FingerprintjsProAngularService } from '@fingerprintjs/fingerprintjs-pro-angular';
import { AuthDto } from 'src/app/dto';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  visitorId: string = '';
  constructor(
    private fingerprintjsProAngularService: FingerprintjsProAngularService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getVisitorId();
  }

  getMyData() {
    const dto: AuthDto = {
      fingerPrint: this.visitorId,
    };

    this.authService.Register(dto).subscribe((res) => {
      debugger;
    });
  }

  async getVisitorId() {
    const data = await this.fingerprintjsProAngularService.getVisitorData();
    this.visitorId = data.visitorId;
  }
}
