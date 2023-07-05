import Mediabox from './Mediabox';

export default function DisplayMedia() {
    return (
        <div className='displayMedia'>

            <div className='mediaWall'>
                <Mediabox />
                <Mediabox />
                <Mediabox />
                <Mediabox />
                <Mediabox />
                <Mediabox />
                <Mediabox />
                <Mediabox />
            </div>


            <button className='switchButton'>Another Set</button>
        
        
        </div>

    );
};