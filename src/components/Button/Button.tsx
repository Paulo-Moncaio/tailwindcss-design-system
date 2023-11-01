import { twMerge } from "tailwind-merge"

export type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({children, className} : ButtonProps) {
  return <button className={twMerge('py-3 px-8 bg-[#2D5BFF] rounded-lg text-white', className)} >{children}</button>
} 