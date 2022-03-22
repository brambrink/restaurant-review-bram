import { RestaurantProps } from "../../types/Types";
import { NotFoundError } from "../../errors/not-found-error";

export const getRestaurants = async (): Promise<RestaurantProps[]> => {
  return fetch(`http://localhost:3004/restaurants`)
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
