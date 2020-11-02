import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

const Directory = ({directory}) => {
  return (
    <div className='directory-menu'>
        {directory.sections.map(({ id, ...rest }) => (
            <MenuItem 
                key={id}
                {...rest}
            />
        ))}
    </div>
  )
}

const mapStateToProps = ({directory}) => ({
  directory
});

export default connect(mapStateToProps)(Directory); 