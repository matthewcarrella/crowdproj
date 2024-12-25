import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const NavWrapper = styled.ul`
    list-style-type: none;
    display: inline-block;
    background: #888;
}

  li {
    float: left;
    padding: 10px;
    font-size: 30px;
}

&:after {
    content: '';
    display: block;
    clear: both;
}
`;

const Navbar=()=>{
    return (    
                <NavWrapper>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </NavWrapper>
    )

}

export default Navbar;