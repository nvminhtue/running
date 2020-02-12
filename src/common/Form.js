import React from 'react';
import styled, { css } from 'styled-components';

const FormWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    ${props => !props.isDisplay && css`
        display: none;
    `}
`;

export default ({ children, isDisplay }) => (
    <FormWrapper isDisplay={isDisplay}>
        { children }
    </FormWrapper>
)