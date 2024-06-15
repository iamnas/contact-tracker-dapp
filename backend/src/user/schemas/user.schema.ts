import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  transaction_hash: string;

  @Prop()
  block_timestamp: string;

  @Prop()
  block_number: number;

  @Prop()
  name: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop()
  time: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
