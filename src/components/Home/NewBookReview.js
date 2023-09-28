// This javascript module defines a component that displays a form for
// creating a new book review.
import React from 'react';

const NewBookReview = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
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
                    <input type="text" name="bookname" />
                </label>
                <br />
                <label>
                    Author Name:
                    <input type="text" name="authorname" />
                </label>
                <br />
                <label>
                    Review:
                    <input type="text" name="review" />
                </label>
                <br />
                <label>
                    Rating:
                    <input type="text" name="rating" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default NewBookReview;
