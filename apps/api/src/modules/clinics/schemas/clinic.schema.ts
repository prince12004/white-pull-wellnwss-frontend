import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ClinicDocument = HydratedDocument<Clinic>;

/**
 * Bare stub — only exists so User.clinicScope and Settings.whatsappNumbers[].clinicId
 * can be real ObjectId refs from day one. The full Clinics module (address, hours,
 * doctors, services, gallery, SEO) is built in a later phase.
 */
@Schema({ timestamps: true })
export class Clinic extends Document {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true, unique: true, index: true })
  slug!: string;

  @Prop({ default: true })
  isActive!: boolean;
}

export const ClinicSchema = SchemaFactory.createForClass(Clinic);
