export interface RenderIfProps {
  condition: boolean;
  render: React.ReactNode;
}

export function RenderIf({ condition, render }: RenderIfProps) {
  return condition ? <>{render}</> : null;
}
