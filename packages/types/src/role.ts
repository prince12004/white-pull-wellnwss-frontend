export type PermissionAction = 'create' | 'read' | 'update' | 'delete' | 'publish' | 'manage';

export interface Permission {
  id: string;
  key: string;
  module: string;
  action: PermissionAction;
  description: string | null;
}

export interface Role {
  id: string;
  key: string;
  label: string;
  description: string | null;
  permissions: Permission[];
  isSystem: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateRoleInput {
  key: string;
  label: string;
  description?: string;
  permissionIds: string[];
}

export interface UpdateRoleInput {
  label?: string;
  description?: string;
  permissionIds?: string[];
}
