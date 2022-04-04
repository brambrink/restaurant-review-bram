import { NotFoundError } from "../../errors/not-found-error";

import { ReviewProps } from "../../types/Types";

export const addReview = async (newReview: ReviewProps) => {
  return fetch(`http://localhost:3004/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReview),
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
