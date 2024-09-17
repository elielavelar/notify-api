export interface INotification {
  title: string;
  message: string;
  link: string;
  level: string;
  type: string;
}
export interface INotificationList {
  items: INotification[];
  total: number;
  page: number;
  limit: number;
}
