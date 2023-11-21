export type TextBlockProps = {
  title: string
  content: string
  className?: string
}

export default function TextBlock({title, content, className}: TextBlockProps) {
  return <div className={`flex flex-col justify-center items-start rounded-md bg-dark px-8 py-6 gap-1 ${className}`}>
    <h1 className="text-gray-primary text-xl font-extrabold ">{title}</h1>
    <p className="text-gray-primary">{content}</p>
  </div>
}