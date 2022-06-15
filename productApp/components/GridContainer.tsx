import React from 'react'
import styled from '@emotion/styled'

export interface Props {
    children: JSX.Element | JSX.Element [];
  }

const Div = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    box-sizing: border-box;
    & > div  {
        margin: 10px
    }
    

`

export default function GridContainer({children}: Props): JSX.Element {
    return (
        <Div>
            {children}   
        </Div>
    )
}
