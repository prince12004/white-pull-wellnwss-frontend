'use client';

import { useCallback, useEffect, useState } from 'react';
import type { PaginatedResponse, Role, User } from '@white/types';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  useToast,
} from '@white/ui';
import { apiClient, ApiRequestError } from '@/lib/api-client';
import { UserFormDialog } from '@/components/users/user-form-dialog';

const STATUS_VARIANT: Record<User['status'], 'success' | 'warning' | 'destructive'> = {
  ACTIVE: 'success',
  INACTIVE: 'warning',
  SUSPENDED: 'destructive',
};

export default function UsersPage() {
  const { toast } = useToast();
  const [users, setUsers] = useState<PaginatedResponse<User> | null>(null);
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [suspendTarget, setSuspendTarget] = useState<User | null>(null);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiClient.get<PaginatedResponse<User>>('/users?pageSize=50');
      setUsers(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
    apiClient.get<Role[]>('/roles').then(setRoles);
  }, [loadUsers]);

  async function handleSuspend() {
    if (!suspendTarget) return;
    try {
      await apiClient.delete(`/users/${suspendTarget.id}`);
      toast({ title: `${suspendTarget.name} suspended` });
      setSuspendTarget(null);
      loadUsers();
    } catch (err) {
      toast({
        title: 'Could not suspend user',
        description: err instanceof ApiRequestError ? err.message : undefined,
        variant: 'destructive',
      });
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-charcoal-900">Users</h1>
          <p className="mt-1 text-sm text-charcoal-500">Admin, clinic, and content team accounts.</p>
        </div>
        <Button
          onClick={() => {
            setEditingUser(null);
            setDialogOpen(true);
          }}
        >
          New user
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All users</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-sm text-charcoal-500">Loading…</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last login</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {users?.items.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium text-charcoal-900">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role?.label ?? '—'}</TableCell>
                    <TableCell>
                      <Badge variant={STATUS_VARIANT[user.status]}>{user.status}</Badge>
                    </TableCell>
                    <TableCell>{user.lastLoginAt ? new Date(user.lastLoginAt).toLocaleString() : 'Never'}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setEditingUser(user);
                            setDialogOpen(true);
                          }}
                        >
                          Edit
                        </Button>
                        {user.status !== 'SUSPENDED' && (
                          <Button size="sm" variant="destructive" onClick={() => setSuspendTarget(user)}>
                            Suspend
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <UserFormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        roles={roles}
        user={editingUser}
        onSaved={loadUsers}
      />

      <Dialog open={Boolean(suspendTarget)} onOpenChange={(open) => !open && setSuspendTarget(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Suspend {suspendTarget?.name}?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-charcoal-500">
            They will no longer be able to sign in. This can be reversed by editing their status back to Active.
          </p>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setSuspendTarget(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleSuspend}>
              Suspend
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
