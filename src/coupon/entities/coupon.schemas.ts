import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Category } from '../../category/entities/category.schema';

export type CouponDocument = Coupon & Document;

@Schema()
export class Coupon {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({ required: true })
  dateExpiry: number;

  @Prop({ required: true })
  status: string;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
