import styles from './PasswordGenerator.module.css'
import copy from '../images/copy.svg'
import copy2 from '../images/copy2.svg'
import arrow from '../images/arrow.svg'
import React, { useState } from 'react'
import setcopy from "copy-to-clipboard";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PasswordGenerator(){

    const [range, setRange] = useState('1');
    const [upperCaseCheck, setUpperCaseCheck] = useState(false)
    const [lowerCaseCheck, setLowerCaseCheck] = useState(false)
    const [numbersCheck, setNumbersCheck] = useState(false)
    const [symbolsCheck, setSymbolsCheck] = useState(false)
    // const [password, setPassword] = useState('');
    const [password, setPassword] = useState('N5$SYOTp');
    const [strength, setStrenth] = useState([]);
    const [copyCheck, setCopyCheck] = useState(false);


    var checkboxUpperKey, checkboxLowerKey, checkboxNumberKey, checkboxSymbolKey;
    if(upperCaseCheck){
        checkboxUpperKey = 1;
    }else{
        checkboxUpperKey = 0;
    }
    if(lowerCaseCheck){
        checkboxLowerKey = 1
    }else{
        checkboxLowerKey = 0
    }
    if(numbersCheck){
        checkboxNumberKey = 1
    }else{
        checkboxNumberKey = 0
    }
    if(symbolsCheck){
        checkboxSymbolKey = 1
    }else{
        checkboxSymbolKey = 0
    }

    var x = checkboxLowerKey + checkboxUpperKey + checkboxNumberKey + checkboxSymbolKey
    // console.log(upperCaseCheck, lowerCaseCheck, numbersCheck, symbolsCheck, checkboxUpperKey, checkboxLowerKey, x)

    // const upperCase = '';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';

    var uppkeyKeyResult = '';
    var lowerKeyResult = '';
    var numbersKeyResult = '';  
    var symbolsKeyResult = '';

    function upperKey(key){
        for(var i = 0; i<key; i++){
            uppkeyKeyResult += upperCase.charAt(Math.floor(Math.random() * upperCase.length))
        }
        return uppkeyKeyResult;
    }
    
    function loweKey(key){
        for(var i = 0; i<key; i++){
            lowerKeyResult += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))
        }
        return lowerKeyResult;
    }
    
    function numbersKey(key){
        for(var i = 0; i<key; i++){
            numbersKeyResult += numbers.charAt(Math.floor(Math.random() * numbers.length))
        }
        return numbersKeyResult;
    }
    
    function symbolsKey(key){
        for(var i = 0; i<key; i++){
            symbolsKeyResult += symbols.charAt(Math.floor(Math.random() * symbols.length))
        }
        return symbolsKeyResult;
    }





    function arraySum(a) {
        return a.reduce((a, b) => a + b, 0)
      }
    function getRandomIntInclusive(min, max) {
        const minCeil = Math.ceil(min)
        const maxFloor = Math.floor(max)
        return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil
      }
    function randomNumbersWithFixedSum(quantity, sum) {
        const randoms = [...Array(quantity - 1).keys()].map(q => getRandomIntInclusive(1, sum/quantity))
        const last = sum - arraySum(randoms)
        return [...randoms, last]
      }
    //   console.log(randomNumbersWithFixedSum(4, range))





    let keyArray = [1,0,0,0]
    if(!(range==1)){
        keyArray = randomNumbersWithFixedSum(x, range);
    }
    console.log(keyArray)

      if(upperCaseCheck){
        upperKey(keyArray[0]);
      }
      if(lowerCaseCheck){
        loweKey(keyArray[1]);
      }
      if(numbersCheck){
        numbersKey(keyArray[2]);
      }
      if(symbolsCheck){
        symbolsKey(keyArray[3]);
      }
    //   console.log(uppkeyKeyResult, lowerKeyResult, numbersKeyResult, symbolsKeyResult)



      let finalKey = uppkeyKeyResult.concat(lowerKeyResult, numbersKeyResult, symbolsKeyResult);
      console.log(finalKey)
      
    
      function ButtonClick(){
          setCopyCheck(false);
          setPassword(finalKey);
          setStrenth(x);
          if(range<x){
              setPassword("NOT VALID !");
              setStrenth(0);
            }
          if(x==0){
                setPassword("NOT ENTERED !")
            }
      }

      function CopyToClipBoard(){
        setcopy(password);
        setCopyCheck(true);
        toast.success(`You have copied "${password}"`, {autoClose:2000}, {position: toast.POSITION.TOP_CENTER});
      }


    

    return(
        <div>
            {/* <div className={styles.heading}><div className='col-12'>Password Generator</div></div> */}
        <div className={styles.wrapper}>
            <p className={styles.heading}>Password Generator</p>
            <div className={styles.container}>
                <div className={styles.display}>
                    <div className='row'>
                        <div className='col-8'>
                            <div className={styles.screen}><p>{password}</p></div>
                        </div>
                        <div className='col-4'>
                            <div onClick={CopyToClipBoard} className={copyCheck?(styles.copyActive):(styles.copy)}><img src={copyCheck?(copy2):(copy)} width="40" height="20" /></div>
                        </div>
                    </div> 
                </div>

                <div className={styles.spaceManager}></div>

                <div className={styles.strengthContainer}>

                    <div className='row'>
                        <div className='col-8'>
                            <div className={styles.charecterLength}><p>Charecter Length</p></div>
                        </div>
                        <div className='col-4'>
                            <div className={styles.strengthNumber}>{range}</div>
                        </div>
                    </div>

                    <div className={styles.range}>
                        <div className='row'>
                            <div className={styles.slidecontainer}>
                                <input onChange={(e)=>{setRange(e.target.value)}} value={range} id='range' type='range' min='0' max='8'/>
                            </div>
                        </div>
                    </div>  

                    <div className={styles.checkbox}>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input onClick={() => setUpperCaseCheck(!upperCaseCheck)} type='checkbox'/>
                                </div>
                            </div>
                            <div className='col-9'><p>Include Uppercase Letters</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input onClick={() => setLowerCaseCheck(!lowerCaseCheck)} type='checkbox'/>
                                </div>
                            </div>
                            <div className='col-9'><p>Include Lowercase Letterd</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input onClick={() => setNumbersCheck(!numbersCheck)} type='checkbox'/>
                                </div>
                            </div>
                            <div className='col-9'><p>Include Numbers</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input onClick={() => setSymbolsCheck(!symbolsCheck)} type='checkbox'/>
                                </div>
                            </div>
                            <div className='col-9'><p>Include Symbols</p></div>
                        </div>
                    </div>

                    <div className={styles.strengthDisplay}>
                        <div className='row'>
                            <div className='col-8'>
                                <p>STRENGTH</p>
                            </div>
                            <div className='col-4'>
                                <div className={styles.indicatorContainer}>
                                        <div className='col-1'><div className={`${styles.indicator} ${strength>=1?(styles.indicatorActive):("") }`}></div></div>
                                        <div className='col-1'><div className={`${styles.indicator} ${strength>=2?(styles.indicatorActive):("") }`}></div></div>
                                        <div className='col-1'><div className={`${styles.indicator} ${strength>=3?(styles.indicatorActive):("") }`}></div></div>
                                        <div className='col-1'><div className={`${styles.indicator} ${strength>=4?(styles.indicatorActive):("") }`}></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={ButtonClick} className={styles.generateButton}>
                        <div className='row'>
                            <div className='col-6'>
                                <div><p>GENERATE</p></div>
                            </div>
                            <div className='col-5'><img src={arrow} width="40" height="20" /></div>
                        </div>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
        </div>
    )
}

export default PasswordGenerator;