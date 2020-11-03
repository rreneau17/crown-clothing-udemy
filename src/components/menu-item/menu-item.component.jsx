import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
// import { link } from 'fs';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
    // console.log(match);
    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
};

export default withRouter(MenuItem);