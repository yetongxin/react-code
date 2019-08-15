import React from 'react'
const scaleName = {
    'she':"摄氏度",
    'hua':"华氏度"
}
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { scale:'',temperature:''}
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        this.props.onTemperatureChange(event.target.value);
    }
    render() { 
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter Temperature in {scaleName[scale]}</legend>
                <input value={temperature} onChange={this.onChange} />
            </fieldset>

          );
    }

}
function IfBoil(props){
    console.log(props)
    if(props.celsius>=100){
        return <p>Boil</p>
    }
    return <p>not Boil</p>
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
class Calulator extends React.Component{
    constructor(props){
        super(props);
        this.state = { scale:'she',temperature:''}
        this.handleSHEchange = this.handleSHEchange.bind(this);
        this.handleHUAchange = this.handleHUAchange.bind(this);
    }
    handleSHEchange(temperature){
        this.setState(
            {scale:'she',temperature}
        )
    }
    handleHUAchange(temperature){
        this.setState(
            {scale:'hua',temperature}
        )
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const she = scale==='hua'?tryConvert(temperature,toCelsius):temperature;
        const hua = scale==='she'?tryConvert(temperature,toFahrenheit):temperature;
        return (
            <div>
                <TemperatureInput temperature={she} 
                scale = 'she' onTemperatureChange={this.handleSHEchange}/>
                <TemperatureInput temperature={hua}
                scale = 'hua' onTemperatureChange={this.handleHUAchange}/>
                <IfBoil celsius={she}/>
            </div>
        )
    }
}
export default Calulator;