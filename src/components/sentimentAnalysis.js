import React, { useEffect, useState } from 'react';
import aposToLexForm from "apos-to-lex-form"
import { WordTokenizer , SentimentAnalyzer , PorterStemmer } from "natural";


const {removeStopwords , eng, fra} = require('stopword');


const tokenizer = new WordTokenizer();

const analyzer = new SentimentAnalyzer('English',PorterStemmer,'afinn')


function getSentiment(str) { 

    str = String(str)
    if(!str.trim()){
        return 0;
    }
    const lexed = aposToLexForm(str).toLowerCase().replace(/[^a-zA-Z\s]+/g,"");

    const tokenized = tokenizer.tokenize(lexed);

    //fix spelling

    const stopwordsRemoved = removeStopwords(tokenized)
    console.log(stopwordsRemoved)
    const analyzed = analyzer.getSentiment(stopwordsRemoved)

    console.log(analyzed)
    if(analyzed < 0 ){
        return 'Negative'
    }
    if(analyzed == 0 ){
        return 'Neutral'
    }
    else{
        return 'Positive'
    }

}

//console.log(getSentiment('This item is worst!'))



const SentimentAnalysis = () => {
    
    
    //const result = "hello"
    const [reviewText,setreviewText] = useState('');
    const [result , setResult] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault()
        setResult(getSentiment(reviewText))
    }
    return (
        <div>
            {result}
            <form onSubmit={e=>handleSubmit(e)}>
                <label>Enter review
                    <input type='text'  onChange={e=>setreviewText(e.target.value)} />
                </label>
                <input type='Submit'></input>
            </form>
        </div>
    );
}

export default SentimentAnalysis;




