interface VideoProps {
    id: number;
    url: string;
    title: string;
    description?: string;
}

interface LinksProps {
  id: number
  title: string
  url: string
  description: string
  site: string
  image: string
  views: number
}

interface HeaderProps {
  title: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder: string
}

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder: string
}

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

interface P5SketchProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

interface CarouselProps {
  id: number
  title: string
  url: string
  description: string
  site: string
  image: string
  views: number
  onClickLink: (url: string, id: number) => void
}

interface useFetchDataProps {
  urls: string[]
}

export type {
    VideoProps,
    TitleProps,
    P5SketchProps,
    LinksProps,
    InputProps,
    HeaderProps,
    CarouselProps,
    useFetchDataProps
}