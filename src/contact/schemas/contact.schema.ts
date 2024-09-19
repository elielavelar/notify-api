import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { generateRandomToken } from '../../utils/utils';
import { Document } from 'mongoose';
import { Transform } from 'class-transformer';
import { Group } from '../../group/schemas/group.schema';
import { NotificationType } from 'src/notification/schemas/notification.schema';
import { IContactValue } from '../interfaces/contact-value.interface';

export type ContactDocument = Contact & Document;

export enum ContactType {
  'email' = NotificationType.email,
  'message' = NotificationType.message,
}

export enum ContactCategoryType {
  'group' = 'group',
  'user' = 'user',
}

@Schema()
export class Contact {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: false,
    unique: true,
    default: generateRandomToken,
  })
  token: string;

  @Prop({ type: String, required: false, unique: true })
  userId: string;

  @Prop({ type: String, required: true })
  type: ContactType;

  @Prop({ type: String, required: true })
  contactCategoryType: ContactCategoryType;

  @Prop()
  values: IContactValue;

  @Prop({ type: [Group] })
  groups: Group[];
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
