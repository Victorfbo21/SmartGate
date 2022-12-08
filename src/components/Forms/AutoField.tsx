import { TextField } from "@mui/material"


export interface IAutoFieldParams {
    field: string;
    label: string;
    required?: boolean;
    width?: number;
}

export interface IAutoFieldProps {
    field: (string | IAutoFieldParams);
    value: any;
    onChange: () => void;
}
function firstCharUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function AutoField(props) {
    const autoField = props.field;
    let component;
    if (typeof autoField === 'string') {
        const fieldName = firstCharUpper(autoField.replace(/([a-z])([A-Z])/g, '$1 $2'));
        component = (
            <TextField
                sx={{ mt: { xs: 2, md: 1 }, m: 1, fontSize: 20, width: 250, display: "flex-inline" }}
                variant="standard"
                required
                id={`${fieldName}-required`}
                label={fieldName}
                helperText=""
                name={autoField}
                value={props.value || ''}
                onChange={props.onChange}
            />)
    } else {
        const required = autoField.required;
        component = (
            <TextField
                key={autoField.field}
                sx={{ mt: { xs: 2, md: 1 }, m: 1, fontSize: 20, width: autoField.width, display: "flex-inline" }}
                variant="standard"
                id={`${autoField.field}-${autoField.required ? 'required' : ''}`}
                label={autoField.label}
                helperText=""
                name={autoField.field}
                value={props.value || ''}
                onChange={props.onChange}
                required={required}
            />)
    }
    return component ? component : '';
}

export default AutoField;