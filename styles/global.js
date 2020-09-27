import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      titleText: {
          // fontFamily
          fontSize: 18,
          color: '#333',
      },
      boldText: {
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        fontSize: 20
      },
      taskText: {
        fontWeight: 'bold',
        fontSize: 40
      },
      body: {
        backgroundColor: '#CCCCC',
        padding: 20
      },
      buttonContainer: {
        marginTop: 20,
      },
      input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 10,
        margin: 10,
        width: 200,
      },
      item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 30,
      },
      task: {
        padding: 18,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    taskText: {
      fontSize: 25
    },
})