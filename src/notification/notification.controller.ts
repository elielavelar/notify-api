import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import {
  NotificationLevel,
  NotificationStatus,
  NotificationType,
} from './schemas/notification.schema';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    return this.notificationService.update(id, updateNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationService.remove(id);
  }

  @Get(':id/markAsRead')
  markAsRead(@Param('id') id: string) {
    return this.notificationService.markAsRead(id);
  }

  @Get(':id/markAsUnread')
  markAsUnread(@Param('id') id: string) {
    return this.notificationService.markAsUnread(id);
  }

  @Get(':id/pin')
  spin(@Param('id') id: string) {
    return this.notificationService.pin(id);
  }

  @Get()
  async filterNotifications(
    @Query('applicationId') applicationId?: string,
    @Query('userId') userId?: string,
    @Query('status') status?: NotificationStatus,
    @Query('type') type?: NotificationType,
    @Query('level') level?: NotificationLevel,
  ): Promise<any> {
    return this.notificationService.filterNotifications({
      applicationId,
      userId,
      status,
      type,
      level,
    });
  }

  //Delete all notifications for a user
  @Get(':userId/deleteAll')
  deleteAll(@Param('userId') userId: string) {
    return this.notificationService.deleteByUserId(userId);
  }

  //Delete all read notifications for a user and not pinned
  @Get(':userId/deleteAllRead')
  deleteAllRead(@Param('userId') userId: string) {
    return this.notificationService.deleteReadByUserId(userId);
  }

  //Delete all notifications for application
  @Get(':applicationId/deleteAll')
  deleteAllByApplicationId(@Param('applicationId') applicationId: string) {
    return this.notificationService.deleteByApplicationId(applicationId);
  }
}
