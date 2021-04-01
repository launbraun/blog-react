import React from "react";

const Pagination = () => {

    return (
        <>
            <ul className="pagination">
                <li className="pagination__item">
                    <a href="#" className="pagination__link">&lt;</a>
                </li>
                <li className="pagination__item">
                    <a href="#" className="pagination__link">1</a>
                </li>
                <li className="pagination__item">
                    <a href="#" className="pagination__link active">2</a>
                </li>
                <li className="pagination__item">
                    <a href="#" className="pagination__link">3</a>
                </li>

                <li>
                    <a href="#" className="pagination__link">&gt;</a>
                </li>
            </ul>
        </>
    )
}

export default Pagination
