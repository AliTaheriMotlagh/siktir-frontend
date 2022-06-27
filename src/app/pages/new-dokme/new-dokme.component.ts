import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DokmeDto } from 'src/app/dto';
import { DokmeService } from 'src/app/services/dokme.service';

@Component({
  selector: 'app-new-dokme',
  templateUrl: './new-dokme.component.html',
  styleUrls: ['./new-dokme.component.scss'],
})
export class NewDokmeComponent implements OnInit {
  form = new FormGroup({
    url: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$' //Todo : validate url prefctly
      ),
    ]),
    title: new FormControl('', [Validators.required, Validators.maxLength(31)]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(256),
    ]),
  });

  constructor(private dokmeService: DokmeService) {}

  ngOnInit(): void {}
  saveBtnHandler() {
    if (this.form.valid) {
      const dto: DokmeDto = this.form.getRawValue();
      this.dokmeService.createDokme(dto).subscribe((res) => {
        debugger;
      });
    }
  }
}
