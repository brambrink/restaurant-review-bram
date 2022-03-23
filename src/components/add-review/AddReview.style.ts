import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  addReview: {
    fontSize: 28,
    fontWeight: "600",
    paddingTop: 20,
    textAlign: "center",
  },
  name: {
    backgroundColor: "#FAEDCA",
    borderRadius: 4,
    height: 40,
    marginTop: 20,
    padding: 10,
    width: "auto",
  },
  rating: {
    fontSize: 18,
    fontWeight: "500",
  },
  stars: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  starButton: {
    padding: 5,
  },
  comment: {
    backgroundColor: "#FAEDCA",
    borderRadius: 4,
    height: 200,
    marginTop: 10,
    maxHeight: 200,
    padding: 10,
    width: "auto",
  },
  button: {
    backgroundColor: "#7EBC89",
    borderRadius: 3,
    marginTop: 40,
    padding: 10,
    width: "auto",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },

  indicator: {
    padding: 20,
  },
});
