/* eslint-disable react/jsx-props-no-multi-spaces */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';

import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

const CustomMenuItem = styled(
    MenuItem,
    ({shouldForwardProp: prop => prop !== 'asLink'})
)(({theme, asLink}) => (asLink && {
    color: get(theme, 'colors.black.light'),
    '&:hover': {
        border: 'none',
        backgroundColor: 'none',
        color: get(theme, 'colors.primary.main'),
        textDecoration: 'underline'
    }
}));

const MenuComponent = ({
    _id,
    menuActions,
    actionCallback,
    fontSizeIcon,
    size,
    triggerType,
    asLink,
    children
}) => {
    if (!_id) {
        return null;
    }

    const idElement = `element-button-${_id}`;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = event => {
        if (!isEmpty(menuActions)) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                id={idElement}
                color="inherit"
                size={size}
                {...(
                    triggerType === 'click'
                        ? {onClick: e => handleClick(e)} : {onMouseEnter: e => handleClick(e)}
                )}
            >
                {!children && (<MenuIcon fontSize={fontSizeIcon} htmlColor="#fff"/>)}
                {children}
            </IconButton>
            {get(anchorEl, 'id') === idElement && (
                <Menu
                    open
                    id={`menu-${idElement}`}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                    MenuListProps={{onMouseLeave: handleClose}}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                >
                    {map(menuActions, action => (
                        <CustomMenuItem
                            id={`menuItem-${get(action, 'label')}`}
                            {...{
                                ...(asLink && {
                                    LinkComponent: Link,
                                    to: action.to,
                                    asLink: true
                                })
                            }}

                            onClick={e => {
                                handleClose();
                                if (action.onClick) { action.onClick(e); }
                                actionCallback(action, _id, e);
                            }}
                        >
                            {action.label}
                        </CustomMenuItem>
                    ))}
                </Menu>
            )}
        </>
    );
};

MenuComponent.propTypes = {
    actionCallback: PropTypes.func.isRequired,
    asLink: PropTypes.bool,
    menuActions: PropTypes.arrayOf(PropTypes.shape({})),
    _id: PropTypes.number,
    fontSizeIcon: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.string,
    triggerType: PropTypes.string
};

MenuComponent.defaultProps = {
    asLink: false,
    _id: null,
    triggerType: 'click',
    fontSizeIcon: 'medium',
    size: 'medium',
    children: null,
    menuActions: []
};

export default MenuComponent;
