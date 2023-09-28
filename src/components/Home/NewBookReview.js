// This javascript module defines a component that displays a form for
// creating a new book review.
import React from 'react';

const NewBookReview = () => {
    
    const [bookname, setBookname] = React.useState('');
    const [authorname, setAuthorname] = React.useState('');
    const [review, setReview] = React.useState('');
    const [rating, setRating] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
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
                    <input type="text" name="review" />
                </label>
                <br />
                <label>
                    Rating:
                    <input type="text" name="rating" onChange={(e)=>setRating(e.target.value)}/>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default NewBookReview;
