export interface Category {
  _id: string;
  description: string;
  name: string;
  user?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const CategoryDataInit: Category = {
  _id: "",
  description: "",
  name: "",
  user: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};
