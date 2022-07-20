import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateDokmeDto } from 'src/app/dto';
import { NavigationService } from 'src/app/services';
import { DokmeService } from 'src/app/services/dokme.service';

@Component({
  selector: 'app-create-dokme',
  templateUrl: './create-dokme.component.html',
  styleUrls: ['./create-dokme.component.scss']
})
export class CreateDokmeComponent implements OnInit {

  form = new FormGroup({
    url: new FormControl('https://', [
      Validators.required,
      Validators.pattern(
        '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$' //Todo : validate url prefctly
      ),
    ]),
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(31),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(256),
    ]),
  });

  constructor(
    private dokmeService: DokmeService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {}
  saveBtnHandler() {
    if (this.form.valid) {
      const dto: CreateDokmeDto = this.form.getRawValue();
      this.dokmeService.createDokme(dto).subscribe((res) => {
        this.navigationService.goToHome();
      });
    }
  }
  goToHome() {
    this.navigationService.goToHome();
  }

}
