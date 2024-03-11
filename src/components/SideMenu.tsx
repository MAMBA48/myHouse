import { useState } from "react"
import { styled } from 'styled-components'

const MenuStyle = styled.article`
    @media screen and (max-width: 500px) {
        display: none;
        background-color: red;
        max-width: 50px;
        padding: 0.5rem;
    }

    display: flex;
    position: relative;
    flex-direction: column;
    min-height: 400px;
    width: auto;
    min-width: 170px;
    max-width: 170px;
    padding: 1rem;
    background: var(--bgColorContent);
    
    & small {
        text-align: justify;
    }
    & ul {
        display: flex;
        gap: 10px;
        width: 100%;
        flex-direction: column;
        list-style: none;
    }
    & li {
        display: flex;
        border: 1px solid white;
        position: relative;
        flex-direction: column;
        margin-right: 1.5rem;
    }

`
const Button = styled.button`
    display: flex;
    font-size: large;
    justify-content: center;
    align-items: center;
    height: 18px;
    width: 18px;
    position: absolute;
    right: 0;
`

export const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    return (
        <>
            <MenuStyle>
                    <h2>menu</h2>
                        <ul>
                            <li>
                                <p>opcao 1 </p>
                                {isOpen && (
                                    <small>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate expedita minus! Deleniti sit obcaecati quisquam minus repellat distinctio blanditiis ullam ex, laudantium, magni dolor nesciunt, dolores temporibus reiciendis nulla?
                                    </small>
                                )}
                                <Button onClick={() => setIsOpen(!isOpen)}>
                                    {isOpen ? '-' : '+'}
                                </Button>    
                            </li>
                            <li>
                            <p>opcao 2 </p>
                                {isOpen1 && (
                                    <small>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate expedita minus! Deleniti sit obcaecati quisquam minus repellat distinctio blanditiis ullam ex, laudantium, magni dolor nesciunt, dolores temporibus reiciendis nulla?
                                    </small>
                                )}
                                <Button onClick={() => setIsOpen1(!isOpen1)}>
                                    {isOpen1 ? '-' : '+'}
                                </Button>
                            </li>
                            <li>
                            <p>opcao 3 </p>
                                {isOpen2 && (
                                    <small>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate expedita minus! Deleniti sit obcaecati quisquam minus repellat distinctio blanditiis ullam ex, laudantium, magni dolor nesciunt, dolores temporibus reiciendis nulla?
                                    </small>
                                )}
                                <Button onClick={() => setIsOpen2(!isOpen2)}>
                                    {isOpen2 ? '-' : '+'}
                                </Button>
                            </li>
                            <li>
                            <p>opcao 4 </p>
                                {isOpen3 && (
                                    <small>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate expedita minus! Deleniti sit obcaecati quisquam minus repellat distinctio blanditiis ullam ex, laudantium, magni dolor nesciunt, dolores temporibus reiciendis nulla?
                                    </small>
                                )}
                                <Button onClick={() => setIsOpen3(!isOpen3)}>
                                    {isOpen3 ? '-' : '+'}
                                </Button>
                            </li>
                        </ul>
                </MenuStyle>
        </>
    )
}