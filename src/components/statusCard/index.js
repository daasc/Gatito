import React from 'react';

import { View, Text } from 'react-native';
import styles from '../../style/statusCart';
import Botao from '../button';
export default function Status({ total }) {
  return <View style={styles.conteudo}>
    <View style={styles.total}>
      <Text style={styles.descricao}> Total do Carrinho :</Text>
      <Text style={styles.valor} >{
        Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(total)}</Text>
    </View>
    <View style={styles.botao}>
        <Botao value="Concluir Pedido" invertido></Botao>
    </View>
  </View>
}