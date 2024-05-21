export interface Game {
  _id: string;
  category_id: string;
  description: string;
  image: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const GameDataInit: Game = {
  _id: "",
  category_id: "",
  description: "",
  image: "",
  name: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};
