import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import PropTypes from 'prop-types';

const TabBar = ({options}) => {
    const StyledTabBar = styled.div`
        width: 100%;
        border-bottom: 1px solid rgb(${vars.colour.pink_dark});
        margin-bottom: 25px;
    `
    const TabBarButton = styled.div`
        font-weight: 600;
        display: inline-block;
        margin-right: 25px;
        margin-bottom: 10px;
        cursor: pointer;

        &:hover {
            color: rgb(${vars.colour.grey_dark});
        }
        
        &.selected {
            color: rgb(${vars.colour.pink_dark});
            &:hover {
                color: rgb(${vars.colour.pink});
            }
        }
    `

    return (
        <StyledTabBar>
            {options.map((item, key) =>
                <TabBarButton key={key} className={ item.active ? 'selected' : ''}>{item.title}</TabBarButton>
            )}
        </StyledTabBar>   
    )
}

TabBar.defaultProps = {
    as: "h1"
}

TabBar.propTypes = {
    as: PropTypes.string
}

export default TabBar
