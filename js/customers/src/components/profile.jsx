import React, { forwardRef } from 'react';
import NavBar from './navbar';
import MaterialTable from "material-table";
import { useParams } from 'react-router-dom';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';

import customersData from '../data/customers.json'

const customerQuery = (id) => {
    const customers = customersData.filter(customer => (Number(customer.id) === Number(id)));
    return customers.length ? customers[0] : false;
}

const Profile = (props) => {
    const { id } = useParams();
    const customer = customerQuery(id);
    const tableIcons = {
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    };

    if (customer) {
        return (
            <React.Fragment>
                <NavBar
                    title={"Customer Profile"}
                    isSearch={false} />
                <div className={"p-4 justify-content-center d-flex"}>
                    <div className={"card border-secondary mr-sm-4"} style={{ width: '100%', maxWidth: '1000px' }}>
                        <div className={"card-header font-weight-bold"}>{customer.first_name} {customer.last_name}</div>
                        <div className="card-body">
                            <p className={"card-text"}>
                                <span className={"font-weight-bold"} style={{ display: 'inline-block', width: '80px' }}>Email:</span>
                                <span>{customer.email}</span>
                            </p>
                            <p className={"card-text"}>
                                <span className={"font-weight-bold"} style={{ display: 'inline-block', width: '80px' }}>Phone:</span>
                                <span>123-123-1234</span>
                            </p>
                            <p className={"card-text"}>
                                <span className={"font-weight-bold"} style={{ display: 'inline-block', width: '80px' }}>Mobile:</span>
                                <span>123-123-9876</span>
                            </p>
                            <p className={"card-text"}>
                                <span className={"font-weight-bold"} style={{ display: 'inline-block', width: '80px' }}>Since:</span>
                                <span>March 2015</span>
                            </p>
                            <p className={"card-text"}>
                                <span className={"font-weight-bold"} style={{ display: 'inline-block', width: '80px' }}>Location:</span>
                                <span>{customer.ip}, {customer.latitude}, {customer.longitude}</span>
                            </p>
                            <div className={"card-text"}><span className={"font-weight-bold"}>Interests</span></div>
                            <p>
                                <span className={"badge badge-secondary mr-2 ml-2"}>Photography</span>
                                <span className={"badge badge-secondary mr-2"}>Speed Cubes</span>
                                <span className={"badge badge-secondary mr-2"}>Fortnite</span>
                                <span className={"badge badge-secondary mr-2"}>Mother of Dragons</span>
                            </p>
                            <p className="card-text"><span className="font-weight-bold">Orders</span></p>
                            <MaterialTable
                                columns={[
                                    { title: "#", field: "id" },
                                    { title: "Date", field: "date" },
                                    { title: "Status", field: "status" },
                                    { title: "Actions", field: "action" }
                                ]}
                                data={[
                                    {
                                        id: "789",
                                        date: "2018-06-15T16:00:00Z",
                                        status: "Processing",
                                        action: <a href="/order/789">View</a>
                                    },
                                    {
                                        id: "456",
                                        date: "2018-06-10T15:55:00Z",
                                        status: "Shipped",
                                        action: <a href="/order/456">View</a>
                                    },
                                    {
                                        id: "123",
                                        date: "2018-06-01T16:00:00Z",
                                        status: "Delivered",
                                        action: <a href="/order/123">View</a>
                                    },
                                ]}
                                options={{
                                    toolbar: false,
                                    cellStyle: { paddingTop: '15px', paddingBottom: '15px', fontSize: '80%' },
                                    headerStyle: { paddingTop: '15px', paddingBottom: '15px', fontSize: '80%', fontWeight: 'bold' },
                                }}
                                icons={tableIcons}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <NavBar
                    title={"Customer Profile"}
                    isSearch={false} />
                <div className={"p-4 justify-content-center d-flex"}>
                    <div className={"card border-secondary mr-sm-4"} style={{ width: '100%', maxWidth: '1000px' }}>
                        <div className={"card-header font-weight-bold"}>No Data. ID is wrong.</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Profile;