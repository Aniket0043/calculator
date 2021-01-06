import React from 'react'
import './keypadcomponent.css'

//keypad component
class Keypad extends React.Component{
        state={
            count:"0"
        }
        myChangeHandler=(digit)=>{
            const {count}=this.state
            this.setState({
                count:count==="0"?String(digit):count+digit
            })
        }

        addDot=()=>{
            const {count}=this.state
            if(count.indexOf(".")===-1){
                this.setState({
                    count:count+"."
                })
            }
        }
        reset=()=>{
            const {count}=this.state
            this.setState({
                count:"0"
            })
        }
        Calculate=()=>{
            const {count}=this.state
            this.setState({count:eval(count)})
        }

    render(){
        return( <div className="keypad">
            <div className="result">
            <input value={this.state.count} />
            </div>
            <button onClick={()=>this.reset()}>AC</button>
            <button onClick={()=>this.myChangeHandler("%")}>%</button>
            <button onClick={()=>this.myChangeHandler("/")}>/</button>
            <button onClick={()=>this.myChangeHandler("(")}>(</button>
            <button onClick={()=>this.myChangeHandler(")")}>)</button>
            <button onClick={()=>this.myChangeHandler(7)}>7</button>
            <button onClick={()=>this.myChangeHandler(8)}>8</button>
            <button onClick={()=>this.myChangeHandler(9)}>9</button>
            <button onClick={()=>this.myChangeHandler("*")}>*</button>
            <button onClick={()=>this.myChangeHandler(4)}>4</button>
            <button onClick={()=>this.myChangeHandler(5)}>5</button>
            <button onClick={()=>this.myChangeHandler(6)}>6</button>
            <button onClick={()=>this.myChangeHandler("-")}>-</button>
            <button onClick={()=>this.myChangeHandler(1)}>1</button>
            <button onClick={()=>this.myChangeHandler(2)}>2</button>
            <button onClick={()=>this.myChangeHandler(3)}>3</button>
            <button onClick={()=>this.myChangeHandler("+")}>+</button>
            <button onClick={()=>this.myChangeHandler(1)}>0</button>
            <button onClick={()=>this.addDot(".")}>.</button>
            <button onClick={()=>this.Calculate()}>=</button>
        
        </div>
        )
    }
}
export default Keypad;