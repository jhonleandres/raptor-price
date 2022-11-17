type Props = {
  count: number
}
export const Count = ({ count }: Props) => {
  return <span className='italic'>Valor Atual: {count}</span>
}
