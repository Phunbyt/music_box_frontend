import { useState } from "react";
import { Modal, Form, Button, Toast } from "react-bootstrap";
import axios, { AxiosRequestConfig } from "axios";
import styles from './ModifyPlaylist.module.css'

const ModifyPlaylist = (props: Record<string, any>) => {
  const playlistId = props.playlistId
  const callApi = async () => {
    try {
      const { data } = await axios.post('https://music-box-a.herokuapp.com/music/signIn', {
        email:  "madarauchiha@gmail.com",
        password: "12345678",
      });
      const token = data.token;
      localStorage.setItem('token', token);
    } catch (err) {
      console.log(err);
    }
  };
  const displayModifyPlaylist = props.displayModifyPlaylist;
  const playlistName = props.name;
  const tracks = props.tracks;
  const deleteTrack = props.deleteTrack;

  const [show, setShow] = useState(false);
  const [trackTitle, setTrackTitle] = useState("");
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [trackNotFound, setTrackNotFound] = useState(false)

  
  const handleClose = () => {
    handleFoundClose()
    setDeleteStatus(false);
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const handleFoundShow = () => setTrackNotFound(true);
  const handleFoundClose = () => setTrackNotFound(false);

  const trackDeleteHandler = (e: any) => {
    setTrackTitle(e.target.value);
  };

  const submitDeleteHandler = async (e: any) => {
    try {
    e.preventDefault();
    const exist = tracks.find((track: Record<string, any>) =>{
      return track.title.toLowerCase() === trackTitle.toLowerCase()
    })
    if (!exist) {
      return handleFoundShow()
    }
    const tokenValue = localStorage.getItem('token');
        const config:AxiosRequestConfig = {
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        };
          const res = await axios.delete(
            `http://localhost:9080/playlist/removesong/${playlistId}/${trackTitle}`,
            config
          );

          console.log(res)


    handleFoundClose()
    
    const modifiedTracks = tracks.filter((track: Record<string, any>) => {
      return track.title.toLowerCase() !== trackTitle.toLowerCase();
    });
    console.log(modifiedTracks);
    deleteTrack(modifiedTracks);
    setDeleteStatus(true);
    setTrackTitle("");
  } catch (error){
    console.log(error)
  }
  };
  return (
    <div style={{ display: `${displayModifyPlaylist}` }}>
      <div className={styles.modifyPlaylist}>
        <button className={styles.addSong}>Add Song</button>
        <button className={styles.deleteSong} onClick={handleShow}>
          Remove Song
        </button>
        <div>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{playlistName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={submitDeleteHandler}>
                <Form.Group>
                  <Form.Label htmlFor="track-delete">Song Title</Form.Label>
                  <Form.Control
                    type="text"
                    id="track-delete"
                    value={trackTitle}
                    onChange={trackDeleteHandler}
                  />
                </Form.Group>
                <Button variant="danger" type="submit">
                  Delete
                </Button>
              </Form>
                {trackNotFound? (<p style={{marginTop: '20px'}}>Song with given title not found, type in the correct song title</p>): null}
                {deleteStatus? (<p style={{marginTop: '20px'}}>Song deleted successflly</p>): null}
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ModifyPlaylist;
