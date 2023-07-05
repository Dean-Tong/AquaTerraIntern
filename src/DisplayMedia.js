import { useEffect, useState } from 'react';
import Mediabox from './Mediabox';
import './DisplayMedia.css'


export default function DisplayMedia() {

    // fetch the links for each media box after rendered
    useEffect(() => {

        // new initial link set
        const initSet = Array(8).fill(0);

        const fetchNewSet = async() => {

            // assign each link to the set
            for (let i = 0; i < initSet.length; i++) {

                const response = await fetch('https://random.dog/woof.json');
                const json = await response.json();

                initSet[i] = json['url'];

            }

            // update the media links with the new set
            setMedias(initSet);
            

        }

        fetchNewSet()
        .catch((err) => console.log(err));

    },[]);


    
    // store links for each mediaboxes
    const [medias, setMedias] = useState(Array(8).fill(null));


    return (
        <div className='displayMedia'>

            <div className='grid-container'>
                <Mediabox url={medias[0]}/>
                <Mediabox url={medias[1]}/>
                <Mediabox url={medias[2]}/>
                <Mediabox url={medias[3]}/>
                <Mediabox url={medias[4]}/>
                <Mediabox url={medias[5]}/>
                <Mediabox url={medias[6]}/>
                <Mediabox url={medias[7]}/>
                
            </div>


            <button className='switchButton'>Another Set</button>
        
        
        </div>

    );
};