import Chartjs from '@/components/Chart/chart';
import { TChart } from '@/components/common/type';

const dataObj: TChart = {
  label: 'reach growth analytics',
  datasets: [
    {
      label: 'connections',
      data: [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 22 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 18 },
        { label: 'May', value: 23 },
        { label: 'June', value: 60 },
        { label: 'July', value: 82 },
        { label: 'Aug', value: 17 },
        { label: 'Sep', value: 63 },
        { label: 'Oct', value: 41 },
        { label: 'March', value: 3 },
        { label: 'March', value: 0 },
      ]
    },
    {
      label: 'interactions',
      data: [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 6 },
        { label: 'Mar', value: 58 },
        { label: 'Apr', value: 57 },
        { label: 'May', value: 85 },
        { label: 'June', value: 29 },
        { label: 'July', value: 6 },
        { label: 'Aug', value: 56 },
        { label: 'Sep', value: 65 },
        { label: 'Oct', value: 21 },
        { label: 'March', value: 19 },
        { label: 'March', value: 0 },
      ]
    }
  ]
}


export default function ChartWrapper() {
  return (
    <div className="flex flex-col h-full gap-10 pt-10 px-6">
      <Chartjs dataObj={dataObj} />
    </div>
  )
}

