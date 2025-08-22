import React, { useState } from "react";
import {evaluate} from "mathjs";
import "./ScientificCalculator.css";
export default function MiniCalculator(){
    const [data,setData]=useState("");

    const numberclick=(label)=>{
        setData((prev)=>prev+label);
    }
    const Calculation=()=>
    {
       setData(evaluate(data).toString());
    }
    const clear=()=>
    {
        setData(data.slice(0,-1));
    }
    const scientificCalculation=(label)=>{
        let value=parseFloat(data);
        let result;
        switch(label){
            case "exp":
                result=Math.exp(value);
                setData(result.toString());
                break;
            case "log":
                result=Math.log10(value);
                setData(result.toString());
                break;
            case "ln":
                result=Math.log(value);
                setData(result.toString());
                break;
            case "sqrt(":
                result=Math.sqrt(value);
                setData(result.toString());
                break;
            case "^":
                let exponent=parseFloat(prompt("Enter the value:"));
                result=Math.pow(value,exponent);
                setData(result.toString());
                break;
            case "cbrt(":
                result=Math.cbrt(value);
                setData(result.toString());
                break;
            case "!":
                const factorial=(n)=>{
                    if(n===0 || n===1)
                    {
                        return n;
                    }
                    else
                    {
                        return n*factorial(n-1);
                    }
                }
                result=factorial(value);
                setData(result.toString());
                break;
            case "sin(":
                result=Math.sin(value);
                setData(result.toString());
                break;
            case "cos(":
                result=Math.cos(value);
                setData(result.toString());
                break;
            case "tan(":
                result=Math.tan(value);
                setData(result.toString());
                break;
            case "asin(":
                result=Math.asin(value);
                setData(result.toString());
                break;
            case "acos(":
                result=Math.acos(value);
                setData(result.toString());
                break;
            case "atan(":
                result=Math.atan(value);
                setData(result.toString());
                break;
            case "sinh(":
                result=Math.sinh(value);
                setData(result.toString());
                break;
            case "cosh(":
                result=Math.cosh(value);
                setData(result.toString());
                break;
            case "tanh(":
                result=Math.tanh(value);
                setData(result.toString());
                break;
            case "asinh(":
                result=Math.asinh(value);
                setData(result.toString());
                break;
            case "acosh(":
                result=Math.acosh(value);
                setData(result.toString());
                break;
            case "atanh(":
                result=Math.atanh(value);
                setData(result.toString());
                break;
            case "pie":
                result=Math.PI;
                setData(result.toString());
                break;
            case "mod":
                result = Math.abs(value);  // parseFloat এর বদলে evaluate
                setData(result.toString());
                break;
            default:
                setData("Invalid Operation");
                break;
        }

    }
    return(
        <div>
            <div className="title">
                <h1>Mini Calculator</h1>
            </div>
            <div className="calculator">
                <div className="calculatordisplay">
                    <input type="text" value={data.toString()} />
                </div>
                <div className="calculatorbuttons">
                   <button onClick={()=>numberclick("1")}value={data}>1</button>
                   <button onClick={()=>numberclick("2")}value={data}>2</button>
                   <button onClick={()=>numberclick("3")}value={data}>3</button>
                   <br />
                   <button onClick={()=>numberclick("4")}value={data}>4</button>
                   <button onClick={()=>numberclick("5")}value={data}>5</button>
                   <button onClick={()=>numberclick("6")}value={data}>6</button>
                   <br />
                   <button onClick={()=>numberclick("7")}value={data}>7</button>
                   <button onClick={()=>numberclick("8")}value={data}>8</button>
                   <button onClick={()=>numberclick("9")}value={data}>9</button>
                   <br />
                   <button onClick={()=>numberclick("0")}value={data}>0</button>
                   <button onClick={Calculation}value={data}>=</button>
                   <button onClick={()=>setData("")}>AC</button>
                   <br />
                   <button onClick={clear}>C</button>
                   <button onClick={()=>numberclick("+")}value={data}>+</button>
                   <button onClick={()=>numberclick("-")}value={data}>-</button>
                   <br />
                   <button onClick={()=>numberclick("*")}value={data}>×</button>
                   <button onClick={()=>numberclick("/")}value={data}>÷</button>
                   <button onClick={()=>numberclick("%")} value={data}>%</button>
                   <br />
                   <button onClick={() => numberclick(".")}>.</button>
                   <button onClick={() => scientificCalculation("pie")}>π</button>
                   <button onClick={() => scientificCalculation("mod")}>|x|</button>
                   <br />
                   <button onClick={()=>numberclick("(")}value={data}>(</button>
                   <button onClick={()=>numberclick(")")} value={data}>)</button>
                   <button onClick={()=>scientificCalculation("!")} value={data}>!</button>
                   <br />
                   <button onClick={()=>scientificCalculation("sqrt(")}value={data}>√</button>
                   <button onClick={()=>scientificCalculation("^")}value={data}>xʸ</button>
                   <button onClick={()=>scientificCalculation("cbrt(")} value={data}>∛</button>
                   <br />
                   <button onClick={()=>scientificCalculation("exp")}value={data}>exp</button>
                   <button onClick={()=>scientificCalculation("log")}value={data}>log</button>
                   <button onClick={()=>scientificCalculation("ln")} value={data}>ln</button>
                   <br />
                   <button onClick={()=>scientificCalculation("sin(")}value={data}>sin</button>
                   <button onClick={()=>scientificCalculation("cos(")}value={data}>cos</button>
                   <button onClick={()=>scientificCalculation("tan(")} value={data}>tan</button>
                   <br />
                   <button onClick={()=>scientificCalculation("asin(")}value={data}>sin⁻¹</button>
                   <button onClick={()=>scientificCalculation("acos(")}value={data}>cos⁻¹</button>
                   <button onClick={()=>scientificCalculation("atan(")} value={data}>tan⁻¹</button>
                   <br />
                   <button onClick={()=>scientificCalculation("sinh(")}value={data}>sinh</button>
                   <button onClick={()=>scientificCalculation("cosh(")}value={data}>cosh</button>
                   <button onClick={()=>scientificCalculation("tanh(")} value={data}>tanh</button>
                   <br />
                   <button onClick={()=>scientificCalculation("asinh(")}value={data}>sinh⁻¹</button>
                   <button onClick={()=>scientificCalculation("acosh(")}value={data}>cosh⁻¹</button>
                   <button onClick={()=>scientificCalculation("atanh(")} value={data}>tanh⁻¹</button>
                </div>
            </div>
        </div>
    );
}