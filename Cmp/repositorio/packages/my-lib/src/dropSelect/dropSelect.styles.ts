import styled from "styled-components";

const Container = styled.select`
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
border: 1px solid #0000; 
border-radius: 5px;   
box-sizing: border-box;
width:240px;
height:auto;
color: #ffff;
font-family: Arial;
font-size: 20px;
padding: 5px 5px 5px 5px;
margin: 5px;
cursor:pointer;


&:hover {
    border: 3px solid #ffffff;
    background-color: #000000;

    
}
&:focus {
    outline: none;
    border: 3px solid #ffffff;
    background-color: #000000;
}

`;


export const styles = {container:Container}
