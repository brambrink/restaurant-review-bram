import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#7EBC89",
    borderRadius: 3,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  row: {
    backgroundColor: "white",
    borderRadius: 4,
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 10,
    paddingVertical: 10,
  },
  edges: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    minWidth: 50,
  },
  stars: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    minWidth: 50,
    padding: 10,
  },
  nameAdress: {
    flexDirection: "column",
    flex: 8,
  },
  container: {
    paddingTop: 30,
  },
  info: {
    borderColor: "#F5F5F5",
    borderRadius: 10,
    borderWidth: 4,
    flex: 1,
    fontWeight: "900",
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 10,
  },
});
