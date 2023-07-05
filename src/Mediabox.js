import './Mediabox.css'
export default function Mediabox( {url} ) {

    const imageType = ['jpg','jpeg','jfif','pjpeg','pjp','gif','png','svg'];
    console.log(url);
    if (!url) {
        return <p>Loading</p>;
    }
    if (imageType.includes(url.split('.').pop())) {
        return (
            <div className='grid-item'>
                <img className='media' src={url} alt='Cannot download the file.'>
            
                </img>
            </div>
        );
    } else {
        return (<p>{url}</p>);
    }
    
};