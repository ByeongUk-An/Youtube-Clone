import React, { useRef } from 'react'
import styles from './searchheader.module.css'

function SearchHeader({onSearch}) {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value)
        onSearch(value);
    }
    const onClick = () => {
        handleSearch();
    }
    const onKeyPress = (event) => {
        if(event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
            <img src="/images/logo.png" alt="logo" className={styles.img}/>
            <h1 className={styles.title}>Youtube</h1>
            </div>
            <input type="search" placeholder='Search...' className={styles.input} onKeyPress={onKeyPress} ref={inputRef}/>
            <button type='submit' className={styles.button} onClick={onClick}>
                <img className={styles.buttonImg} src="/images/search.png" alt="search"/>
            </button>
        </header>
    )
}

export default SearchHeader
