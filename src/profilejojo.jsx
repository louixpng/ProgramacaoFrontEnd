import React from 'react';

export default function ProfileJojo({ foto, nome, stand }){
    return (
        <div>
           <img src = {foto}/>
            <h2>Nome: {nome}</h2>
            <h2>Stand: {stand}</h2>
        </div>
    )
}