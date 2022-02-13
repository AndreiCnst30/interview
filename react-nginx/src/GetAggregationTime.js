import React, {useEffect, useState} from "react";

export default function GetAggregationTime() {
    const [response, setResponse] = useState(-1);

    useEffect(() => {
        fetch("/api/aggregationTime").then(res => res.json())
            .then(data => setResponse(data))
    },[]);

    return(
        <div>{response}</div>
    );
}