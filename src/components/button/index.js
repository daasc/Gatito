import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import styles from '../../style/button';
export default function Botao({pequeno = false, invertido = false, value, acao, style}) {
  const estilosPadrao = styles(pequeno, invertido);
  return <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, style]}>
    <Text style={estilosPadrao.valor}>{value}</Text>
  </TouchableOpacity>
}