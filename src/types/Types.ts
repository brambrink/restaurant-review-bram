export type RestaurantProps = {
  id: number;
  name: string;
  address: string;
  image: string;
  rating: number;
};

export type ReviewProps = {
  name: string;
  rating: number;
  comment: string;
  restaurantName: string;
  id?: number;
};
