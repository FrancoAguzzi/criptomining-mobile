import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataMetrics } from '../../stores/actions/user.action'

const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()

  function ListMetrics() {
    return user.map(data => {
      return (
        <View
          key={data._id}
          style={{
            borderBottomWidth: 1,
            borderColor: '#eee',
            padding: 1,
            marginTop: 10
          }}>
          <Text style={{ fontSize: 15, textAlign: 'center', padding: 10 }}>
            {data.gpu}: {data.pwr}Wtts, {data.temp}°C
          </Text>
        </View>
      )
    })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <View>
            <Text style={{ color: 'purple', fontSize: 20, margin: 20, textAlign: 'center', fontWeight: 'bold' }}>Métricas do seu Sistema de Mineração</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchDataMetrics())}>
              <Text style={styles.text}>Clique aqui para carregar métricas:</Text>
            </TouchableOpacity>
            <ScrollView style={{ maxHeight: '50%' }}>
              <ListMetrics />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Home)
