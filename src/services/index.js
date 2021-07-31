import React from "react";
import Itens from "../screen/itens";
import { FlatList} from "react-native";
import Home from '../components/home'
class App extends React.Component {
  state = {
    data: [
      {
        id: 1,
        name: "Banho",
        price: 75.90,
        description: "Realizamos a higiene completa do seu pet"
      },
      {
        id: 2,
        name: "Vacina V4",
        price: 180,
        description: "Himunize seu Pet de várias doenças"
      },
      {
        id: 3,
        name: "Vacina Antirrábica",
        price: 80,
        description: "Vacina contra raiva"
      }
    ]
  };
  render() {
    return (
      <Home>
        <FlatList
          data={this.state.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Itens {...item} />}
        />
      </Home>
    );
  }
}

export default App;