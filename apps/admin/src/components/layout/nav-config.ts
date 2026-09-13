export interface NavItem {
  label: string;
  href: string;
  /** Required permission key, or null if visible to any authenticated admin user. */
  permission: string | null;
  status: 'active' | 'placeholder';
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

/**
 * Single source of truth for the admin sidebar. Later phases add items to the
 * relevant section and flip `status` to 'active' as each module gets built —
 * no restructuring needed.
 */
export const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Overview',
    items: [{ label: 'Dashboard', href: '/dashboard', permission: null, status: 'active' }],
  },
  {
    label: 'CRM',
    items: [
      { label: 'Leads', href: '/leads', permission: 'leads:read', status: 'placeholder' },
      { label: 'Campaigns', href: '/campaigns', permission: 'campaigns:read', status: 'placeholder' },
    ],
  },
  {
    label: 'Content',
    items: [
      { label: 'Services', href: '/services', permission: 'services:read', status: 'placeholder' },
      { label: 'Concerns', href: '/concerns', permission: 'concerns:read', status: 'placeholder' },
      { label: 'Packages', href: '/packages', permission: 'packages:read', status: 'placeholder' },
      { label: 'Doctors', href: '/doctors', permission: 'doctors:read', status: 'placeholder' },
      { label: 'Clinics', href: '/clinics', permission: 'clinics:read', status: 'placeholder' },
      { label: 'Before & After', href: '/before-after', permission: 'before-after:read', status: 'placeholder' },
      { label: 'Offers', href: '/offers', permission: 'offers:read', status: 'placeholder' },
      { label: 'Testimonials', href: '/testimonials', permission: 'testimonials:read', status: 'placeholder' },
      { label: 'Blogs', href: '/blogs', permission: 'blogs:read', status: 'placeholder' },
      { label: 'FAQs', href: '/faqs', permission: 'faqs:read', status: 'placeholder' },
      { label: 'Gallery', href: '/gallery', permission: 'gallery:read', status: 'placeholder' },
      { label: 'Homepage CMS', href: '/homepage-cms', permission: 'homepage-cms:read', status: 'placeholder' },
      { label: 'Page Builder', href: '/page-builder', permission: 'page-builder:read', status: 'placeholder' },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'Analytics', href: '/analytics', permission: 'analytics:read', status: 'placeholder' },
      { label: 'SEO', href: '/seo', permission: 'seo:read', status: 'placeholder' },
    ],
  },
  {
    label: 'Administration',
    items: [
      { label: 'Users', href: '/users', permission: 'users:read', status: 'active' },
      { label: 'Roles & Permissions', href: '/roles', permission: 'roles:read', status: 'active' },
      { label: 'Settings', href: '/settings', permission: 'settings:read', status: 'active' },
      { label: 'Audit Log', href: '/audit-log', permission: 'audit-log:read', status: 'active' },
    ],
  },
];
