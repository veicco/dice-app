import React from 'react';
import {View, StyleSheet} from 'react-native';
import Dice from './dice';




class DiceView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.getRandomValue(),
    }
  }

  getRandomValue() {
    const min = Math.ceil(1);
    const max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  roll = () => {
    this.setState({
      value: this.getRandomValue(),
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Dice value={this.state.value} roll={this.roll}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 0,
  }
});

export default DiceView;