import * as React from "react";
import styled from "styled-components";
import { Alert } from 'react-bootstrap';
 
const Content = styled.div`
  width: 200px;
  line-height: 200px;
  text-align: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid dimgrey;
  border-radius: ${(props) => props.theme.borderRadius};
`;



export const Demo = () => (
  <>
  {[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
))};
<Content>Demo</Content>
  </>
);
