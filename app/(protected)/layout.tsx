import FlexBox from '@/components/ui/FlexBox'

const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FlexBox flexDirection="col" className="w-80 mx-auto mt-36">
      {children}
    </FlexBox>
  )
}

export default MypageLayout
