"use client";
import React, { useState } from 'react'
import axios from "axios";

import styles from "../styles/Home.module.css";


export default function Header() {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState([]);


  const [serverUrl, setServerUrl] = useState('http://localhost:3333/api/v1/user');


  const handleSubmit = async () => {

    const response = await axios.get(serverUrl, {
    });

    setResult(response.data.result);
    setShowResult(true);
  };

  const getTime = (time) => {

    const dateTime = new Date(time * 1000)
    var formatted = ('0' + dateTime.getHours()).slice(-2) + ':' + ('0' + dateTime.getMinutes()).slice(-2);
    console.log((dateTime.toISOString()).split("T", 1)[0] + " " + formatted);
    return (dateTime.toISOString()).split("T", 1)[0] + " " + formatted;
  }


  return (
    <section className={styles.main}>
      <button className={styles.form_btn} onClick={handleSubmit}>
        Click Me
      </button>
      <section className={styles.result}>
        {showResult &&
          result.map((log, i) => {
            return (
              <section className={styles.resultContainer} key={i}>
                <section className={styles.resultContainer_header}>
                  <span>Time: {log.block_timestamp.split("T", 1)[0]}</span>
                  <span>Block Number: {log.block_number}</span>
                </section>
                <section className={styles.resultContainer_data}>
                  <p>Address: {log.address}</p>
                  <p>Transaction Hash: {log.transaction_hash}</p>
                  <p>User Name: {log.data._name}</p>
                  <p>Phone Number: {log.data._phoneNumber}</p>
                  <p>Email: {log.data._email}</p>
                  <p>Created At: {getTime(log.data._time)} ({log.data._time})</p>

                </section>
              </section>
            );
          })}
      </section>
    </section>
  );
}