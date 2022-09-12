import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import './accordion.css'

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <div className="accordion">
                <div className="accordion-item">
                    <div
                        className="accordion-title"
                        onClick={() => setIsActive(!isActive)}
                    >
                        {isActive ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                        <div>ORDER BOOK <span className='title-span'>{title}</span></div>
                    </div>
                    { isActive && (<div className='header-options'>
                        <Tooltip title="Decrease Precision" arrow placement='left'>
                            <IconButton className='precission-buttons' onClick={(e) => {
                                e.preventDefault()
                                console.log('button tapped')
                            }}>
                                <svg width="17" height="22" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M1.41504 27.4053C1.41504 26.8887 1.58724 26.4694 1.93164 26.1475C2.28353 25.8255 2.72152 25.6646 3.24561 25.6646C3.77718 25.6646 4.21517 25.8255 4.55957 26.1475C4.91146 26.4694 5.0874 26.8887 5.0874 27.4053C5.0874 27.9144 4.9152 28.3299 4.5708 28.6519C4.2264 28.9663 3.78467 29.1235 3.24561 29.1235C2.71403 29.1235 2.27604 28.9663 1.93164 28.6519C1.58724 28.3299 1.41504 27.9144 1.41504 27.4053ZM18.811 22.2393C18.811 24.5003 18.3431 26.2298 17.4072 27.4277C16.4714 28.6257 15.1012 29.2246 13.2969 29.2246C11.515 29.2246 10.1523 28.6369 9.20898 27.4614C8.26562 26.286 7.78271 24.6014 7.76025 22.4077V19.3979C7.76025 17.1144 8.23193 15.3812 9.17529 14.1982C10.1261 13.0153 11.4925 12.4238 13.2744 12.4238C15.0563 12.4238 16.4189 13.0116 17.3623 14.187C18.3057 15.355 18.7886 17.0358 18.811 19.2295V22.2393ZM15.5654 18.9375C15.5654 17.5824 15.3783 16.5978 15.0039 15.9839C14.637 15.3625 14.0605 15.0518 13.2744 15.0518C12.5107 15.0518 11.9455 15.3475 11.5786 15.939C11.2192 16.5229 11.0283 17.4401 11.0059 18.6904V22.666C11.0059 23.9987 11.1855 24.9907 11.5449 25.6421C11.9118 26.286 12.4958 26.6079 13.2969 26.6079C14.0905 26.6079 14.6632 26.2972 15.0151 25.6758C15.367 25.0544 15.5505 24.1035 15.5654 22.8232V18.9375Z" fill="#FFFFFF">
                                    </path>
                                    <g>
                                        <path d="M33 36V38H21L25 42L24 44L17 37L24 30L25 32L21 36H33Z" fill="#FFFFFF">
                                        </path>
                                    </g>
                                </svg>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Increase Precision" arrow placement='left'>
                            <IconButton className='precission-buttons' onClick={(e) => {
                                e.preventDefault()
                                console.log('button tapped')
                            }}>
                                <svg width="17" height="22" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.41504 27.4053C1.41504 26.8887 1.58724 26.4694 1.93164 26.1475C2.28353 25.8255 2.72152 25.6646 3.24561 25.6646C3.77718 25.6646 4.21517 25.8255 4.55957 26.1475C4.91146 26.4694 5.0874 26.8887 5.0874 27.4053C5.0874 27.9144 4.9152 28.3299 4.5708 28.6519C4.2264 28.9663 3.78467 29.1235 3.24561 29.1235C2.71403 29.1235 2.27604 28.9663 1.93164 28.6519C1.58724 28.3299 1.41504 27.9144 1.41504 27.4053ZM18.811 22.2393C18.811 24.5003 18.3431 26.2298 17.4072 27.4277C16.4714 28.6257 15.1012 29.2246 13.2969 29.2246C11.515 29.2246 10.1523 28.6369 9.20898 27.4614C8.26562 26.286 7.78271 24.6014 7.76025 22.4077V19.3979C7.76025 17.1144 8.23193 15.3812 9.17529 14.1982C10.1261 13.0153 11.4925 12.4238 13.2744 12.4238C15.0563 12.4238 16.4189 13.0116 17.3623 14.187C18.3057 15.355 18.7886 17.0358 18.811 19.2295V22.2393ZM15.5654 18.9375C15.5654 17.5824 15.3783 16.5978 15.0039 15.9839C14.637 15.3625 14.0605 15.0518 13.2744 15.0518C12.5107 15.0518 11.9455 15.3475 11.5786 15.939C11.2192 16.5229 11.0283 17.4401 11.0059 18.6904V22.666C11.0059 23.9987 11.1855 24.9907 11.5449 25.6421C11.9118 26.286 12.4958 26.6079 13.2969 26.6079C14.0905 26.6079 14.6632 26.2972 15.0151 25.6758C15.367 25.0544 15.5505 24.1035 15.5654 22.8232V18.9375ZM32.0181 22.2393C32.0181 24.5003 31.5501 26.2298 30.6143 27.4277C29.6784 28.6257 28.3083 29.2246 26.5039 29.2246C24.722 29.2246 23.3594 28.6369 22.416 27.4614C21.4727 26.286 20.9897 24.6014 20.9673 22.4077V19.3979C20.9673 17.1144 21.439 15.3812 22.3823 14.1982C23.3332 13.0153 24.6995 12.4238 26.4814 12.4238C28.2633 12.4238 29.626 13.0116 30.5693 14.187C31.5127 15.355 31.9956 17.0358 32.0181 19.2295V22.2393ZM28.7725 18.9375C28.7725 17.5824 28.5853 16.5978 28.2109 15.9839C27.8441 15.3625 27.2676 15.0518 26.4814 15.0518C25.7178 15.0518 25.1525 15.3475 24.7856 15.939C24.4263 16.5229 24.2354 17.4401 24.2129 18.6904V22.666C24.2129 23.9987 24.3926 24.9907 24.752 25.6421C25.1188 26.286 25.7028 26.6079 26.5039 26.6079C27.2975 26.6079 27.8703 26.2972 28.2222 25.6758C28.5741 25.0544 28.7575 24.1035 28.7725 22.8232V18.9375Z" fill="#FFFFFF">
                                    </path>
                                    <g>
                                        <path d="M17 38V36H29L25 32L26 30L33 37L26 44L25 42L29 38H17Z" fill="#FFFFFF">
                                        </path>
                                    </g>
                                </svg>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Manage Price Alerts" arrow placement='left'>
                            <IconButton >
                                <NotificationsIcon sx={{ color: '#FFFFFF', fontSize: 14 }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Interface settings for order book" arrow placement='left'>
                            <IconButton >
                                <SettingsIcon sx={{ color: '#FFFFFF', fontSize: 14 }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Zoom out book depth visualization" arrow placement='left'>
                            <IconButton >
                                <ZoomOutIcon sx={{ color: '#FFFFFF', fontSize: 14 }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Zoom in book depth visualization" arrow placement='left'>
                            <IconButton >
                                <ZoomInIcon sx={{ color: '#FFFFFF', fontSize: 14 }} />
                            </IconButton>
                        </Tooltip>
                    </div>)}
                    <div className='accordion-content' aria-expanded={!isActive}>{content()}</div>
                </div>
            </div>
        </>
    )
}

Accordion.propTypes = {
    title: PropTypes.string,
    content: PropTypes.function
}

export default Accordion
