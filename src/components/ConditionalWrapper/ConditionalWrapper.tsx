export declare interface ConditionalWrapperProps {
  condition: boolean
  wrapper: (arg0: JSX.Element) => JSX.Element
  children: JSX.Element
}

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => (condition ? wrapper(children) : children)

export default ConditionalWrapper
