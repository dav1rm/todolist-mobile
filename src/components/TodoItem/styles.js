import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ededed",
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexWrap: "wrap"
  },
  textContent: {
    color: "#4d4d4d",
    fontSize: 18
  },
  button: {
    margin: 5,
    height: 30,
    backgroundColor: "#4fb3cc",
    borderColor: "#48a3ba",
    borderWidth: 1,
    justifyContent: "center"
  },
  textButton: {
    color: "#fff",
    fontSize: 15,
    padding: 13
  },
  input: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    height: 40,
    fontSize: 16,
    paddingHorizontal: 5,
    margin: 5,
    color: "#333",
    borderColor: "#DBDBDB",
    borderWidth: 1,
    borderRadius: 3
  },
  done: {
    fontStyle: "italic",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  }
});
export default styles;
