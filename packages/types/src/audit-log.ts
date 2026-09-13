export type AuditAction =
  | 'LOGIN'
  | 'LOGOUT'
  | 'CREATE'
  | 'UPDATE'
  | 'DELETE'
  | 'PUBLISH'
  | 'UNPUBLISH'
  | 'STATUS_CHANGE'
  | 'PASSWORD_CHANGE';

export interface AuditLog {
  id: string;
  actor: { id: string; name: string } | null;
  actorEmail: string;
  action: AuditAction;
  module: string;
  entityId: string | null;
  entityLabel: string | null;
  before: Record<string, unknown> | null;
  after: Record<string, unknown> | null;
  ipAddress: string | null;
  userAgent: string | null;
  createdAt: string;
}
