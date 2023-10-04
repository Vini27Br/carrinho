import React from "react"
import { Text, View, Image, StyleSheet } from "react-native"
import logo from "../../../../assets/logo.png"


export default function Detalhe() {
    return (
    <>
        <View style={estilos.carrinho}>
        <Text style={estilos.nome}>Carrinho de Compras</Text>
        <View style={estilos.fazenda}>
            <Image style={estilos.imagemFazenda} source={logo}/>
            <Text style={estilos.nomeFazenda}>Fazenda do grande mestre Vinícius</Text>
        </View>
    <Text> Carrinho de Compras </Text>   
    <Text> Fazendinha do incrivel Vinícus </Text>   
    <Text> Uma cesta com produtos selecionadas com cuidado e carinho</Text>   
    <Text> R$ 40,00 </Text>   
 </View>
    </>
    )
}

const estilos = StyleSheet.create({
  
   
    carrinho: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },

    nome: {
      fontSize: 26,
      lineHeight: 42,
      color: "#464646"
    },

    fazenda: {
      flexDirection: "row",
      paddingVertical: 12
    },
    imagemFazenda:{
      width: 32,
      height: 32
    },
    nomeFazenda: {
      fontSize: 16,
      fontFamily: "MontserratBold",
      lineHeight: 26,
      marginLeft: 12
    },
    descricao: {
      color: "#A3A3A3",
      fontFamily: "MontserratItalic"
    },
    preco: {
      fontSize: 26,
      fontFamily: "MontserratRegular",
      color: "#2A9f85",
      marginTop: 8,

    }
})