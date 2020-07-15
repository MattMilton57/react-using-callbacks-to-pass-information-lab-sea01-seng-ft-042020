{1}
// Dont forget that whatever you are passing into an arrow function goes into the parenthesis on the top line. Basic stuff but important.
setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

{2}
// Similarily, dont forget that setState is written like this:
this.setstate({ state:newState })
//with the new state contained inside the curly brackets contained in the parenthesis. Syntax = speed. 

{3}
// This is an interesting way of adding a callback function to elements that you are creating by maping through something
makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )
  // the array of strings being mapped through is a series of hexidecimal codes. - after far too much research i have discovered that 
  // placing two variables after a .map when mapping over a string will produce the text of the string from the first variable and the 
  // index in the string from the second. A third variable will produce the contents of the entire array, and a fourth will produce nothing. 
  //so, a function that looks like this:
  testStuff = () => (
    [9,8,7,6,5,4,3,2,1, "naruto"].map((beef, cheese, bob, joe) => {
        return console.log("beef "+beef+"  cheese "+cheese+ "  bob "+bob+"  joe "+joe)
    })
  )
  // gives you this:
  // beef 9,  cheese 0,  bob 9,8,7,6,5,4,3,2,1,naruto,  joe, undefined
  // for each item in the array. As used in the makeColorSwatches function above, different elements can then be set to different parts of 
  // a div or possibly sent to different functions alltogether. 

  {4}
  // more syntax basics, dont forget to use an arrow function for handleClick functions.
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }

  {5}
  //the lab stressed this:
  // "Aside: Remember that when using arrow functions, you can use parentheses instead of curly braces to implicitly return a value."
  genRow = (vals) => (vals.map((val, idx) => <Cell key={idx} color={val} />))
  // so, for this function you wouldnt have to preface the sending of info to Cell with a "return", as it would do it anyways

