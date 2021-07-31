import React from "react";
import { TextInput } from "react-native";
import styles from '../../style/inputText';
export default function CampoInt({valor, style, acao}) {
  const atualiza = (novoValor, acaoRetorno) => {
    const verificaInteiro = novoValor.match(/^[0-9]*$/)
    if(!verificaInteiro) return;
    const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2')
    acaoRetorno(removeZeroEsquerda)
  }
  const numeroEmTexto = String(valor);

  return <TextInput 
    keyboardType="number-pad"
    selectTextOnFocus
    style={[styles.campo, style]}
    onChangeText = {(novoValor) => {atualiza(novoValor, acao)}}
    value = {valor}
  />
}