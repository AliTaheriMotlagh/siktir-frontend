import { Component, OnInit } from '@angular/core';
import { AuthDto } from 'src/app/dto';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  getMyData() {
    const dto: AuthDto = {
      fingerPrint: this.authService.fingerprint,
    };

    this.authService.Register(dto).subscribe((res) => {
      debugger;
    });
  }
}
