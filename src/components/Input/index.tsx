import styled from 'styled-components'

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`

interface Props {
  // eslint-disable-next-line no-unused-vars
  onChange: (_: any) => void
  placeholder: string
  type: string
  name: string
  value: string
}

export default function Input({
  onChange,
  placeholder,
  type,
  name,
  value,
}: Props) {
  return (
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        valur={value}
      />
    </div>
  )
}
