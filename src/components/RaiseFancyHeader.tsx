import styled from '@emotion/styled'
import React from 'react'

const RaiseFancyHeader = () => {

  return (
    <React.Fragment>
      <Asd>
        Raise
      </Asd>
    </React.Fragment>
  )
}


const Asd = styled.div`
      margin: 0;
      padding-bottom: 6rem;
      grid-column: 1;
      grid-row: 1;
      z-index: 1;
      font-family: 'Poppins-SemiBold';
      font-size: 5rem;
      animation: glow 2s ease-in-out infinite alternate;
      text-align: center;
      color: #313138;

    @keyframes glow {
      from {
        text-shadow: 0 0 20px #2d9da9;
      }

      to {
        text-shadow: 0 0 30px #34b3c1, 0 0 10px #313138;
      }
    }
`

export default RaiseFancyHeader