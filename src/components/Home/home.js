import React from 'react';
import Year from './year';
import NewBookReview from './NewBookReview';
const Home = () => {

    // fetch list of book details from '/all_books' and display them in a table
    // each book details has bookname , authorname , rating , review
    const [booklist, setBooklist] = React.useState([{}]);

    React.useEffect(() => {
    fetch('/all_books')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setBooklist(data);
        });
    }
    , []);
    return (
        <div>
            <div>
                <h1>IITH Books Rating System</h1>
            </div>
            <NewBookReview/>
            {/*horizontal list of buttons */}
            <div>
                <h2>
                    Branch and Year wise list of books
                </h2>
            </div>
            <div className='branch-div'>
                <button className='branch-button'>CSE</button>
                <button className='branch-button'>ECE</button>
                <button className='branch-button'>ME</button>
                <button className='branch-button'>CE</button>
                <button className='branch-button'>EEE</button>
                <button className='branch-button'>BSBE</button>
                <button className='branch-button'>CL</button>
                <button className='branch-button'>CH</button>
                <button className='branch-button'>DESIGN</button>
                <button className='branch-button'>MATERIALS</button>
                <button className='branch-button'>PHY</button>
                <button className='branch-button'>CHEM</button>
                <button className='branch-button'>MATHS</button>
                <button className='branch-button'>LIBRARY</button>
                <button className='branch-button'>OTHERS</button>

            </div>

            <Year />
            <div className='center'>
                <h2>
                    List of books
                    

                </h2>
                {/* display the booklist data in list using any template */}
                <table>
                    <tr>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Rating</th>
                        <th>Review</th>
                    </tr>
                    {booklist.map((book) => (
                        <tr>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.rating}</td>
                            <td>{book.review}</td>
                        </tr>
                    ))}
                </table>
                </div>
            
        </div>
    );
}

export default Home;
