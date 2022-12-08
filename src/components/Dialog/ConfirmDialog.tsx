
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { DialogContentText } from '@mui/material';


function ConfirmDialog(props) {
    const { onClose, open, text, title } = props;
    const handleClose = (value) => {
        onClose(value);
    };


    return (
        <Dialog
            open={open}
            keepMounted
            onClose={() => handleClose(false)}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose(false)}>Cancelar</Button>
                <Button onClick={() => handleClose(true)}>Confirma</Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmDialog.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    text: PropTypes.string,
    title: PropTypes.string
};


export default ConfirmDialog;