import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Console.js] useEffect');
        // Http request...
        //setTimeout(() => {
        //    alert('Saved data to cloud!');
        //}, 1000);
        toggleBtnRef.current.click();
        return() => {
            console.log('[Cockpit.js] Cleanup work');
        }
    }, []);

    useEffect(() => {
        console.log('[Console.js] 2nd useEffect');
        return() => {
            console.log('[Cockpit.js] Cleanup work 2');
        }
    });

    const classType = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.personsLength <= 2) {
      classType.push(classes.red);
    }
    if (props.personsLength <= 1) {
      classType.push(classes.bold);
    };
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classType.join(' ')}>This is really workings!</p>
            <button
            ref={toggleBtnRef} 
            className={btnClass}
            onClick={props.clicked}>Toggle Form
            </button>
            <AuthContext.Consumer> {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);