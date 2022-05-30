import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/DemoOutput/DemoOutput';
import Demolist from './components/DemoOutput/Demolist';
import { useMemo } from 'react';

function App() {

  console.log('App RUNNING');

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState('My List');

  const toggleParagraphHandler = useCallback(() => {

    console.log('toggleParagraphHandler RUNNING');

    if (allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph)
    }

  }, [allowToggle]);

  const allowToggleHandler = () => {

    console.log('allowToggleHandler RUNNING');

    setAllowToggle(true);
  };

  const changeTitleHandler = () => {
    setListTitle('New Title');
  };

  const listItems = useMemo(() => [5, 3, 1, 8, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler} >Allow Toggle!</Button>
      <br /><br />
      <Button onClick={toggleParagraphHandler} >Toggle Paragraph!</Button>

      <br /><br /><br /><br />
      <h6>-------------- Example 2---------------------</h6>
      <h2>Use Memo</h2>
      <Demolist title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler} >Change List Title</Button>

    </div>
  );
}

export default App;
