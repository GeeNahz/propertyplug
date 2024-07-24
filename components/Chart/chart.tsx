'use client'

import { useEffect } from "react"
import Chart from "chart.js"
import { TChart } from "../common/type";
import { getConfig } from "./config";
import { MdCircle } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

const COLORS = ['#1f78b4', '#ff4a55']
const TW_COLORS = ['text-[#1f78b4]', 'text-[#ff4a55]']

type Props = {
  dataObj: TChart;
}

export default function Chartjs({ dataObj }: Props) {
  const config = getConfig(dataObj.datasets, COLORS)

  useEffect(() => {
    // @ts-ignore
    var ctx = document.getElementById("line-chart").getContext("2d");
    // @ts-ignore
    window.myLine = new Chart(ctx, config);
  }, [config]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded h-full">
        <div className="title legend flex justify-between items-center mb-16">
          <p className="title font-medium text-sm capitalize">{dataObj.label}</p>

          <div className="legend ctrl flex gap-10 text-xs font-light">
            <div className="legend flex gap-2 items-center">
              {
                dataObj.datasets.map((dataset, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-2 ${TW_COLORS[index]}`}
                    >
                      <MdCircle size={12} />
                      <p className="text-ui-dark">{dataset.label}</p>
                    </div>
                  )
                })
              }
            </div>

            <button className="flex items-center gap-2 bg-ui-dark text-white text-xs py-2 px-4 rounded-full">2024 <FaCaretDown /></button>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-full">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div >
    </>)
}
