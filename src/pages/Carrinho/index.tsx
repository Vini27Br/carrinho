import React from "react";
import { Image, StyleSheet, Text, View  } from "react-native";
import logo from '../../../assets/logo.png';
import carrinho from "../../mocks/carrinho";

import Topo from '../../pages/Carrinho/components/Topo'

import Detalhe from "./components/Detalhe";



export default function Carrinho() {

 return <>
 <Topo titulo={carrinho.topo.titulo}/>

   <Detalhe/>
    </>

}

const estilos = StyleSheet.create({
  
    titulo:{
      width: "100%",
      position: "absolute",
      color: "white",
      textAlign: "center",
      fontSize: 24,
      lineHeight: 26,
      padding: 16,
      fontFamily: "MontserratItalic"
    },
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
