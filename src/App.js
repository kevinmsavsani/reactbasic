import './App.css';
import { Jsx } from './component/Jsx';
import { Car } from './component/FunctionComponent';
import { Garage } from './component/ClassComponent';
import { DidMount } from './component/ComponentDidMount';
import { Container } from './component/ComponentWillUnmount';
import { Derived } from './component/DerivedStateProps';
import { Football, FootballTest, FootballTrial } from './component/Event';
import { Header } from './component/Header';
import TestRoute from './component/Router';
import { ShouldUpdate } from './component/ShouldComponentUpdate';
import { SnapShot } from './component/SnapshotBeforeUpdate';
import NestedRoute from './component/NestedRouter';

function App() {
  return (
    <div className="App">
      <Jsx />
      <Garage />
      <Car />
      <DidMount />
      <Container />
      <Derived />
      <Football />
      <FootballTest />
      <FootballTrial />
      <Header />
      <TestRoute />
      <NestedRoute />
      <ShouldUpdate />
      <SnapShot />
    </div>
  );
}

export default App;
