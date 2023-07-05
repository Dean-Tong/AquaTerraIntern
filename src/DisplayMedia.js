import { useEffect, useState } from 'react';
import Mediabox from './Mediabox';
import './DisplayMedia.css'


export default function DisplayMedia() {

    function handleClick() {
        const newSet = Array(8).fill(0);

        const fetchChangeSet = async() => {

            // give a new link to each media box
            for(let i = 0; i < newSet.length; i++) {

                while(newSet[i] === 0) {

                    // fetch data from API
                    const response = await fetch('https://random.dog/woof.json');
                    const json = await response.json();

                    //check if the file is an image
                    if(imageType.includes(json['url'].split('.').pop().toLowerCase())) {
                        newSet[i] = { 'url':json['url'], 'type': 'image'};

                    // check if the file is a video
                    } else if(videoType.includes(json['url'].split('.').pop().toLowerCase())) {
                        newSet[i] = { url:json['url'], type: 'video'};

                    // keep fetching if it is unrecognized
                    } else {
                        continue;
                    }

                }
            }
            setMedias(newSet);
        }

        fetchChangeSet()
        .catch((err) => console.log(err));
    }

    // fetch the links for each media box after rendered
    useEffect(() => {

        // new initial link set
        const initSet = Array(8).fill(0);

        

        const fetchNewSet = async() => {

            // assign each link to the set
            for (let i = 0; i < initSet.length; i++) {

                while(initSet[i] === 0) {
                
                // fetch data from API
                const response = await fetch('https://random.dog/woof.json');
                const json = await response.json();

                //check if the file is an image
                if(imageType.includes(json['url'].split('.').pop().toLowerCase())) {
                    initSet[i] = { 'url':json['url'], 'type': 'image'};

                // check if the file is a video
                } else if(videoType.includes(json['url'].split('.').pop().toLowerCase())) {
                    initSet[i] = { url:json['url'], type: 'video'};

                // keep fetching if it is unrecognized
                } else {
                    continue;
                }
                

                }

            }

            // update the media links with the new set
            setMedias(initSet);
            

        }

        fetchNewSet()
        .catch((err) => console.log(err));

    },[]);


    
    // store links for each mediaboxes
    const [medias, setMedias] = useState(Array(8).fill(null));

    //common image type
    const imageType = ['jpg','jpeg','jfif','pjpeg','pjp','gif','png','svg'];

    //common video type
    const videoType = ['mp4','webm'];


    return (
        <div className='displayMedia'>

            <div className='grid-container'>
                <Mediabox media={medias[0]} />
                <Mediabox media={medias[1]} />
                <Mediabox media={medias[2]} />
                <Mediabox media={medias[3]} />
                <Mediabox media={medias[4]} />
                <Mediabox media={medias[5]} />
                <Mediabox media={medias[6]} />
                <Mediabox media={medias[7]} />
                
            </div>


            <button className='switchButton' onClick={handleClick}>Another Set</button><br />
            <reminding>The reloading speed may be slow depending on the network.</reminding>
        
        
        </div>

    );
};