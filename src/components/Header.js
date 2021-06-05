import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..."></input>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>

            <UserContainer>
                <Name>
                    Soumili
                </Name>

                <UserImage>
                    <img src="data:image/png;base64,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" alt="" width="30px" height="30px" />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header


const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
    display: flex;
    margin-left: 16px;
    margin-right: 16px;
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`

const Search = styled.div`
    width: 100%;
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    display: flex;
    align-items: center;

    input{
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        color: white;
    }

    input:focus{
        outline: none;
    }
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;

    img{
        width: 100%;
    }
`