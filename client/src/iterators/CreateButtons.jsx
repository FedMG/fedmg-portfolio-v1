import { Button } from '../items/Button.jsx'

export const CreateButtons = ({ data, style }) => {
  return data.map(({ id, name, link }) => (
    <Button key={id} style={style} href={link}>
      {name}
    </Button>
  ))
}
