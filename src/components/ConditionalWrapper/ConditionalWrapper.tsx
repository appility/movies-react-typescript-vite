import { ReactNode } from "react"

export declare interface ConditionalWrapperProps {
  condition: boolean
  wrapper: (arg0: ReactNode) => ReactNode
  children: ReactNode
}

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => (condition ? wrapper(children) : children)

export default ConditionalWrapper
