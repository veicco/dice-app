import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';


const Grid = ({children}) => (
  <View style={styles.grid}>{children}</View>
);

const Row = ({children}) => (
  <View style={styles.row}>{children}</View>
);

const Dot = ({on=false}) => (
  <View style={[styles.dot, {backgroundColor: on ? '#222' : 'transparent'}]}/>
);

const Dice = ({value, roll}) => {
  const shape = () => {
    switch(value) {
      case 1:
        return (
          <Grid>
            <Row>
              <Dot/><Dot/><Dot/>
            </Row>
            <Row>
              <Dot/><Dot on/><Dot/>
            </Row>
            <Row>
              <Dot/><Dot/><Dot/>
            </Row>
          </Grid>
        )
        case 2:
          return (
            <Grid>
              <Row>
                <Dot on/><Dot/><Dot/>
              </Row>
              <Row>
                <Dot/><Dot/><Dot/>
              </Row>
              <Row>
                <Dot/><Dot/><Dot on/>
              </Row>
            </Grid>
          ) 
        case 3:
          return (
            <Grid>
              <Row>
                <Dot on/><Dot/><Dot/>
              </Row>
              <Row>
                <Dot/><Dot on/><Dot/>
              </Row>
              <Row>
                <Dot/><Dot/><Dot on/>
              </Row>
            </Grid>
          ) 
        case 4:
          return (
            <Grid>
              <Row>
                <Dot on/><Dot/><Dot on/>
              </Row>
              <Row>
                <Dot/><Dot/><Dot/>
              </Row>
              <Row>
                <Dot on/><Dot/><Dot on/>
              </Row>
            </Grid>
          ) 
        case 5:
          return (
            <Grid>
              <Row>
                <Dot on/><Dot/><Dot on/>
              </Row>
              <Row>
                <Dot/><Dot on/><Dot/>
              </Row>
              <Row>
                <Dot on/><Dot/><Dot on/>
              </Row>
            </Grid>
          ) 
        case 6:
          return (
            <Grid>
              <Row>
                <Dot on/><Dot/><Dot on/>
              </Row>
              <Row>
                <Dot on/><Dot/><Dot on/>
              </Row>
              <Row>
                <Dot on/><Dot/><Dot on/>
              </Row>
            </Grid>
          ) 
        default:
          return (
            <Grid>
              <Row>
                <Dot/><Dot/>
              </Row>
              <Row>
                <Dot/><Dot/>
              </Row>
              <Row>
                <Dot/><Dot/>
              </Row>
            </Grid>
          ) 
    }
  }
  return(
    <TouchableOpacity onPress={roll}>
      <View style={styles.container}>
        {shape()}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 30,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dot: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#000000',
  },
  container: {
    flexDirection: 'row',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
  }
});

export default Dice;