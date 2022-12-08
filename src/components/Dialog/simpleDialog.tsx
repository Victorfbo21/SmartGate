
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Card, Container, Divider, Grid } from '@mui/material';


function SimpleDialog(props) {
    const { onClose, open, component, title } = props;
    const handleClose = () => {
        onClose();
    };


    return (
        <Dialog onClose={handleClose}
            open={open}
            sx={{ m: 0, p: 1 }} maxWidth="lg" >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Card sx={{ m: 2, p: 0 }}>
                    {component}
                </Card>
            </DialogContent>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    component: PropTypes.element.isRequired,
    title: PropTypes.string
};


export default SimpleDialog;