import React from 'react';
import styled, { css } from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    opacity: 1;
    position: relative;
    transition: opacity .5s;
    overflow: hidden;

    ${props => !props.isDisplay && css`
        opacity: 0;
        max-height: 0;
        max-width: 0;
    `}
`;

export default ({ children, isDisplay }) => (
    <FormWrapper isDisplay={isDisplay}>
        { children }
    </FormWrapper>
)