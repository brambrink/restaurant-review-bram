import { ReviewProps } from "../../types/Types";
import { NotFoundError } from "../../errors/not-found-error";

export const getReviews = async (): Promise<ReviewProps[]> => {
  return fetch(`http://localhost:3004/reviews`)
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
