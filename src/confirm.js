import React from 'react'
import { ViewBase, Text } from 'react-native'


const App = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Dados Inseridos Com Sucesso.

            </Text>
        </View>

    )
}

export default App


const styles = StyleSheet.create({
    container:{
        padding: 20,

    },
    title:{
        fontWeight:'bold',
        fontSize:25,
        marginBottom: 20
    }
})