export interface INotificationsService {
  notifySuccess(message: string): void;
  notifyError(message: string): void;
}
