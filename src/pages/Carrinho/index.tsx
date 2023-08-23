import React from "react";
import { Dimensions, Image, StyleSheet, Text, View  } from "react-native";
import topo from '../../../assets/topo.png';


const width = Dimensions.get('screen').width;

export default function Carrinho() {

 return <>
 <Image source={ topo } style={estilos.topo}/>
 
 <Text style={estilos.titulo}>Detalhes do Carrionho</Text>

 <View>
    <Text> Carrinho de Compras </Text>   
    <Text> Fazendinha do incrivel Vinícus </Text>   
    <Text> Uma cesta com produtos selecionadas com cuidado e carinho</Text>   
    <Text> R$ 40,00 </Text>   
 </View>
    </>

}

const estilos = StyleSheet.create({

    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        color: "white",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        padding: 16,
        fontFamily: "MontserratItalic"
    }

})
{/*Sou Gay*/}