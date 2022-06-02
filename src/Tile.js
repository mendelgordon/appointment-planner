export function Tile({ object }) {
  return (
    <div className="tile-container">
      {Object.values(object).map((object, index) => {
        if (index === 0) {
          return (
            <p className="tile-title" key={index}>
              {object}
            </p>
          );
        } else {
          return (
            <p className="tile" key={index}>
              {object}
            </p>
          );
        }
      })}
    </div>
  );
}
