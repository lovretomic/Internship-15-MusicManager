const Album = ({ data }) => {
  return (
    <div>
     <h1>{data.title}</h1>
     <p>{data.artist}</p>
    </div>
  );
}

export default Album;