import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  NotificationStatus,
  Notification,
  NotificationDocument,
} from './schemas/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel('Notification')
    private readonly notificationModel: Model<NotificationDocument>,
  ) {}

  create(_createNotificationDto: CreateNotificationDto) {
    console.table(_createNotificationDto);
    return this.notificationModel.create(_createNotificationDto);
  }

  async findAll(): Promise<Notification[]> {
    console.log('Performing query: findAll');
    return this.notificationModel.find().exec();
  }

  async findOne(id: string): Promise<Notification> {
    console.log('Performing query: findOne', id);
    return this.notificationModel.findOne({ _id: id }).exec();
  }

  update(id: string, _updateNotificationDto: UpdateNotificationDto) {
    console.log('Performing query: update', id, _updateNotificationDto);
    return this.notificationModel.findByIdAndUpdate(id, _updateNotificationDto);
  }

  async remove(id: string) {
    console.log('Performing query: remove', id);
    const result = await this.notificationModel.findByIdAndDelete(id);
    console.table(result.toJSON());
    return result;
  }

  async markAsRead(id: string) {
    console.log('Performing query: markAsRead', id);
    return this.notificationModel.findByIdAndUpdate(id, {
      status: NotificationStatus.read,
    });
  }

  async markAsUnread(id: string) {
    console.log('Performing query: markAsUnread', id);
    return this.notificationModel.findByIdAndUpdate(id, {
      status: NotificationStatus.unread,
    });
  }

  async pin(id: string) {
    const notification = await this.notificationModel.findOne({ _id: id });
    if (notification) {
      const model = notification.toJSON();
      const { pinned } = model;
      console.log('Performing query: pin notification', id, {
        pinned,
      });
      console.table(notification.toJSON());
      return this.notificationModel.findByIdAndUpdate(id, {
        pinned: !pinned,
      });
    }
    return 'Notification not found';
  }

  async filterNotifications(filter: {
    applicationId?: string;
    userId?: string;
    status?: string;
    type?: string;
    level?: string;
  }): Promise<Notification[]> {
    const query = this.notificationModel.find();

    if (filter.applicationId) {
      query.where('applicationId', filter.applicationId);
    }

    if (filter.userId) {
      query.where('userId', filter.userId);
    }
    if (filter.status) {
      query.where('status', filter.status);
    }
    if (filter.type) {
      query.where('type', filter.type);
    }
    if (filter.level) {
      query.where('level', filter.level);
    }

    console.log('Performing query: filterNotifications', filter);

    return query.exec();
  }

  async deleteByUserId(userId: string) {
    return this.notificationModel.deleteMany({ userId });
  }

  //Delete all read notifications for a user and not pinned
  async deleteReadByUserId(userId: string) {
    return this.notificationModel.deleteMany({
      userId,
      status: NotificationStatus.read,
      pinned: false,
    });
  }

  async deleteByApplicationId(applicationId: string) {
    return this.notificationModel.deleteMany({ applicationId });
  }

  async deleteByUserIdAndApplicationId(userId: string, applicationId: string) {
    return this.notificationModel.deleteMany({ userId, applicationId });
  }
}
