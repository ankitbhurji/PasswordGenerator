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
    const [checkbox, setCheckbox] = useState({
        upperCase: false,
        lowerCase: false,
        numbers  : false,
        symbols  : false
    });
    const [password, setPassword] = useState('N5$SYOTp');
    const [copyCheck, setCopyCheck] = useState(false);
    

    let indicator1 = checkbox.upperCase ? 1 : 0
    let indicator2 = checkbox.lowerCase ? 1 : 0
    let indicator3 = checkbox.numbers ? 1 : 0
    let indicator4 = checkbox.symbols ? 1 : 0
    let indictor = indicator1 + indicator2 + indicator3 + indicator4;


    let UpperKeys =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerKeys =  "abcdefghijklmnopqrstuvwxyz";
    let NumberKeys = "0123456789";
    let symbolkeys = "@#$%^&*()_+~|}{[]></-=";
    let RandomKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+~|}{[]></-=";


    function Generator(keys){
        return keys[Math.floor(Math.random()* keys.length)];
    }

    let generatedPassword = '';
    function generatePassword(){
        if(!checkbox.upperCase && !checkbox.lowerCase && !checkbox.numbers && !checkbox.symbols){
            generatedPassword += Generator(RandomKey)
        }
        if(range>=indictor){
            if(checkbox.upperCase){
                generatedPassword += Generator(UpperKeys);
            }
            if(checkbox.lowerCase){
                generatedPassword += Generator(lowerKeys);
            }
            if(checkbox.numbers){
                generatedPassword += Generator(NumberKeys);
            }
            if(checkbox.symbols){
                generatedPassword += Generator(symbolkeys);
            }
            if(generatedPassword.length < range){
                return generatePassword(generatedPassword);
            }
            var finalPassword = limit(generatedPassword, range);
            setPassword(finalPassword);
            generatedPassword='';
        }else{
            setPassword('Invalid!');
        }
    }

    const limit = (string, length) => {
        return string.length < length ? string : string.substring(0, length)
    }

    
    function ButtonClick(){
        generatePassword();
      }

    function CopyToClipBoard(){
        setcopy(password);
        setCopyCheck(true);
        toast.success('copied');
      }



    return(
        <div>
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
                                <input onChange={(e)=>{setRange(e.target.value)}} value={range} id='range' type='range' min='0' max='10'/>
                            </div>
                        </div>
                    </div>  

                    <div className={styles.checkbox}>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input onClick={() => setCheckbox({...checkbox, upperCase: !(checkbox.upperCase)})} type='checkbox'/>
                                    {/* <input onClick={() => setUpperCaseCheck(!upperCaseCheck)} type='checkbox'/> */}
                                </div>
                            </div>
                            <div className='col-9'><p>Include Uppercase Letters</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input onClick={() => setCheckbox({...checkbox, lowerCase: !(checkbox.lowerCase)})} type='checkbox'/>
                                </div>
                            </div>
                            <div className='col-9'><p>Include Lowercase Letterd</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input onClick={() => setCheckbox({...checkbox, numbers: !(checkbox.numbers)})} type='checkbox'/>
                                </div>
                            </div>
                            <div className='col-9'><p>Include Numbers</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input onClick={() => setCheckbox({...checkbox, symbols: !(checkbox.symbols)})} type='checkbox'/>
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
                                        <div className='col-1'><div className={`${styles.indicator} ${indictor>=1?(styles.indicatorActive):("") }`}></div></div>
                                        <div className='col-1'><div className={`${styles.indicator} ${indictor>=2?(styles.indicatorActive):("") }`}></div></div>
                                        <div className='col-1'><div className={`${styles.indicator} ${indictor>=3?(styles.indicatorActive):("") }`}></div></div>
                                        <div className='col-1'><div className={`${styles.indicator} ${indictor>=4?(styles.indicatorActive):("") }`}></div></div>
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
            <ToastContainer position="top-center"
                            autoClose={false} 
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover 
                            limit={1}
            />
        </div>
        </div>
    )
}

export default PasswordGenerator;