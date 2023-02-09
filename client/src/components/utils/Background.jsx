import { Shape } from "./Shape";

export const Background = ({children, top, bottom, id}) => (
    <div style={{ position: 'relative'}} id={id}>
      {top && <Shape data={top} />}
      {children}
      {bottom && <Shape data={bottom} />}
    </div>
)