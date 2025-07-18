import { Text, View, StyleSheet } from "react-native";
import Card from "../components/card";

const axios = require("axios");
export default async function Index() {
  async function getdata() {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
  }

  const users = await getdata();

  const makeCard = () => {
    return users.map((data: unknown) => <Card data={data} />);
  };

  return <View style={styles.container}>{makeCard()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
