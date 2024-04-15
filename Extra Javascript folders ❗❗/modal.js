import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.main}>
      {/*//* Modal */}
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Assalam-o-Alaikum Pakistan</Text>
            <Button title="Close Modal" onPress={()=>setShowModal(false)}/>
          </View>
        </View>
      </Modal>

      {/* //* Button */}
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Open Modal</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
  buttonStyle: {
    backgroundColor: 'orange',
    padding: 10,
    alignItems:'center',
    borderRadius:15
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    margin:15,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    color:'black',
  },
});

export default App;
