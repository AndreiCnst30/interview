import React, {useEffect, useState} from "react";

export default function GenerateData() {
    const [response, setResponse] = useState(null);

    function postDummy() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: Math.random()*1000,
                name:'test',
                price:22
            })
        };
        fetch("/api/postDummy", requestOptions).then(res => {
            console.log(res);
            if (res.status !== 200) {
                alert('Id already exists');
            } else {
                res.json().then(resjson => {
                    setResponse(resjson.id);
                })

            }
        })
    }

    return(
        <div>
            <button onClick={() => postDummy()}>
                Generate Dummy data
            </button>
            <div>{response}</div>
        </div>

    );
}
