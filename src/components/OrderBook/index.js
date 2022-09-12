import React from 'react'
import './orderbook.css'
import Accordion from '../Accordion'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import FilterNoneIcon from '@mui/icons-material/FilterNone'

const AccordionFooter = () => {
    return (
        <div className='accordion-footer'>
            <div className='rightFooter'>
                <Tooltip title="Popup" arrow placement='top'>
                    <IconButton >
                        <FilterNoneIcon sx={{ color: '#5681AB', fontSize: 12 }} />
                    </IconButton>
                </Tooltip>
            </div>
            <div className='leftFooter'>
                <div className='external-link'>Full Book</div>
                <div className='throttling'>
                    <div className='server-status'></div>
                    Status
                </div>
            </div>
        </div>
    )
}

const OrderBook = () => {
    const accordionData = {
        title: 'BTC/USD',
        content: () => <><h1 className='accordion-content'>accordion content</h1>{AccordionFooter()}</>
    }

    return (
        <div className='orderbook'>
            <Accordion title={accordionData.title} content={accordionData.content} />
        </div>
    )
}

export default OrderBook
