import {
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import ButtonGeneral from "../../components/ButtonGeneral";
import { useRouter } from "expo-router";

export default function Holaindex() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../../assets/images/fondoIndex.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay} />

      <View style={styles.contenedor_general}>
        <View style={styles.section_one}>
          <Text>Primera sección</Text>
        </View>
        <View style={styles.section_two}>
          <Text>Segunda sección</Text>
        </View>
        <View style={styles.section_three}>
          <View style={styles.contenedor_frase}>
            <Image
              source={require("../../assets/images/proyectoCelular.jpg")}
              style={styles.imagen}
            />
            <View style={styles.overlay}></View>
            <Text style={styles.texto_frase}>Tu partido en un click</Text>
          </View>
          <ButtonGeneral
            icon="tennis-ball"
            mode="contained"
            onPress={() => router.push("/canchas")}
          >
            Canchas Disponibles
          </ButtonGeneral>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  contenedor_general: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  section_one: {
    height: "15%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  section_two: {
    height: "15%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  section_three: {
    height: "40%",
    width: "80%",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  contenedor_frase: {
    height: "70%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  imagen: {
    flex: 1,
    resizeMode: "contain",
  },
  texto_frase: {
    position: "absolute",
    color: "white",
    fontFamily: "bold",
  },
});
