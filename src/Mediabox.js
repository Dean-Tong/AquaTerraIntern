import './Mediabox.css'
export default function Mediabox( {media} ) {

   
    

    console.log(media);

    // if it is the first time of rendering where no url assigned yet
    if (!media) {
        return <p>Loading...</p>;
    }

    if (media['type'] === "image") {
        return (
            <div className='grid-item'>
                <img className='media' src={media['url']} alt='Cannot download the file.'>
            
                </img>
            </div>
        );
    } else if (media['type'] === 'video'){
        return (
            <div className='grid-item'>
                <video className='media' autoPlay muted>
                    <source src={media['url']}></source>
                </video>
            </div>

        );
    } else {
        return <p>Error!</p>
    }
    
};