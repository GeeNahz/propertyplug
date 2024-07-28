import Chartjs from '@/components/Chart/chart';
import { TChart } from '@/components/common/type';

const dataObj: TChart = {
  label: 'reach growth analytics',
  datasets: [
    {
      label: 'connections',
      data: [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'June', value: 0 },
        { label: 'July', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'March', value: 0 },
        { label: 'March', value: 0 },
      ]
    },
    {
      label: 'interactions',
      data: [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'June', value: 0 },
        { label: 'July', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'March', value: 0 },
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

