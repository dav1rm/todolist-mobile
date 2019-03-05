import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: "#dbdbdd",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  button: {
    height: 50,
    margin: 5,
    backgroundColor: "#4fb3cc",
    borderColor: "#48a3ba",
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: {
    color: "#fff",
    fontSize: 25,
    padding: 16
  },
  input: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    height: 50,
    paddingHorizontal: 10,
    margin: 5,
    color: "#231F20",
    borderColor: "#DBDBDB",
    borderWidth: 1,
    borderRadius: 3
  }
});
export default styles;
