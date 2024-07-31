import React from 'react'
import Header from './Header';
import HeroPage from './HeroPage';

const Home = () => {
  return (
    <div>
        <Header/>
        <HeroPage/>
        <div className="h-96 bg-slate-400 border border-dotted">
            Hello
        </div>
        <div className="h-96 bg-slate-400 border border-dotted">
            Hello
        </div>
        <div className="h-96 bg-slate-400 border border-dotted">
            Hello
        </div>
    </div>
  )
}

export default Home;