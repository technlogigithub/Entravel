
import ReactECharts from 'echarts-for-react';
import ReferralLink from "./ReferralLink";
import TotalCommisions from "./TotalCommisions";
import UpcomingCommsions from "./UpcomingCommsions";
import CommisonPaymentHistory from "./CommisonPaymentHistory";
import HowItWorksDialog from "./HowItWorksDialog";

const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '-50%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['60%', '90%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 10,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 2, name: 'Direct' },
          { value: 10, name: '2nd-Degree' },
        ]
      }
    ]
  };
const AffiliateDashboards = () => {
  return (
    <div className="pb-10">
        <div className="flex justify-between items-center mb-6 flex-wrap">
            <h1 className="text-2xl md:text-4xl font-medium max-sm:pb-2 max-sm:basis-full">Affiliate dashboard</h1>
            <HowItWorksDialog/>
        </div>
        <div className="grid xlg:grid-cols-2 gap-6 mb-12">
            <div className="px-4 py-6 sm:p-6 bg-white rounded shadow-six border border-input flex  gap-8 sm:gap-16 max-sm:flex-wrap max-sm:justify-center">
                <div className="basis-full sm:basis-[calc(100%_-_150px)] 2xlg:basis-[calc(100%_-_250px)]">
                    <h2 className="text-base sm:text-xl font-semibold sm:font-medium pb-7">Statistics</h2>
                    <div className="flex flex-col gap-4">
                        <div className="text-black flex justify-between gap-3">
                            <h3 className="text-base font-normal">Total Referrals</h3>
                            <p className="text-base font-semibold">12</p>
                        </div>
                        <div className="text-black flex justify-between gap-3">
                            <h3 className="text-base font-semibold sm:font-medium"><span className="inline-flex w-3 h-3 rounded-full bg-blue-300 mr-2.5"></span>Direct</h3>
                            <p className="text-base font-semibold">2</p>
                        </div>
                        <div className="text-black flex justify-between gap-3">
                            <h3 className="text-base font-semibold sm:font-medium"><span className="inline-flex w-3 h-3 rounded-full bg-green-300 mr-2.5"></span>2nd-Degree</h3>
                            <p className="text-base font-semibold">10</p>
                        </div>
                    </div>
                </div>
                <div className="basis-[200px] sm:basis-[150px] 2xlg:basis-[250px] h-[220px]">
                    <ReactECharts option={option} className="-mt-10"/>
                </div>
            </div>
                <ReferralLink/>
        </div>
        <TotalCommisions/>
        <UpcomingCommsions/>
        <CommisonPaymentHistory/>
    </div>
  )
}

export default AffiliateDashboards