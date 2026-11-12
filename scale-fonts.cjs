const fs = require('node:fs')

const file = 'src/styles.css'
let css = fs.readFileSync(file, 'utf8')
const scaleFixed = (value) => {
  const size = Number(value)
  const factor = size <= 12 ? 1.24 : 1.12
  return `${Math.round(size * factor * 10) / 10}px`
}

css = css.replace(/font-size:\s*clamp\(([^)]+)\)/g, (_, value) => {
  const larger = value.replace(/([\d.]+)(px|vw|rem)/g, (_, size, unit) => `${Math.round(Number(size) * 1.1 * 10) / 10}${unit}`)
  return `font-size: calc(clamp(${larger}) * 1.1)`
})
css = css.replace(/font-size:\s*([\d.]+)px/g, (_, size) => `font-size: ${scaleFixed(size)}`)
css = css.replace(/\bfont:(?!-)[^;\n]+/g, (declaration) =>
  declaration.replace(/([\d.]+)px(?=\/|\s)/, (_, size) => scaleFixed(size)),
)

fs.writeFileSync(file, css)
