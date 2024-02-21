import { StatusBar } from 'expo-status-bar';
import { style } from './registrarse3Style';
import { StyleSheet } from 'react-native';
import { View } from "react-native";
import { Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; 

export default function Registrarse3() {
  
  return (
  <View style={styles.aythregistrars7nq1u}>
    <LinearGradient style={styles.aythregistrarskoi4uf}
    locations={[0,0.13,0.37,0.64,0.88,1]}
    start={[-0.32556815445715664,-0.9455185755993168]}
    end={[0.32556815445715676,0.9455185755993167]}
    colors={["#f25910","#f6b99c","#ffffff","#fef8f5","#652794","#40036f"]} >
      <View style={styles.aythFrame15477lpwzs}>
        <View style={styles.aythFrame15477izdknyc}>
        <Image style={styles.aythCaptura_de9p10s} source={{uri: 'https://2a2b4e20-0ae7-4d18-ae3c-ab385edfc641.s3.fr-par.scw.cloud/figma/Captura_de_pantalla_202311.png'}}
        />
        <Text style={styles.aythENCUENTRAT6ls4f7}>
        {"ENCUENTRA TU PRUEBA"}
        </Text>
      </View>
      <View style={styles.aythFrame1547715fclr}>
        <View style={styles.aythFrame15477ryjgmp}>
          <Text style={styles.aythNombredeusk9cjc}>
          {"Nombre de usuario"}
          </Text>
        </View>
        <View style={styles.aythFrame15477259rb4}>
          <Text style={styles.aythEmailv7ba4}>
          {"Email"}
          </Text>
        </View>
        <View style={styles.aythFrame1547710w7i}>
          <Text style={styles.aythContrasea7s4nkb}>
          {"Contraseña"}
          </Text>
        </View>
        <View style={styles.aythFrame15477i6sen1}>
          <Text style={styles.aythRegistrarst71ia}>
          {"Registrarse"}
          </Text>
        </View>
        <Text style={styles.aythHasolvidad0hgswg}>
        {"¿Has olvidado tu contraseña?"}
        </Text>
      </View>
    </View>
  </LinearGradient>
  <StatusBar style="auto"
  />
</View>

  );
};
const styles = StyleSheet.create(style);