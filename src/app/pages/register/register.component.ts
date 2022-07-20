import { Component, OnInit } from '@angular/core';
import { AuthDto } from 'src/app/dto';
import { AuthService, NavigationService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {}

  async getMyData() {
    const dto: AuthDto = {
      fingerPrint: await this.authService.GetFingerprint(),
    };

    this.authService.Register(dto).subscribe(() => {
      this.navigationService.goToHome();
    });
  }
}
