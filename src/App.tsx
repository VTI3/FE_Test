// import { Provider } from '@/components/ui/provider';

import './App.css';
import { Card } from './component/card';
import { CardList } from './component/cardList';
import { CARD_LIST } from './mock';

function App() {
  return (
    <>
      <CardList data={CARD_LIST} />
    </>
  );
}

export default App;
