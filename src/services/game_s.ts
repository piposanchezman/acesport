import { ApiProps, apiResponse } from "context/ApiContext";
import { Game } from "interfaces/game";

export const getGames = async (
  backendApiCall: (data: ApiProps) => Promise<apiResponse>
): Promise<apiResponse> => {
  return await backendApiCall({ method: "GET", endpoint: "v1/games/all" });
};
