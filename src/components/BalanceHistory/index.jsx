import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import colors from "../../styles/colors"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
)

const labels = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

const datapoints = [1, 0.7, 2, 0.9, 1.3]

function BalanceHistory() {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: datapoints,
        fill: false,
        borderColor: colors.selected,
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
  }

  return (
    <div>
      <h2>Balance History</h2>
      <Line data={data} options={options} />
    </div>
  )
}

export default BalanceHistory
