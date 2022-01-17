import { useRouter } from "next/router"
import { NextPage } from 'next'

const CatalogPage: NextPage = () => {
  const { query } = useRouter()

  console.log('params',{query})

  return (
    <div>
      <h1>Все остальные страницы</h1>
      <p>{query.params}</p>
    </div>
  )
}

export default CatalogPage