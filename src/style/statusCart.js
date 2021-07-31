import { StyleSheet } from "react-native";
import { cors } from ".";

export default StyleSheet.create({
  conteudo: {
    backgroundColor: cors.roxo,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 15
  },
  total: {
    alignItems: 'center'
  },
  descricao: {
    fontSize: 16,
    color: cors.claro,
    fontWeight: 'bold'
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: cors.laranja
  },
  botao: {
    flexGrow: 1,
    alignItems: 'flex-end'
  }
})