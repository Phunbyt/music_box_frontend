import "./Flow.css";


interface Props{

}
export default function Flow() {
  return (
    <div className="flow">
      <div className="flow-top">
        <p className="recently">Flow</p>
        <p><i className="dots fa fa-ellipsis-h" /></p>
      </div>
      <div className="flow-bottom">
        <div className="front-image"></div>
        <div className="flow-image"><i className="play fa fa-play-circle"/></div>
      </div>
    </div>
  );
}
