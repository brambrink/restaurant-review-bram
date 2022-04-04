import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  stars: {
    backgroundColor: "white",
    borderRadius: 4,
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 66,
  },
  header: {
    height: "auto",
    flexDirection: "row",
    backgroundColor: "#FAEDCA",
  },
  image: {
    borderRadius: 10,
    height: 100,
    margin: 20,
    width: 100,
  },
  info: {
    flex: 1,
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#7EBC89",
    borderRadius: 3,
    paddingHorizontal: 12,
    paddingVertical: 2,
    width: 100,
  },
  reviewContainer: {
    margin: 20,
    padding: 10,
  },

  reviewWrapper: {
    backgroundColor: "#C1DBB3",
    borderRadius: 4,
    height: "auto",
    marginBottom: 20,
    padding: 10,
    width: "auto",
  },
  review: {
    paddingTop: 10,
    paddingHorizontal: 2,
  },
  reviewer: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "right",
  },
  starsWrapper: {
    backgroundColor: "white",
    borderRadius: 4,
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 66,
  },
});
