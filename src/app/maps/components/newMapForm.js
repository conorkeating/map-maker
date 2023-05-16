'use client';

import { Fragment } from "react";

export default function NewMapForm() {
    async function createMap() {
        const res = await fetch('http://localhost:3080/maps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({name: document.getElementById("mapName").value})
        })
    }
    
    return (
        <Fragment>
            <input type="text" id="mapName" placeholder="map name" class="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:text-gray-900"/>
            <button onClick={createMap} class="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400">Create</button>
        </Fragment>
    )
}