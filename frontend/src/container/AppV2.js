import React, { useState, useEffect } from 'react';
import { Link,Route } from 'react-router-dom'
import Judgement from '../pages/Judgement';

import './AppV2.css'



function Post(props) {
    const { id, case_title, head_note, judgement, petitioner_name, respondent_name, judgement_html, judge_name, court_name, date_of_judgement } = props.data;
    return (
        <div className="post">
            <small>{id}</small>
            <h1>{case_title}</h1>
            <h5>Petitioner : {petitioner_name}</h5>
            <h6>Respondent : {respondent_name}</h6>
            <h6>Judgement By : {judge_name} of {court_name}</h6>
            <hr></hr>
            <h4>{head_note}</h4>
            <Link to={'/judgement/' + id}>Read More</Link>
            <Route exact path="/judgements/:judgementId" component={Judgement}></Route>

        </div>
    );
}

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
        
      }, [currentPage]);

    return (
        <div>
            <h1>{title}</h1>

            {/* show the posts, 10 posts at a time */}
            <div className="dataContainer">
                {getPaginatedData().map((d, idx) => (
                    <RenderComponent key={idx} data={d} />
                ))}
            </div>

            {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
            <div className="pagination">
                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
      </button>

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
      </button>
            </div>
        </div>
    );


}



export default function AppV2() {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [start, setStart] = useState(0);

    useEffect(() => {
        const url = `http://155.138.197.117:8983/solr/caselaws_v2/select?q=*%3A*&rows=10&start=` + start;
        fetch(url)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error('something went wrong while requesting posts');
            })
            .then((posts) => {
                setPosts(posts.response.docs)
                setStart(start+10)
                console.log(start)
            })
            .catch((error) => setError(error.message));
    }, []);

    if (error) return <h1>{error}</h1>;

    return (
        <div>
            {posts.length > 0 ? (
                <>
                    <Pagination
                        data={posts}
                        RenderComponent={Post}
                        title="Judgements"
                        pageLimit={5}
                        dataLimit={10}
                    />
                </>
            ) : (
                <h1>Please wait while data gets loaded...</h1>
            )}
        </div>
    );
}
