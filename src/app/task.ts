import { User } from './user';

export interface Task {
    name: string;
    description: string;
    weight: number;
    users: User;
  }
