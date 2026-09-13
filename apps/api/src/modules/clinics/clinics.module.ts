import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Clinic, ClinicSchema } from './schemas/clinic.schema';

/**
 * Bare stub module — registers the Clinic collection so other Phase 1 schemas
 * (User.clinicScope, Settings.whatsappNumbers[].clinicId) can hold real ObjectId
 * refs. No controller/service yet; the full Clinics module (CRUD, admin UI, public
 * clinic locator pages) is built in its own phase.
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: Clinic.name, schema: ClinicSchema }])],
  exports: [MongooseModule],
})
export class ClinicsModule {}
