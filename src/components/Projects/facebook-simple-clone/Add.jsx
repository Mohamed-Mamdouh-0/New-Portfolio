import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Add() {
    const [open, setOpen] = useState(false);
    const StyledModal = styled(Modal)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })
    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px"
    })
    return (
        <>
            <Tooltip title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }} onClick={e => setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280}  p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant="span">John Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's on your mind"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color="primary" />
                        <VideoCameraBackIcon color="sucess" />
                        <ImageIcon color="secondary" />
                        <PersonAddIcon color="error" />

                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button >Post</Button>
                        <Button sx={{ width:"100px"}}><DateRangeIcon /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add