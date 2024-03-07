import { useFetch } from "../../hooks"

function RecentTransation() {
  const test = useFetch("http://localhost:4000/userAsset")
  const userAsset = test.data

  return (
    <div>
      <h1>Bonjour ceci est en construction et arrive prochainement</h1>
    </div>
  )
}

export default RecentTransation
