import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state= {
      selectedColor: '#FFF',
    }
  }

  componentDidMount(){
    this.testStuff()
  }

  testStuff(){
    let test = [9,8,7,6,5,4,3,2,1, "naruto"]
    test.map((beef, cheese, bob, naruto) => { console.log("beef "+beef+"  cheese "+cheese+ "  bob "+bob+"  naruto "+naruto)
  })
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }



  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}