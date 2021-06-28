import NavigationBar from '../Navbar/Navbar';
import {useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom';
import './ArtistResults.css'
import 'font-awesome/css/font-awesome.min.css';

interface LocationState {
    artistDetails: Record<string, any>[];
    info: string,
  }
 
const ArtistsResults = () => {
    const location = useLocation<LocationState>();
    const {artistDetails, info} = location.state
    useEffect(() => {
        console.log(artistDetails);

        return ()=> console.log("Clean up")
    })
    return ( 
        <div>
            <NavigationBar />
            <div className="artist-top"><h1>Results related to artist '{info}'</h1></div>
            <div className="artist-bottom">
                {artistDetails && artistDetails.map((item: Record<string, any>) => (
                    <Link to="/artist" style={{color: '#ffff', textDecoration: 'none'}}>
                        <div className="artist-details">
                            <div className="artist-image-container"><img className="artist-images" src={item.picture}/>
                            </div>
                            <p>{item.name}</p>
                        </div>
                    </Link>
                )) 
                }
            </div>
        </div>
     );
}
 
export default ArtistsResults;