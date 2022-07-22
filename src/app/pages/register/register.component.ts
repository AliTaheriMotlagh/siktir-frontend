import { Component, OnInit } from '@angular/core';
import { AuthDto } from 'src/app/dto';
import {
  AuthService,
  NavigationService,
  NotificationService,
} from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  async getMyData() {
    const fp = await this.authService.GetFingerprint();
    if (!fp) {
      this.notificationService.OpenError('your ad block is on');
      return;
    }
    const dto: AuthDto = {
      fingerPrint: fp,
    };

    this.authService.Register(dto).subscribe(() => {
      this.navigationService.GoToHome();
    });
  }
}
