const TotalCommisions = () => {
  return (
    <div>
        <h3 className="text-2xl font-medium">Total commissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-6 mt-6">
            <div className="px-6 py-5 bg-white rounded-lg flex justify-between items-center gap-4 border border-input">
                <div>
                    <h5 className="text-base font-semibold pb-2.5">ALL</h5>
                    <h3 className="text-2xl sm:text-[32px] font-medium leading-none">$ 3,000</h3>
                </div>
                <div className="mr-6">
                    <img src="./dollorSign.png" alt="dollorSign" className="w-16"/>
                </div>
            </div>

            <div className="px-6 py-5 bg-blue-100 rounded-lg flex justify-between items-center gap-4 border border-input">
                <div>
                    <h5 className="text-base font-semibold pb-2.5">DIRECT</h5>
                    <h3 className="text-2xl sm:text-[32px] font-medium leading-none">$ 2,000</h3>
                </div>
                <div className="mr-6">
                    <img src="./dollorSign.png" alt="dollorSign" className="w-16"/>
                </div>
            </div>

            <div className="px-6 py-5 bg-green-300 rounded-lg flex justify-between items-center gap-4 border border-input">
                <div>
                    <h5 className="text-base font-semibold pb-2.5">2nd-DEGREE</h5>
                    <h3 className="text-2xl sm:text-[32px] font-medium leading-none">$ 1,000</h3>
                </div>
                <div className="mr-6">
                    <img src="./dollorSign.png" alt="dollorSign" className="w-16"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TotalCommisions