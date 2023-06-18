import styled from 'styled-components';
export const Searchform = styled.form`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 9px;
    padding-bottom: 9px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Searchinput = styled.input`
  width: 500px;
  height: 48px;
  padding:0 4px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  &::placeholder{
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-size: 40%;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover{
        opacity: 1;
    }
`;