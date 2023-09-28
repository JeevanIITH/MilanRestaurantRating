// This javascript module defines a component that displays a form for
// creating a new book review.
import React from 'react';
import SentimentAnalysis from '../sentimentAnalysis';

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
        return 1
    }
    if(analyzed == 0 ){
        return 3
    }
    else{
        return 4.5
    }

}


const NewBookReview = () => {
    
    const [bookname, setBookname] = React.useState('');
    const [authorname, setAuthorname] = React.useState('');
    const [review, setReview] = React.useState('');
    const [rating, setRating] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setRating(getSentiment(review))
        const data = {
            bookname: bookname,
            bookauthor: authorname,
            bookreview: review,
            bookrating: rating
        }
        console.log(data);
        fetch('/bookreview/newreview', {
            method: 'POST',
            body: data,
        });
    }
    return (
        <div>
            <div>
                Rating will be inferred from the review using NLP in node module.
            </div>
            <form>
                <label>
                    Book Name:
                    <input type="text" name="bookname" onChange={(e)=>setBookname(e.target.value)}/>
                </label>
                <br />
                <label>
                    Author Name:
                    <input type="text" name="authorname" onChange={(e)=>setAuthorname(e.target.value)}/>
                </label>
                <br />
                <label>
                    Review:
                    <input type="text" name="review" onChange={(e)=>setReview(e.target.value)}/>
                </label>
                <br />
                <input type="submit" value="Submit" />
                
            </form>
        </div>
    );
}

export default NewBookReview;
