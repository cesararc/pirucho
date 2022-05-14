import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EditorialDocument = Editorial & Document;

@Schema()
export class Editorial {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const EditorialSchema = SchemaFactory.createForClass(Editorial);
