import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Platform, StyleSheet } from "react-native";
import Cabecera from "../components/cabecera";
import { StatusBar } from "expo-status-bar";
import Timer from "../components/timer";
import Boton from "../components/boton";
import { Audio } from "expo-av";

const colores = ["#7277a3", "#a37285", "#966766"];

export default Main = () => {
  const [tiempo, setTiempo] = useState(25 * 60);
  const [tiempoActual, setTiempoActual] = useState("POMO" | "CORTO" | "NORMAL");
  const [activo, setActivo] = useState(false);
  const [pausa, setPausa] = useState(false);

  const Alarma = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/alarma.mp3")
    );
    await sound.playAsync();
  };
  useEffect(() => {
    let interval = null;

    if (activo) {
      interval = setInterval(() => {
        setTiempo(tiempo - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (tiempo === 0) {
      setActivo(false);
      setTiempo(tiempoActual === 0 ? 1500 : tiempoActual === 1 ? 300 : 900);
      Alarma();
    }

    return () => clearInterval(interval);
  }, [tiempo, activo]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colores[tiempoActual] }]}
    >
      <StatusBar style="light" />
      <View style={{ flex: 1, paddingTop: Platform.OS === "android" && 30 }}>
        <Cabecera
          tiempoActual={tiempoActual}
          setTiempoActual={setTiempoActual}
          setTiempo={setTiempo}
          setActivo={setActivo}
        />
        <Timer tiempo={tiempo}></Timer>
        <Boton
          activo={activo}
          setActivo={setActivo}
          textActivo={"Stop"}
          textInactivo={"Start"}
        ></Boton>
        {/* <Boton
          activo={pausa}
          setActivo={setPausa}
          textActivo={"Pausar"}
          textInactivo={"Reaunudar"}
        ></Boton> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
  },
});
