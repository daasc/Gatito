import React from "react";
import Itens from "./itens";
import { FlatList} from "react-native";
import Status from "../../components/statusCard";
import Home from '../../components/home';
class ShoppingCart extends React.Component {
  state = {
    data: [
      {
        id: 1,
        name: "Banho",
        price: 75.90,
        description: "Realizamos a higiene completa do seu pet",
        quantidade: 1
      },
      {
        id: 2,
        name: "Vacina V4",
        price: 180,
        description: "Himunize seu Pet de várias doenças",
        quantidade: 10
      },
      {
        id: 3,
        name: "Vacina Antirrábica",
        price: 80,
        description: "Vacina contra raiva",
        quantidade: 1
      }
    ]
  };
  render() {
    const total = this.state.data.reduce((soma, {price, quantidade}) => soma + (price * quantidade), 0)
    return (
      <Home>
        <Status total ={total} />
        <FlatList
            data={this.state.data}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Itens {...item} />}
          />
      </Home>
    );
  }
}

export default ShoppingCart;