import { ApiProps, apiResponse } from "context/ApiContext";
import { Category } from "interfaces/category";

export const getCategories = async (
  backendApiCall: (data: ApiProps) => Promise<apiResponse>
): Promise<apiResponse> => {
  return await backendApiCall({ method: "GET", endpoint: "v1/categories/all" });
};
