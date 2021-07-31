import {  StyleSheet } from "react-native";
import { cors } from ".";

export default StyleSheet.create({
  informacao: {
    padding: 4
  },
  nome: {
    color: cors.laranja,
    fontWeight: 'bold',
    fontSize: 16
  },
  calculo: {
    color: cors.escuro,
    fontSize: 14,
    marginVertical: 8
  },
  preco: {
    color: cors.roxo,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth:1,
    borderBottomColor:cors.cinza
  },
  carrinho: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  valor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap'
  },
  descricao: {
    color: cors.cinza,
    fontSize: 16,
    marginRight: 8
  },
  quantidade: {
    width: 42,
  },
  buttun: {
    width: 5,
 }
})
