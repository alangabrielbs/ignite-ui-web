import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

const ColorsGrid = () => {
  return Object.entries(colors).map(([name, color]) => {
    const textColor = getContrast(color, '#fff') > 3.5 ? '#fff' : '#000'
    
    return (
    <div key={name} style={{ backgroundColor: color, padding: '2rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'monospace',
        color: textColor
      }}>
        <strong>${name}</strong>
        <span>{color}</span>
      </div>
    </div>
  )})
}

export default ColorsGrid