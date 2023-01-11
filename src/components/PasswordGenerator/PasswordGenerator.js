import styles from './PasswordGenerator.module.css'

import React, { useState } from 'react';

let strength = 0;

function PasswordGenerator(){
    
    return(
        <div>
            {/* <div className={styles.heading}><div className='col-12'>Password Generator</div></div> */}
        <div className={styles.wrapper}>
            <p className={styles.heading}>Password Generator</p>
            <div className={styles.container}>
                <div className={styles.display}>
                    <div className='row'>
                        <div className='col-8'>
                            <div className={styles.screen}><p>password</p></div>
                        </div>
                        <div className='col-4'>
                            <div><img src='' width="40" height="20" /></div>
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
                            <div className={styles.strengthNumber}>range</div>
                        </div>
                    </div>

                    <div className={styles.range}>
                        <div className='row'>
                            <div className={styles.slidecontainer}>
                                <input value= 'range' id='range' type='range' min='0' max='8'/>
                            </div>
                        </div>
                    </div>  

                    <div className={styles.checkbox}>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input type='checkbox'/>
                                </div>
                            </div>
                            <div className='col-9'><p>Include Uppercase Letters</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input type='checkbox'/>
                                </div>
                            </div>
                            <div className='col-9'><p>Include Lowercase Letterd</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input type='checkbox'/>
                                </div>
                            </div>
                            <div className='col-9'><p>Include Numbers</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                                <div>
                                    <input  type='checkbox'/>
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

                    <button  className={styles.generateButton}>
                        <div className='row'>
                            <div className='col-6'>
                                <div><p>GENERATE</p></div>
                            </div>
                            <div className='col-5'><img src="arrow" width="40" height="20" /></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PasswordGenerator;