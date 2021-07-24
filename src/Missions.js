import React, {useState, useEffect} from 'react';

function Mission() {
    const [data, setData] = useState('');
    const getInfo = async () => {
        try{
            let response = await fetch('https://api.spacexdata.com/v3/missions/F3364BF');
            let info = await response.json();
            setData(info);
            return;
        }catch(err){
            alert(err)
        }
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div>
            <center><b><h1>{data.mission_name}</h1></b></center>
            <center><h6>MISSION ID: {data.mission_id}</h6></center>
            <center><h6>MANUFACTURERS: {data.manufacturers}</h6></center>
            <center><p align = "justify"><h4>{data.description}</h4></p></center>
        </div>
    )
}

export default Mission;