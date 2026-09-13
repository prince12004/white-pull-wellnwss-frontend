import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UpdateSettingsDto } from './dto/update-settings.dto';
import { Settings, SettingsDocument } from './schemas/settings.schema';

@Injectable()
export class SettingsService {
  constructor(@InjectModel(Settings.name) private settingsModel: Model<SettingsDocument>) {}

  /** Singleton pattern: there is always exactly one Settings document. */
  async getSingleton(): Promise<SettingsDocument> {
    let settings = await this.settingsModel.findOne();
    if (!settings) {
      settings = await this.settingsModel.create({});
    }
    return settings;
  }

  async update(dto: UpdateSettingsDto, actorId: string) {
    const settings = await this.getSingleton();
    const before = settings.toObject();

    Object.assign(settings, {
      ...dto,
      socialLinks: dto.socialLinks ? { ...settings.socialLinks, ...dto.socialLinks } : settings.socialLinks,
      marketingPixels: dto.marketingPixels
        ? { ...settings.marketingPixels, ...dto.marketingPixels }
        : settings.marketingPixels,
      seoDefaults: dto.seoDefaults ? { ...settings.seoDefaults, ...dto.seoDefaults } : settings.seoDefaults,
      address: dto.address ? { ...settings.address, ...dto.address } : settings.address,
    });
    settings.updatedBy = new Types.ObjectId(actorId);
    await settings.save();

    return { settings, before };
  }
}
