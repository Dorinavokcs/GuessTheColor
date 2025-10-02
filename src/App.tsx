import { useEffect, useState } from 'react'
import './App.css'
import Square from './components/Square';

type BoxType = {
  id: string;
  bgColor: string;
  clicked: boolean;
  found: boolean;
}

const COUNT = 64;
const data = Array.from({ length: COUNT }, () => ({ id: "", bgColor: "", clicked: false, found: false, }));

const randColor = (): string => {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

function App() {
  const [boxes, setBoxes] = useState<BoxType[]>(data);
  const [guessColor, setGuessColor] = useState<string>("");
  const [start, setStart] = useState<boolean>(true);
  const [clickedBox, setClickedBox] = useState<string[]>([]);
  const [gamestatus, SetGameStatus] = useState<boolean>(true);

  const clickHandler = (id: string) => {
    if (!gamestatus) return;
    if (clickedBox.includes(id)) return;
    setClickedBox(prev => [...prev, id]);
    setBoxes(prevBoxes =>
      prevBoxes.map(box =>
        box.id === id && guessColor === box.bgColor
          ? { ...box, clicked: true, found: true }
          : box.id === id
            ? { ...box, clicked: true }
            : box
      )
    );
    const isMatch = boxes.find(b => b.id === id && b.bgColor === guessColor)?.bgColor;
    console.log("kattintott szin? ", isMatch, "kitalálandó szin: ", guessColor);
    if (isMatch) SetGameStatus(false);
  }

  useEffect(() => {
    const colors = Array.from({ length: COUNT }, () => randColor());
    setGuessColor(colors[Math.floor(Math.random() * COUNT)]);
    setBoxes(colors.map((color, i) => ({id: `b${i + 1}`, bgColor: color, clicked: false, found: false,})));
    setClickedBox([]);
    SetGameStatus(true);
    console.log("A useEffect elindított engem rendereléskor.");
  }, [start]);

  return (
    <>
      <header>
        <h1>Találd ki a színt!</h1>
        <h3>A szín kódja: <span>{guessColor}</span></h3>
        <h3>Tippek száma: <span>{clickedBox.length}</span></h3>
        {!gamestatus ? <h3>Gratulálok, eltalálta a színt!</h3>:""}
      </header>
      <main>
        <section>
          {boxes.map((b, i) => <Square key={i + 1} id={b.id} bgColor={b.bgColor} clicked={b.clicked} found={b.found} clickFn={() => clickHandler(b.id)} />)}
        </section>
        <button
          onClick={() => {
            setStart(prev => !prev);
            setClickedBox([]);
          }}
        >
          Újrakezdés
        </button>
      </main>
    </>
  )
}

export default App