import React from 'react';
import Flags from './flags';
import './flaglist.css';



const flaglist = ({ flagsarray }) => {
    return (
        <div>{

            flagsarray.map((user, i) => {
                 console.log(user);
                return (
                    <div key={i} className="container">
                           
                        <Flags name={flagsarray[i].name} img={flagsarray[i].img} />
                    </div>
                )
            })
        }
        </div>
    )
}


export default flaglist;
