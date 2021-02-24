import React, { useState, useRef } from 'react'
import axios from 'axios';

const create_instance = axios.create({
        baseURL : 'http://api.wordnik.com/v4/words.json/',
    })


const get_randomword = async () =>{
    const randomword= await create_instance.get ( `randomWord`,
         {
             params:{
            hasDictionaryDef: true,
            minCorpusCount: 0,
            maxCorpusCount: -1,
            maxDictionaryCount: -1,
            minLength: 6,
            maxLength: 12,
            api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
         }
        })
    return(randomword)
}

export default{
    get_randomword
}