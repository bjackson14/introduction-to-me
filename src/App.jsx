import Badge from './components/badge/Badge'
import './App.css'

export default function App() {
  return (
    <>
      <div>
        <Badge>Badge</Badge>
        <Badge shape="pill">Badge</Badge>
      </div>
      <div>
        <Badge color="red">Badge</Badge>
        <Badge shape="pill" color="red">Badge</Badge>
      </div>
    </>
  )
}