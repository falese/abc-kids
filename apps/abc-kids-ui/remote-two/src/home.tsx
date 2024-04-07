export default function Home() {
  const items = [
    { name: "game1", description: "the first game for abc kids" },
    { name: "game2", description: "the second game for abc kids" },
    { name: "game3", description: "the third game for abc kids" },
  ];

  return (
    <div>
      {items.map((item: any, index: any) => (
        <div key={index}>
          <div>
            <h2> {item.name} </h2>
            <span>{item.description}</span>
          </div>
          <img
            src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1627731351-101156.png"
            alt="img"
          />
        </div>
      ))}
    </div>
  );
}
