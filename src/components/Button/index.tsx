import { StyledButton } from './style';

interface ButtonInterface {
  action: () => void,
  disabled: boolean,
  text: string,
}
export const Button = ({action, disabled, text}: ButtonInterface) => (
  <StyledButton 
    onClick = { action } 
    disabled = { disabled }
    value = { text }
  >
    { text }
  </StyledButton>
);
