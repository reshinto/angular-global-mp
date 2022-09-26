export interface Course {
  id?: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated: boolean;
  authors?: [{ id: number; name: string; lastname: string }];
}
