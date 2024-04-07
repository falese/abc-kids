import foxes from './images/foxes.png'
import hockey from './images/hockey.png'
import untitled from './images/Untitled.png'


export default function Home() {
 const foxesImage = foxes
 const hockeyImage = hockey
 const untitledImage = untitled
 
  const items = [
    {
      name: "Game Number One",
      description: "the first game for abc kids",
      image: foxesImage,
    },
    {
      name: "Game Number Two",
      description: "the second game for abc kids",
      image: hockeyImage,
    },
    {
      name: "Game Number Three",
      description: "the third game for abc kids",
      image: untitledImage,
    },
  ];

  return (
    <div>
      {items.map((item: any, index: any) => (
        <div key={index}>
          <div>
            <h2> {item.name} </h2>
            <span>{item.description}</span>
          </div>
          <img src={item.image} />
        </div>
      ))}
    </div>
  );
}
