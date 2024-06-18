import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

export default Boton = ({ activo, setActivo, textActivo, textInactivo }) => {
  const ToggleActivo = () => {
    setActivo(!activo);
    playsonido();
  };

  const playsonido = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/click.mp3")
    );
    await sound.playAsync();
  };

  return (
    <TouchableOpacity onPress={ToggleActivo} style={styles.boton}>
      <Text style={{ fontWeight: "bold" }}>
        {" "}
        {activo ? textActivo : textInactivo}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "#eee",
    borderColor: "white",
    alignItems: "center",
    padding: 8,
    marginHorizontal: 15,
    marginVertical: 10,
  },
});
