import { StyleSheet, Text, View, FlatList } from 'react-native'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movimentacao from '../../components/Movimentacao'
import Actions from '../../components/Actions'

const list = [
  {
    id: 1,
    label: 'Boleto faculdade',
    value: '121,90',
    date: '17/05/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Cliente',
    value: '1.500,90',
    date: '15/05/2022',
    type: 1 // entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '4.500,90',
    date: '05/05/2022',
    type: 1 // entradas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="José Jorge" />

      <Balance saldo="10.000,00" gastos="-300,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movimentacao data={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
})
