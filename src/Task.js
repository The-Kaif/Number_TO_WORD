import React, { useState } from 'react'

function Task() {
    let[num,setNum]=useState("");
    const[result,setResult]=useState("");
    const inputHandler=(e)=>{
        setNum(e.target.value);
    }
    const btnHandler=()=>{
        console.log(num);
        var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
        var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    
        if ((num = num.toString()).length > 9) return 'overflow';
        let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        console.log(num.match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/))
        console.log(('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/))
        console.log(typeof(n))
        if (!n) return; var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
        setResult(str);
        console.log(str);
    }

  return (
    <div>
        <h1>Number To Word</h1>
        <sapn>Enter Number</sapn>
        <input onChange={inputHandler} type={"number"} placeholder="type number..."/>
        <br></br>
        <br></br>
        <button onClick={btnHandler}>Click</button>

        <h1>{result}</h1>
    </div>
  )
}

export default Task