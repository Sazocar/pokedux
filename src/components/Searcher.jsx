import { Input } from "antd"
import './Searcher.css'

const Searcher = () => {
  return (
    <Input.Search className="Searcher" placeholder="Buscar..." />
  )
}
export { Searcher };