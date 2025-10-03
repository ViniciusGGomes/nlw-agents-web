export type GetRoomResponse = Array<{
  id: string;
  name: string;
  createdAt: string;
  questionsCount: number;
}>;