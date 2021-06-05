import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # Home
                    </ChannelName>
                    <ChannelInfo>
                        Company-wide announcements and work-based matters
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
            </Header>
            <MessageContainer>

            </MessageContainer>
            <ChatInput></ChatInput>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`

const Channel = styled.div``

const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`

const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
`

const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`

const MessageContainer = styled.div``

const ChatInput = styled.div``