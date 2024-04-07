import image from "./Untitled.png";

export default function Home() {
  const items = [
    { name: "Game Number One", description: "the first game for abc kids" },
    { name: "Game Number Two", description: "the second game for abc kids" },
    { name: "Game Number Three", description: "the third game for abc kids" },
  ];

  return (
    <div>
      {items.map((item: any, index: any) => (
        <div key={index}>
          <div>
            <h2> {item.name} </h2>
            <span>{item.description}</span>
          </div>
          <img src={image} />
        </div>
      ))}
    </div>
  );
}
