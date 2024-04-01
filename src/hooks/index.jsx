import { useContext, useEffect, useState } from "react"
import Cookies from "js-cookie"
import { ConnectedContext } from "../context"
import { useLocation } from "react-router"

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const token = Cookies.get("token")
  const { isConnected } = useContext(ConnectedContext)

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      setLoading(true)
      try {
        if (isConnected) {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          })
          const data = await response.json()
          setData(data)
        }
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [isConnected, token, url])
  return { isLoading, data, error }
}

export function usePage() {
  const [page, setPage] = useState("Overview")
  const location = useLocation()

  useEffect(() => {
    const firstLetterMaj = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const path = location.pathname.split("/")
    const final = path[1]
    const addressMaj = firstLetterMaj(final)
    setPage(addressMaj)
  }, [location.pathname])

  return page
}

// export function PostFetch(url, req) {
//   const [data, setData] = useState({})
//   const [isLoading, setLoading] = useState(false)
//   // const [error, setError] = useState({})

//   useEffect(() => {
//     if (!url) return
//     setLoading(true)

//     async function fetchData() {
//       try {
//         const response = await fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(req),
//         })
//         const data = await response.json()
//         setData(data)
//       } catch (error) {
//         console.log(error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [url, req])
//   return { data, isLoading }
// }
