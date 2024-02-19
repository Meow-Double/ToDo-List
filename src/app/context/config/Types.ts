export interface IGroups {
  id: number;
  text: string;
}

export type ITasks = { id: number; text: string; groupId: number; done: boolean };
