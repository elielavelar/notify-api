import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { generateRandomToken } from '../../utils/utils';
import { Document } from 'mongoose';
import { Transform } from 'class-transformer';

export type GroupDocument = Group & Document;

@Schema()
export class Group {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({ type: String, required: true, unique: true })
  keyword?: string;

  @Prop({
    type: String,
    required: false,
    unique: true,
    default: generateRandomToken,
  })
  token: string;

  @Prop({ type: [String] })
  tags?: string[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);
