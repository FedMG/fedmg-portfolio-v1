import { Shape } from "./Shape";

export const Background = ({children, top, bottom}) => (
    <div style={{ position: 'relative'}}>
      {top && <Shape data={top} />}
      {children}
      {bottom && <Shape data={bottom} />}
    </div>
)