import React, {useState} from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import CampoInt from '../components/campoInt';
import Botao from '../components/button';
import styleItens from '../style/itens';

export default function Itens({ name, price, description }) {
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(price);
  const [expandir, setExpandir] = useState(false);

  const inverteExpandir = () => {
    setExpandir(!expandir)
    atualizaQuantidadeTotal(1)
  }
  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  }

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * price);
  }
  return <>
    <TouchableOpacity style={styleItens.informacao} onPress = {inverteExpandir}>
      <Text style={styleItens.nome}>{name}</Text>
      <Text style={styleItens.descricao}>{description}</Text>
      <Text style={styleItens.preco}>{
        Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(price)}</Text>
    </TouchableOpacity>
    {expandir && 
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
      <Botao value="Adicionar no Carrinho" acao = {() => {}} />
    </View>
    }
    <View style={styleItens.divisor}></View>
  </>
}