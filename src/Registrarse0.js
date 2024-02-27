import { StatusBar } from 'expo-status-bar';
import { style } from './registrarse0Style';
import { StyleSheet } from 'react-native';
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import { Image } from "react-native"; 

export default function Registrarse0() {
  
  return (
  <View style={styles.aythregistrarsdwrh6v}>
    <LinearGradient style={styles.aythregistrarszqzbvf}
    locations={[0,0.13,0.37,0.64,0.88,1]}
    start={[-0.32556815445715664,-0.9455185755993168]}
    end={[0.32556815445715676,0.9455185755993167]}
    colors={["#f25910","#f6b99c","#ffffff","#fef8f5","#652794","#40036f"]} >
      <View style={styles.aythFrame1547780hz4}>
        <View style={styles.aythFrame1547763weyb}></View>
        <View style={styles.aythFrame1547763weyb}></View>
        <Text style={styles.aythNombredeustz641}>
        {"Nombre de usuario"}
        </Text>
        <View style={styles.aythFrame154774ijuqa}>
          <View style={styles.aythFrame15477s4slv8}></View>
          <View style={styles.aythFrame15477s4slv8}></View>
          <View style={styles.aythFrame15477iidb24j}>
            <Text style={styles.aythEmailrobgpg}>
            {"Email"}
            </Text>
          </View>
          <View style={styles.aythFrame15477e3fa6l}>
            <Text style={styles.aythContraseak3litv}>
            {"Contraseña"}
            </Text>
          </View>
          <View style={styles.aythFrame15477nwu9pn}>
            <Text style={styles.aythRegistrarsw42q7u}>
            {"Registrarse"}
            </Text>
          </View>
        </View>
      </View>
    <Image style={styles.aythCaptura_dec76ug9} source={{uri: 'https://f1265de7-d6ec-4acb-9d6e-3f7d6007efa5.s3.fr-par.scw.cloud/figma/Captura_de_pantalla_202311.png'}}
    />
    <Text style={styles.aythENCUENTRAT0shgve}>
    {"ENCUENTRA TU PRUEBA"}
    </Text>
    <Text style={styles.aythHasolvidadgejxiq}>
    {"¿Has olvidado tu contraseña?"}
    </Text>
  </LinearGradient>
  <StatusBar style="auto"
  />
</View>

  );
};
const styles = StyleSheet.create(style);