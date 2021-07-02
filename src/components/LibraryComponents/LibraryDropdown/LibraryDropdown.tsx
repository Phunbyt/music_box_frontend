import "./LibraryDropdown.css";

interface Props{
  filter: (a: string) => void;
}

export default function LibraryDropdown({
  filter
}: Props) {


  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">. . .</button>
        <div className="dropdown-content" tabIndex={0}>
          <span
            onClick={() => {
              filter("Date Added");
              
            }}
          >
            Date Added
          </span>
          <span
            onClick={() => {
              filter("A-Z");
            }}
          >
            A-Z
          </span>
          <span
            onClick={() => {
              filter("Number of songs");
            }}
          >
            Number of songs
          </span>
        </div>
      </div>
    </>
  );
}
