import { Task } from './task';

export interface User {
    name: string;
    favorites: Task;
    leastFavorites: Task;
    maximumWeight: number;
    color: string;
  }
