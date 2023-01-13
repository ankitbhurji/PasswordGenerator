import styles from './PasswordGenerator.module.css'
import copy from '../images/copy.svg'
import copy2 from '../images/copy2.svg'
import arrow from '../images/arrow.svg'
import React, {useState } from 'react'
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
    const [password, setPassword] = useState({
        first:'N5$SYOTp',
        second: 'Empty',
        third: 'Empty',
        fourth: 'Empty'
    });
    const [copyCheck, setCopyCheck] = useState({
        isCopyFirst:false,
        isCopySecond:false,
        isCopyThird: false,
        isCopyFourth: false
    });
    

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
            // setPassword(finalPassword);
            // setPassword({...password, first:finalPassword});
            setPassword( {...password, first:finalPassword, second:password.first, third:password.second, fourth:password.third})
            generatedPassword='';
        }else{
            setPassword({...password, first:'Invalid!'});
        }
    }

    const limit = (string, length) => {
        return string.length < length ? string : string.substring(0, length)
    }

    
    
    

    function ButtonClick(){
        generatePassword();
        setCopyCheck({...copyCheck,
                        isCopyFirst:false,
                        isCopySecond:false,
                        isCopyThird:false,
                        isCopyFourth:false
                    })
    };
    function CopyToClipBoard(){
        setcopy(password.first);
        setCopyCheck({...copyCheck,
                        isCopyFirst:true,
                        isCopySecond:false,
                        isCopyThird:false,
                        isCopyFourth:false
                    });
        toast.success('copied');
    };
    function CopyToClipBoardPrev1(){
        setcopy(password.second);
        setCopyCheck({...copyCheck,
                        isCopySecond:true,
                        isCopyFirst:false,
                        isCopyThird:false,
                        isCopyFourth:false
                    });
        toast.success('copied');
    };
    function CopyToClipBoardPrev2(){
        setcopy(password.third);
        setCopyCheck({...copyCheck,
                        isCopyThird:true,
                        isCopyFirst:false,
                        isCopySecond:false,
                        isCopyFourth:false
                    });
        toast.success('copied');
    };
    function CopyToClipBoardPrev3(){
        setcopy(password.fourth);
       setCopyCheck({...copyCheck,
                       isCopyFourth:true,
                       isCopyFirst:false,
                       isCopySecond:false,
                       isCopyThird:false
                    });
       toast.success('copied');
    };


    return(
        <div className='row'>
        <div className='col-7'>
        <div className={styles.wrapper}>
            <p className={styles.heading}>Password Generator</p>
            <div className={styles.container}>
                <div className={styles.display}>
                    <div className='row'>
                        <div className='col-8'>
                            {/* <div className={styles.screen}><p>{password}</p></div> */}
                            <div className={styles.screen}><p>{password.first}</p></div>
                        </div>
                        <div className='col-4'>
                            <div onClick={CopyToClipBoard} className={copyCheck.isCopyFirst?(styles.copyActive):(styles.copy)}><img src={copyCheck.isCopyFirst?(copy2):(copy)} width="40" height="20" /></div>
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
                                    {/* <input onClick={() => setLowerCaseCheck(!lowerCaseCheck)} type='checkbox'/> */}
                                </div>
                            </div>
                            <div className='col-9'><p>Include Lowercase Letterd</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input onClick={() => setCheckbox({...checkbox, numbers: !(checkbox.numbers)})} type='checkbox'/>
                                    {/* <input onClick={() => setNumbersCheck(!numbersCheck)} type='checkbox'/> */}
                                </div>
                            </div>
                            <div className='col-9'><p>Include Numbers</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input onClick={() => setCheckbox({...checkbox, symbols: !(checkbox.symbols)})} type='checkbox'/>
                                    {/* <input onClick={() => setSymbolsCheck(!symbolsCheck)} type='checkbox'/> */}
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
                    <button onClick={ButtonClick} className={styles.button}><span>GENERATE </span></button>
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
        <div className='col-5'>
            <div className= {styles.PreData}>
                <p className={styles.recentPasswords}>Recent Passwords</p>
                <div className={styles.prevData1}>
                    <div className='row'>
                        <div className='col-8'>
                            <div><p>{password.second}</p></div>
                        </div>
                        <div className='col-4'>
                            <div className={styles.prevCopy}>
                                <div onClick={CopyToClipBoardPrev1} className={copyCheck.isCopySecond?(styles.copyActive):(styles.copy)}><img src={copyCheck.isCopySecond?(copy2):(copy)} width="40" height="20" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.prevData2}>
                    <div className='row'>
                        <div className='col-8'>
                            <div><p>{password.third}</p></div>
                        </div>
                        <div className='col-4'>
                            <div className={styles.prevCopy}>
                                <div onClick={CopyToClipBoardPrev2} className={copyCheck.isCopyThird?(styles.copyActive):(styles.copy)}><img src={copyCheck.isCopyThird?(copy2):(copy)} width="40" height="20" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.prevData3}>
                    <div className='row'>
                        <div className='col-8'>
                            <div><p>{password.fourth}</p></div>
                        </div>
                        <div className='col-4'>
                            <div className={styles.prevCopy}>
                                <div onClick={CopyToClipBoardPrev3} className={copyCheck.isCopyFourth?(styles.copyActive):(styles.copy)}><img src={copyCheck.isCopyFourth?(copy2):(copy)} width="40" height="20" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PasswordGenerator;