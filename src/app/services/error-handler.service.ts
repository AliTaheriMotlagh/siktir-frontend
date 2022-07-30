import { ErrorHandler, Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private notificationService: NotificationService) {}

  handleError(error: any) {
    if (error.message) {
      this.notificationService.OpenError(error.message);
    } else {
      this.notificationService.OpenError(error);
    }
  }
}
