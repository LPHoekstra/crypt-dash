import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js"
import { Line } from "react-chartjs-2"
import colors from "../../styles/colors"
import address from "../../styles/address"
import Cookies from "js-cookie"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { ActualisationContext } from "../../context"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
)

const Title = styled.h2`
  margin-top: 12px;
  margin-bottom: 12px;
`

const GraphContenair = styled.div`
  background-color: ${colors.moduleBackground};
  border-radius: 25px;
  padding: 25px;
`
// @media screen and (min-width: 1024px) {
//   width: 550px;
//   height: 275px;
// }

function BalanceHistory() {
  const token = Cookies.get("token")
  const [datapoints, setDatapoints] = useState([1, 2, 3])
  const [labels, setLabels] = useState([1, 2, 3])
  const { actualisationDonnees } = useContext(ActualisationContext)

  useEffect(() => {}, [actualisationDonnees])

  useEffect(() => {
    fetch(`${address.serveur}/api/donnees/seven-last-snapshot`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // créations des tableaux "labels" et "datapoints" pour le graph
        let newDatapoints = []
        let newLabels = []
        for (let i = 0; i < data.length; i++) {
          const data0 = data[i].totalAssetOfBtc
          newDatapoints.unshift(data0)

          const dateJour = data[i].date.day
          newLabels.unshift(dateJour)
        }
        setLabels(newLabels)
        setDatapoints(newDatapoints)
      })
      .catch((error) => console.log(error))
  }, [token])

  const data = {
    labels: labels,
    datasets: [
      {
        label: "history",
        data: datapoints,
        borderColor: colors.selected,
        backgroundColor: colors.chartFillBackground,
        tension: 0.4,
        fill: true,
      },
    ],
  }

  const options = {
    responsive: true,
  }

  return (
    <div>
      <Title>Balance History</Title>
      <GraphContenair>
        <Line data={data} options={options} />
      </GraphContenair>
    </div>
  )
}

export default BalanceHistory
