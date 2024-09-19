import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { generateRandomToken } from '../../utils/utils';
import { Transform } from 'class-transformer';

export type DiffusionDocument = Diffusion & Document;

@Schema()
export class Diffusion {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop({
    type: String,
    required: true,
    default: generateRandomToken,
    unique: true,
  })
  token: string;

  @Prop({ type: Boolean, required: false, default: false })
  applied: boolean;

  @Prop({ type: [String], required: false })
  targets?: string[];

  @Prop({ type: [String], required: false })
  tags?: string[];

  @Prop({ type: [String] })
  groups: string[];

  @Prop({ type: String, required: false, default: Date.now })
  created_at: Date;

  @Prop({ type: String, required: false })
  applied_at: Date;
}

export const DiffusionSchema = SchemaFactory.createForClass(Diffusion);
