import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'

import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items })=> (
    <div className='collection-preview'>
        <hi>{title.toUpperCase()}</hi>
        <div className='preview'>
            {items.filter((item, index) => index < 4).map(({ id, ...rest }) => (
                <CollectionItem key={id} {...rest}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;