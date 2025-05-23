import Main from './components/layout/Main';
import languagesData from './assets/js/data/languages';

export default function App() {

  return (
    <>
      <Main languagesData={languagesData} />
    </>
  )
}