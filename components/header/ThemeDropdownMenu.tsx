import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { IoMoon } from 'react-icons/io5'
import { LuSunDim } from 'react-icons/lu'
import { useTheme } from 'next-themes'

const IconList = [
  { id: 'light', name: 'Light', icon: LuSunDim },
  { id: 'dark', name: 'Dark', icon: IoMoon },
]

const ThemeDropdownMenu = () => {
  const { theme, setTheme } = useTheme()

  const handleSetTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    setTheme(target.id)
  }

  return (
    <DropdownMenuContent className="w-16" align="end">
      <DropdownMenuGroup>
        {IconList.map(icon => {
          const activeClass = icon.id === theme ? 'dark:text-white text-slate-800 dark:bg-slate-600 bg-slate-200' : ''
          return (
            <DropdownMenuItem key={icon.id} className={`gap-4 justify-center ${activeClass}`}>
              <Button
                aria-label={`${icon.name} 테마 적용하기`}
                id={icon.id}
                sizes="sm"
                intent="text"
                leadingIcon={icon.icon}
                onClick={handleSetTheme}
              >
                {icon.name}
              </Button>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuGroup>
    </DropdownMenuContent>
  )
}

export default ThemeDropdownMenu
