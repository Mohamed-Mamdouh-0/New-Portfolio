import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { BottomNavigation, styled, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Chat() {
    const ChatWindow = styled(Box)({
        position: "fixed",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
        bottom: "0px",
        justifyContent: "flex-end",
        height: "500px",
        width: "350px",
        backgroundColor: "white",
        borderRadius: "8px",
        justifyContent: "center"

    })
    const InsideChatWindow = styled(Box)({

        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    })
    const handleChange = (event) => {
        setValue(event.target.value);
      };
      const [value, setValue] = useState('');
    return (
        <Box p={2} sx={{ display: "flex", justifyContent: "center", zIndex: "modal" }}>
            <ChatWindow>
                <InsideChatWindow>
                    <Typography>ashdlas ;aslkd ;aslkjd ;asjd;l akjsdlkajh sdlkjsa</Typography>

                </InsideChatWindow>

                <BottomNavigation
                    showLabels
                    sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}

                >
                    <TextField
                        id="outlined-textarea"
                        label="Chat"
                        maxRows={2}
                        value={value}
                        onChange={handleChange}
                    />
                    <BottomNavigationAction label="Recents" icon={<SendIcon />} />
                </BottomNavigation>
            </ChatWindow>
        </Box>
    )
}

export default Chat