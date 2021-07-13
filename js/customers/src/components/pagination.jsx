import React, { Component } from 'react';
import {ChevronDoubleLeft, ChevronDoubleRight, ChevronLeft, ChevronRight} from 'react-bootstrap-icons';

class Pagination extends Component {
    render() { 
        const {currentPage, totalPage, onPrevPage, onNextPage, onFirstPage, onLastPage} = this.props;

        return ( 
            <div className={"d-flex py-2 justify-content-center"}>
                <div className = {"d-flex"}>
                    {currentPage == 1 ? 
                        <>
                            <a className={"d-flex align-items-center"}><ChevronDoubleLeft style={{color:'grey'}}/></a>
                            <a className={"d-flex align-items-center"}><ChevronLeft style={{color: 'grey'}}/></a>
                        </> : 
                        <>
                            <a className={"d-flex align-items-center"} onClick={onFirstPage}><ChevronDoubleLeft style={{color:'blue'}}/></a>
                            <a className={"d-flex align-items-center"} onClick={onPrevPage}><ChevronLeft style={{color: 'blue'}}/></a>
                        </>
                    }
                    <span className="mr-sm-2 ml-sm-2 border px-3">{currentPage}</span>
                    {currentPage == totalPage ? 
                        <>
                            <a className={"d-flex align-items-center"}><ChevronRight style={{color:'grey'}}/></a>
                            <a className={"d-flex align-items-center"}><ChevronDoubleRight style={{color:'grey'}}/></a>
                        </> : 
                        <>
                            <a className={"d-flex align-items-center"} onClick={onNextPage}><ChevronRight style={{color:'blue'}}/></a>
                            <a className={"d-flex align-items-center"} onClick={onLastPage}><ChevronDoubleRight style={{color:'blue'}}/></a>
                        </>
                    }
                </div>
            </div>
        );
    }
}
 
export default Pagination;