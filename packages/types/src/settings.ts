export interface WhatsappNumberEntry {
  clinicId: string | null;
  number: string;
  label: string | null;
}

export interface SocialLinks {
  instagram: string | null;
  facebook: string | null;
  youtube: string | null;
  linkedin: string | null;
  whatsappChannel: string | null;
}

export interface MarketingPixels {
  googleAnalyticsId: string | null;
  googleTagManagerId: string | null;
  metaPixelId: string | null;
  googleAdsConversionId: string | null;
}

export interface SeoDefaults {
  defaultTitle: string | null;
  defaultDescription: string | null;
  defaultOgImageUrl: string | null;
}

export interface BusinessHourEntry {
  day: string;
  open: string | null;
  close: string | null;
  isClosed: boolean;
}

export interface Address {
  line1: string | null;
  line2: string | null;
  city: string | null;
  state: string | null;
  pincode: string | null;
  country: string | null;
  mapEmbedUrl: string | null;
}

export interface Settings {
  businessName: string;
  legalName: string | null;
  logoUrl: string | null;
  faviconUrl: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  whatsappNumbers: WhatsappNumberEntry[];
  socialLinks: SocialLinks;
  marketingPixels: MarketingPixels;
  seoDefaults: SeoDefaults;
  businessHours: BusinessHourEntry[];
  address: Address;
  maintenanceMode: boolean;
  updatedAt: string;
}

export interface UpdateSettingsInput {
  businessName?: string;
  legalName?: string;
  logoUrl?: string;
  faviconUrl?: string;
  contactEmail?: string;
  contactPhone?: string;
  whatsappNumbers?: WhatsappNumberEntry[];
  socialLinks?: Partial<SocialLinks>;
  marketingPixels?: Partial<MarketingPixels>;
  seoDefaults?: Partial<SeoDefaults>;
  businessHours?: BusinessHourEntry[];
  address?: Partial<Address>;
  maintenanceMode?: boolean;
}
