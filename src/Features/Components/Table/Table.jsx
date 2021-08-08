import React,{useState,useEffect} from 'react';
import { Route,Link } from 'react-router';

function Table() {
    const [data,setData] = useState();

    function getApiData(){
       fetch("https://raw.githubusercontent.com/antoinechassagne/data-charts/master/olympics.json")
       .then(res => res.json())
       .then(res => setData(res))
    }
    
    useEffect(getApiData,data);

    return (       
        <table>
            <tr>
            </tr>
        </table>
    );
}

export default Table;