export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type CreateUser = Omit<User, 'id'>;

export interface UpdateUser {
  name?: string;
  email?: string;
}

export interface UpdatePassword {
  oldPassword: string;
  newPassword: string;
}

export interface UserFormControl {
  name?: string;
  email: string;
  password?: string;
}

export interface AuthenticatedUser extends User {
  token: string;
}

export interface Login {
  email: string;
  password: string;
}
