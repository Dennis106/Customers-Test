import React, { Component } from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';

class Pagination extends Component {
    render() { 
        const {currentPage, totalPage, onPrevPage, onNextPage, onFirstPage, onLastPage} = this.props;

        return ( 
            <div className={"d-flex py-2 justify-content-center"}>
                <div className = {"d-flex"}>
                    {currentPage === 1 ? 
                        <>
                            <span className={"d-flex align-items-center"}><FirstPage style={{color:'grey'}}/></span>
                            <span className={"d-flex align-items-center"}><ChevronLeft style={{color: 'grey'}}/></span>
                        </> : 
                        <>
                            <span className={"d-flex align-items-center"} onClick={onFirstPage}><FirstPage style={{color:'blue'}}/></span>
                            <span className={"d-flex align-items-center"} onClick={onPrevPage}><ChevronLeft style={{color: 'blue'}}/></span>
                        </>
                    }
                    <span className="mr-sm-2 ml-sm-2 border px-3">{currentPage}</span>
                    {currentPage === totalPage ? 
                        <>
                            <span className={"d-flex align-items-center"}><ChevronRight style={{color:'grey'}}/></span>
                            <span className={"d-flex align-items-center"}><LastPage style={{color:'grey'}}/></span>
                        </> : 
                        <>
                            <span className={"d-flex align-items-center"} onClick={onNextPage}><ChevronRight style={{color:'blue'}}/></span>
                            <span className={"d-flex align-items-center"} onClick={onLastPage}><LastPage style={{color:'blue'}}/></span>
                        </>
                    }
                </div>
            </div>
        );
    }
}
 
export default Pagination;