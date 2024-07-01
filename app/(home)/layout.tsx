type InnerLayoutProps = {
  children: React.ReactNode
  whatspopular: React.ReactNode
  trending: React.ReactNode
}

const InnerLayout = ({ children, whatspopular, trending }: InnerLayoutProps) => {
  return (
    <div className="inner px-3">
      {children}
      {whatspopular}
      {trending}
    </div>
  )
}

export default InnerLayout
