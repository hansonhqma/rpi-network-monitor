import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import request from 'graphql-request';
import axios from 'axios';
import data from '@/assets/jsonFile/mock-data.json';
import './TableSection.module.css';
//import * as dataFunctions from '@/backEnd/index.js';

const App = () => {
    const [infos, setInfo] = useState(data);
    const [sortedData, setSortedData] = useState([...data]);
    const sortData = (sortBy) => {
        const sorted = [...sortedData].sort((a, b) => {
          if (a[sortBy] < b[sortBy]) {
            return -1;
          }
          if (a[sortBy] > b[sortBy]) {
            return 1;
          }
          return 0;
        });
        setSortedData(sorted);
    };

    /*    
    const [sortedFeild, setSortedField] = React.useState(null);
    if(sortedFeild != null){
        sortedLocations.sort((a, b) => {
            if(a[sortedFeild] < b[sortedFeild]){
                return -1;
            }
            if(a[sortedFeild] > b[sortedFeild]){
                return -1;
            }
            return 0;
        })
    }

    const columns = [
        {
            Header: 'Building',
            accessor: 'building_name',
        },
        {
            Header: 'RTT',
            accessor: 'building_id',
        },
        {
            Header: 'Updated Time',
            accessor: 'last_updated',
        },
    ];    
    
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/get_building_avg')
          .then(response => setData(response.data))
          .catch(error => console.log(error));
      }, []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });*/

    return (
        <div className="webpage-content-section-container">
            <table>
                <thead>
                    <tr>
                        <th><h5>Building &nbsp;
                            <button onClick={() => sortData("building_name")}>sort</button>
                            </h5></th>
                        <th><h5>Gateway &nbsp;
                            <button onClick={() => sortData("ip_address")}>sort</button>
                            </h5></th>
                        <th><h5>RTT (ms) &nbsp;
                            <button onClick={() => sortData("rtt")}>sort</button>
                            </h5></th>
                        <th><h5>Last Updated &nbsp;
                            <button onClick={() => sortData("update_time")}>sort</button>
                            </h5></th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((info, index) => (
                        <tr key={"Table-Element-" + index}>
                            <td>{info.building_name}</td>
                            <td>{info.ip_address}</td>
                            <td>{info.rtt}</td>
                            <td>{info.update_time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;