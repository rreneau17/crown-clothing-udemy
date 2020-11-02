import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../preview-collection/preview-collection.component';
import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...rest }) => (
                    <CollectionPreview key={id} {...rest} />
                ))
            }
        </div>
    )
}

const mapStateToProps = ({shop}) => ({
    collections: shop
});

export default connect(mapStateToProps)(CollectionsOverview);