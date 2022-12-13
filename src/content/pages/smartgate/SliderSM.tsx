import {
    Slider
} from '@mui/material';
import { useState } from 'react';
let isChanged = false;
const SliderSM = (props) => {
    const [finalValue, setNewValue] = useState(props.value == true ? 100 : 0);
    return (
        <Slider
            defaultValue={finalValue}
            value={finalValue}
            onChangeCommitted={(e, newValue) => {
                isChanged = false;
                if (newValue > 50) {
                    props.onChange(true);
                    setNewValue(100);
                }
                if (newValue <= 50) {
                    props.onChange(false);
                    setNewValue(0);
                }
            }}
            onChange={(e, newValue) => {
                isChanged = true;
                setTimeout(() => {
                    if (isChanged)
                        return;
                    if (newValue <= 50) {
                        setNewValue(0);
                        return;
                    }
                    if (newValue > 50) {
                        setNewValue(100);
                        return;
                    }
                }, 200);
                setNewValue(newValue as any);
            }}
            sx={{ width: props.width || '50px', color: finalValue > 50 ? "#8f8" : "#ccc" }}
        ></Slider>
    )
}

export default SliderSM;