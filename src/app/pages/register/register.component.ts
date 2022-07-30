import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
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
export class RegisterComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  async getMyData() {
    try {
      const dto: AuthDto = {
        fingerPrint: await this.authService.GetFingerprint(),
      };

      this.authService
        .Register(dto)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(() => {
          this.navigationService.GoToHome();
        });
    } catch (error) {
      this.notificationService.OpenError('your ad block is on');
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
