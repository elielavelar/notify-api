export class Notification {
  id: string;
  applicationId: string;
  userId: string;
  title: string;
  type: string;
  message: string;
  link: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  token: string;
  pinned: boolean;
  level: string;
}
