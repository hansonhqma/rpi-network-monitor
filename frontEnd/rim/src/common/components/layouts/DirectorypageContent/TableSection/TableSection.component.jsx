import { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import request from 'graphql-request';
import axios from 'axios';
import data from '@/assets/jsonFile/mock-data.json';
import './TableSection.module.css';
//import * as dataFunctions from '@/backEnd/index.js';

const App = () => {
    const [infos, setInfo] = useState(data);
    /*
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
                        <th><h5>Building</h5></th>
                        <th><h5>Download Speed (Mbps)</h5></th>
                        <th><h5>Updoad Speed (Mbps)</h5></th>
                        <th><h5>RTT (ms)</h5></th>
                        <th><h5>Last Updated Time</h5></th>
                    </tr>
                </thead>
                <tbody>
                    {infos.map((info) => (
                        <tr>
                            <td>{info.building_name}</td>
                            <td>{info.download_speed}</td>
                            <td>{info.upload_speed}</td>
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