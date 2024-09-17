import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { generateRandomToken } from '../../utils/utils';
import { Transform } from 'class-transformer';

export type NotificationDocument = Notification & Document;

export enum NotificationStatus {
  unread = 'unread',
  read = 'read',
  sent = 'sent',
}

export enum NotificationType {
  notification = 'notification',
  message = 'message',
  email = 'email',
  inApp = 'in-app',
  event = 'event',
  other = 'other',
}

export enum NotificationLevel {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

@Schema()
export class Notification {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop({ type: String, required: true })
  message: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: false, default: Date.now })
  created_at: Date;

  @Prop({ type: String, required: false, default: Date.now })
  updated_at: Date;

  @Prop({ type: String, required: false })
  link: string;

  @Prop({
    type: String,
    required: false,
    enum: [
      NotificationStatus.unread,
      NotificationStatus.read,
      NotificationStatus.sent,
    ],
    default: NotificationStatus.unread,
  })
  status: string;

  @Prop({ type: String, required: true })
  applicationId: string;

  @Prop({ type: String, required: true })
  userId: string;

  @Prop({
    type: String,
    required: true,
    enum: [
      NotificationType.notification,
      NotificationType.email,
      NotificationType.inApp,
      NotificationType.message,
      NotificationType.event,
      NotificationType.other,
    ],
    default: NotificationType.inApp,
  })
  type: string;

  @Prop({
    type: String,
    required: false,
    unique: true,
    default: generateRandomToken,
  })
  token: string;

  @Prop({ type: Boolean, required: false, default: false })
  pinned: boolean;

  @Prop({
    type: String,
    required: false,
    enum: [
      NotificationLevel.info,
      NotificationLevel.success,
      NotificationLevel.warning,
      NotificationLevel.error,
    ],
    default: NotificationLevel.info,
  })
  level: NotificationLevel;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
