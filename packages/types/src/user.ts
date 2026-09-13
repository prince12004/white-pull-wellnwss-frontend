export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';

export interface User {
  id: string;
  name: string;
  email: string;
  role: RoleRef;
  status: UserStatus;
  avatarUrl: string | null;
  phone: string | null;
  lastLoginAt: string | null;
  mustChangePassword: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RoleRef {
  id: string;
  key: string;
  label: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  roleId: string;
  phone?: string;
}

export interface UpdateUserInput {
  name?: string;
  roleId?: string;
  status?: UserStatus;
  phone?: string;
}
