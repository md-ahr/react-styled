import { FormGroup, Label, Input, Span } from './styles/Input.styles';

const InputField = ({labelName, name, errorMsg, ...props}) => {
    return (
        <FormGroup>
            <Label htmlFor={name}>{labelName}</Label>
            <Input name={name} {...props} />
            <Span>{errorMsg}</Span>
        </FormGroup>
    );
};

export default InputField;
