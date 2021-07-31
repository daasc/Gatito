import React, {useState} from 'react';

import { Text, View } from 'react-native';
import CampoInt from '../../components/campoInt';
import Botao from '../../components/button';
import styleItens from '../../style/itens';

export default function Itens({ name, price, description, quantidade: quantidadeInicial }) {
  const [quantidade, setQuantidade] = useState(quantidadeInicial);
  const [total, setTotal] = useState(price * quantidadeInicial);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  }

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * price);
  }
  return <>
    <View style={styleItens.informacao}>
      <Text style={styleItens.nome}>{name}</Text>
      <Text style={styleItens.descricao}>{description}</Text>
      <Text style={styleItens.preco}>{
        Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(price)}</Text>
    </View>
   
    <View style={styleItens.carrinho}>
      <View>
          <View style={styleItens.valor}>
              <Text style={styleItens.descricao}>Quantidade:</Text>
              <CampoInt valor = {quantidade || ''} acao = {atualizaQuantidadeTotal} />
          </View>
          <View style={styleItens.valor}>
              <Text style={styleItens.descricao}>Total: </Text>
              <Text style={styleItens.preco}>{
        Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(total)}</Text>
          </View>
      </View>
      <Botao value="Remover do Carrinho" acao = {() => {}} />
    </View>
    <View style={styleItens.divisor}></View>
  </>
}