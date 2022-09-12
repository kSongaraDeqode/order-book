import React, { useState } from 'react'
import './accordion.css'

const Accordion = () => {
    const [isActive, setIsActive] = useState(false)

    const accordionData = {
        title: 'BTC/USD',
        content: 'accordion content'
    }

    const { title, content } = accordionData

    return (
        <>
            <div className="accordion">
                <div className="accordion-item">
                    <div
                        className="accordion-title"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <div>{isActive ? '-' : '+'}</div>
                        <div>ORDER BOOK <span className='title-span'>{title}</span></div>
                    </div>
                    <div className={isActive ? 'accordion-content visible' : 'accordion-content hidden'}>{content}</div>
                </div>
            </div>
        </>
    )
}

export default Accordion
