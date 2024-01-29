import { StaticImageData } from "next/image";

export interface reviewUser {
  userId: number;
  userName: string;
  userAvatar: StaticImageData;
  date: string;
  stars: number;
  reviewText: string;
};
