import NavigationBar from '../Navbar/Navbar';
import {useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom';
import './AlbumResults.css'
import 'font-awesome/css/font-awesome.min.css';

interface LocationState {
    albumDetails: Record<string, any>[];
    info: string,
  }
 
const AlbumResults = () => {
    const location = useLocation<LocationState>();
    const {albumDetails, info} = location.state;
    useEffect(() => {
        console.log(albumDetails);

        return ()=> console.log("Clean up")
    })
    return ( 
        <div>
            <NavigationBar />
            <div className="album-top"><h1>Results related to album '{info}'</h1></div>
            <div className="album-bottom">
                {albumDetails && albumDetails.map((item: Record<string, any>) => (
                    <Link to="/album" style={{color: '#ffff', textDecoration: 'none'}}>
                        <div className="album-details">
                            <div className="album-image-container"><img className="album-images" src={item.cover}/>
                            </div>
                            <p>{item.title}</p>
                        </div>
                    </Link>
                )) 
                }
            </div>
        </div>
     );
}
 
export default AlbumResults;