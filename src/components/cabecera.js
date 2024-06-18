import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const opciones = ["25'", "5'", "15'"];

export default Cabecera = (props) => {
  const { setTiempo, tiempoActual, setTiempoActual, setActivo } = props;

  const handlerPress = (index) => {
    const nuevoTiempo = index === 0 ? 25 : index === 1 ? 5 : 15;
    setTiempoActual(index);
    setTiempo(nuevoTiempo * 60);
    setActivo(false);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {opciones.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlerPress(index)}
          style={[
            styles.boton,
            tiempoActual !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    borderWidth: 2,
    width: "33%",
    padding: 8,
    borderRadius: 10,
    borderColor: "white",
    alignItems: "center",
    marginTop: 15,
  },
});
