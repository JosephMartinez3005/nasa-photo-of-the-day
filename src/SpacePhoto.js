import React, {useEffect} from 'react'


function SpacePhoto(props){
    const {data} = props;
    return(
        <>
            <div>
            <h6>{data.title}</h6>
            <h6>{data.date}</h6>
            <p>{data.explanation}</p>
            {/* <url src={data.url}> */}
            </div>
        </>
    )
}

export default SpacePhoto;