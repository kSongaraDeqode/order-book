import React from 'react'
import './App.css'
import OrderBook from './components/OrderBook'

function App () {
    return (
        <div className="App">
            <section className='content-section'>
                <div className='left-section'>
                    <div className='app-block one'>Sample Block 1</div>
                    <div className='app-block two'>Sample Block 2</div>
                    <div className='app-block three'>Sample Block 3</div>
                </div>
                <div className='right-section'>
                    <div className='app-block four'>Sample Block 6</div>
                    <OrderBook />
                    <div className='app-block five'>Sample Block 7</div>
                </div>
            </section>
        </div>
    )
}

export default App
