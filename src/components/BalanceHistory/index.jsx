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
import { useEffect, useState } from "react"
import styled from "styled-components"

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

function BalanceHistory() {
  const token = Cookies.get("token")
  const [datapoints, setDatapoints] = useState([1, 1, 1, 1, 1, 1, 1])
  const labels = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

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
        let data0 = data[0] === undefined ? 0 : data[0].totalAssetOfBtc
        let data1 =
          data[1] === undefined
            ? data[0].totalAssetOfBtc
            : data[1].totalAssetOfBtc
        let data2 =
          data[2] === undefined
            ? data[0].totalAssetOfBtc
            : data[2].totalAssetOfBtc
        let data3 =
          data[3] === undefined
            ? data[0].totalAssetOfBtc
            : data[3].totalAssetOfBtc
        let data4 =
          data[4] === undefined
            ? data[0].totalAssetOfBtc
            : data[4].totalAssetOfBtc
        let data5 =
          data[5] === undefined
            ? data[0].totalAssetOfBtc
            : data[5].totalAssetOfBtc
        let data6 =
          data[6] === undefined
            ? data[0].totalAssetOfBtc
            : data[6].totalAssetOfBtc
        const newDatapoints = [data6, data5, data4, data3, data2, data1, data0]
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
      <Line data={data} options={options} />
    </div>
  )
}

export default BalanceHistory
