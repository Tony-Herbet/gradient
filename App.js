import React from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableHighlight } from 'react-native';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowUpLeft, ArrowUp, ArrowUpRight, ArrowLeft, ArrowRight, ArrowDownLeft, ArrowDown, ArrowDownRight } from 'react-native-feather';

import { StatusBarHeight } from './app/config/StatusBarHeightCheck';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorOne: '#f0f',
      colorTwo: '#0f0',
      colorChosen : 1,
      deg: 180, // default 180
      x1: 0, // default 0
      x2: 0, // default 0
      y1: 0, // default 0
      y2: 1, // default 1
    };
  };

  updateColor = (color) => {
    if (this.state.colorChosen === 1) {
      this.setState({colorOne: color});
    }
    if (this.state.colorChosen === 2) {
      this.setState({colorTwo: color});
    }
  }
  
  colorChosen = (number) => this.setState({colorChosen: number});

  changeDeg = (deg) => {
    if (deg === 315) {
      this.setState({
        x1: 1,
        x2: 0,
        y1: 1,
        y2: 0,
        deg,
      })
    }
    if (deg === 0) {
      this.setState({
        x1: 0,
        x2: 0,
        y1: 1,
        y2: 0,
        deg,
      })
    }
    if (deg === 45) {
      this.setState({
        x1: 0,
        x2: 1,
        y1: 1,
        y2: 0,
        deg,
      })
    }
    if (deg === 270) {
      this.setState({
        x1: 1,
        x2: 0,
        y1: 0,
        y2: 0,
        deg,
      })
    }
    if (deg === 90) {
      this.setState({
        x1: 0,
        x2: 1,
        y1: 0,
        y2: 0,
        deg,
      })
    }
    if (deg === 225) {
      this.setState({
        x1: 1,
        x2: 0,
        y1: 0,
        y2: 1,
        deg,
      })
    }
    if (deg === 180) {
      this.setState({
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 1,
        deg,
      })
    }
    if (deg === 135) {
      this.setState({
        x1: 0,
        x2: 1,
        y1: 0,
        y2: 1,
        deg,
      })
    }
  };
  
  render() {
    return (
      <View  style={styles.container}>
      <Text style={styles.result}>linear-gradient({this.state.deg}deg, {this.state.colorOne}, {this.state.colorTwo})</Text>
        {/* -------------------- Color Picker Section -------------------- */}
        <TriangleColorPicker 
          onColorChange={color => this.updateColor(fromHsv(color))}
          hideControls
          style={styles.colorPicker}
        >
        </TriangleColorPicker>

        {/* -------------------- Choices Section -------------------- */}
     		<View style={styles.choices}>
          {/* -------------------- Colors Section -------------------- */}
          <TouchableHighlight
            underlayColor={this.state.colorOne}
            style={[styles.colorButton, {borderColor: this.state.colorOne}]}
            onPress={() => this.colorChosen(1)}
          >
            <Text>{this.state.colorOne}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={this.state.colorTwo}
            style={[styles.colorButton, {borderColor: this.state.colorTwo}]}
            onPress={() => this.colorChosen(2)}
          >
            <Text>{this.state.colorTwo}</Text>
          </TouchableHighlight>
          {/* -------------------- Angles Section -------------------- */}
          <View style={styles.angles}>
            <TouchableHighlight
              style={styles.angle}
              underlayColor="#808080"
              onPress={() => this.changeDeg(315)}
            >
              <ArrowUpLeft color="#fff" />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.angle}
              underlayColor="#808080"
              onPress={() => this.changeDeg(0)}
            >
              <ArrowUp color="#fff" />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.angle}
              underlayColor="#808080"
              onPress={() => this.changeDeg(45)}
            >
              <ArrowUpRight color="#fff" />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.angle}
              underlayColor="#808080"
              onPress={() => this.changeDeg(270)}
            >
              <ArrowLeft color="#fff" />
            </TouchableHighlight>
            <View style={styles.angle}></View>
            <TouchableHighlight
              style={styles.angle}
              underlayColor="#808080"
              onPress={() => this.changeDeg(90)}
            >
              <ArrowRight color="#fff" />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.angle}
              underlayColor="#808080"
              onPress={() => this.changeDeg(225)}
            >
              <ArrowDownLeft color="#fff" />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.angle}
              underlayColor="#808080"
              onPress={() => this.changeDeg(180)}
            >
              <ArrowDown color="#fff" />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.angle}
              underlayColor="#808080"
              onPress={() => this.changeDeg(135)}
            >
              <ArrowDownRight color="#fff" />
            </TouchableHighlight>
          </View>
        </View>

        {/* -------------------- Linear Gradient Section -------------------- */}
        <LinearGradient
            colors={[`${this.state.colorOne}`, `${this.state.colorTwo}`]}
            style={styles.linearGradient}
            start={{ x: this.state.x1, y: this.state.y1 }}
            end={{ x: this.state.x2, y: this.state.y2}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBarHeight,
  },
  result: {
    alignSelf: 'center',
  },
  colorPicker: {
    flex: 1,
  },
  choices: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  colorButton: {
    height: 50,
    width: 100,
    borderStyle: 'solid',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  angles: {
    width: 132,
    height: 132,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  angle: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff'
  },
  linearGradient: {
    flex: 1,
  },
});
