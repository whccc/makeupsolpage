import styled, { css } from 'styled-components'
export const Container = styled.div`
  border: 1px solid red;
  position: fixed;
  background-color: var(--bg-primary);
  color: #fff;
  padding: 10px;
  top: 80px;
  right: ${props => (props.show ? '5px' : '-550px')};
  transition: all ease-in-out 1s;
`
