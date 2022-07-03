import { INotificationsService } from '../cart';

export class NotificationsService implements INotificationsService {
    public notifySuccess(message: string): void {
      window.alert(message);
    }

    public notifyError(message: string): void {
      console.error(message);
    }
}
