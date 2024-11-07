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
        if (sketchRef.current) {
          const { offsetWidth, offsetHeight } = sketchRef.current
          p.createCanvas(offsetWidth, offsetHeight, p.WEBGL)
        }
      }

      p.windowResized = () => {
        if (sketchRef.current) {
          const { offsetWidth, offsetHeight } = sketchRef.current
          p.resizeCanvas(offsetWidth, offsetHeight)
        }
      }

      p.draw = () => {
        p.background('#000')
        p.rotateY(p.frameCount * 0.01)

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
        z1: number
        x2: number
        y2: number
        z2: number
        speed: number
        angleXY: number
        angleZ: number

        constructor(p: p5) {
          this.x1 = p.random(-p.width / 2, p.width / 2)
          this.y1 = p.random(-p.height / 2, p.height / 2)
          this.z1 = p.random(-p.width / 2, p.width / 2)
          this.x2 = p.random(-p.width / 2, p.width / 2)
          this.y2 = p.random(-p.height / 2, p.height / 2)
          this.z2 = p.random(-p.width / 2, p.width / 2)
          this.speed = p.random(1, 5)
          this.angleXY = p.random(0, p.TWO_PI)
          this.angleZ = p.random(0, p.TWO_PI)
        }

        display(p: p5) {
          p.stroke(255)
          p.line(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2)
        }

        move(p: p5) {
          this.x1 += this.speed * p.cos(this.angleXY)
          this.y1 += this.speed * p.sin(this.angleXY)
          this.z1 += this.speed * p.sin(this.angleZ)

          this.x2 += this.speed * p.cos(this.angleXY + p.PI)
          this.y2 += this.speed * p.sin(this.angleXY + p.PI)
          this.z2 += this.speed * p.sin(this.angleZ + p.PI)
        }
      }
    }

    const createP5Instance = () => {
      if (sketchRef.current) {
        const p5Instance = new p5(sketch, sketchRef.current)
        return p5Instance
      }
    }

    const timeoutId = setTimeout(createP5Instance, 0)

    return () => {
      clearTimeout(timeoutId)
      // Se a instância do P5 estiver criada, removê-la
      if (sketchRef.current) {
        const p5Instance = new p5(sketch, sketchRef.current)
        p5Instance.remove()
      }
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
