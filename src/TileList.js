import { Tile } from "./Tile";

export function TileList({ array }) {
  return (
    <div>
      {array.map((object, index) => (
        <Tile key={index} object={object} />
      ))}
    </div>
  );
}
