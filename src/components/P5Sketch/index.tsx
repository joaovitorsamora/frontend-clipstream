import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import './styles.css'

interface P5SketchProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const P5Sketch: React.FC<P5SketchProps> = ({ children, ...props }) => {
  const sketchRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const sketch = (p: p5) => {
      let lines: RandomLine[] = []
      const maxLines = 60

      p.setup = () => {
        p.createCanvas(p.windowWidth, 200)
      }

      p.draw = () => {
        p.background('#000')
        p.translate(p.width / 2, p.height / 2)

        if (lines.length < maxLines) {
          lines.push(new RandomLine(p))
        }
        for (let i = 0; i < lines.length; i++) {
          lines[i].display(p)
          lines[i].move(p)
        }
        p.fill('#fff')
      }

      class RandomLine {
        x1: number
        y1: number
        x2: number
        y2: number
        speed: number
        angle: number

        constructor(p: p5) {
          this.x1 = p.random(-p.width / 2, p.width / 2)
          this.y1 = p.random(-p.height / 2, p.height / 2)
          this.x2 = p.random(-p.width / 2, p.width / 2)
          this.y2 = p.random(-p.height / 2, p.height / 2)
          this.speed = p.random(1, 5)
          this.angle = p.random(0, p.TWO_PI)
        }

        display(p: p5) {
          p.stroke(255)
          p.line(this.x1, this.y1, this.x2, this.y2)
        }

        move(p: p5) {
          this.x1 += this.speed * p.cos(this.angle)
          this.y1 += this.speed * p.sin(this.angle)
          this.x2 += this.speed * p.cos(this.angle + p.PI)
          this.y2 += this.speed * p.sin(this.angle + p.PI)

          if (
            this.x1 < -p.width / 2 ||
            this.x1 > p.width / 2 ||
            this.y1 < -p.height / 2 ||
            this.y1 > p.height / 2 ||
            this.x2 < -p.width / 2 ||
            this.x2 > p.width / 2 ||
            this.y2 < -p.height / 2 ||
            this.y2 > p.height / 2
          ) {
            this.x1 = p.random(-p.width / 2, p.width / 2)
            this.y1 = p.random(-p.height / 2, p.height / 2)
            this.x2 = p.random(-p.width / 2, p.width / 2)
            this.y2 = p.random(-p.height / 2, p.height / 2)
          }
        }
      }
    }

    const p5Instance = new p5(sketch, sketchRef.current!)

    return () => {
      p5Instance.remove()
    }
  }, [])

  return (
    <div {...props}>
      <div className="sketch" ref={sketchRef}>
        {children}
      </div>
    </div>
  )
}
