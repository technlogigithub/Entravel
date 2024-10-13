import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const mealPlanList = [
  {
    label: "Breakfast included",
  },
  {
    label: "Lunch included",
  },
  {
    label: "All included",
  },
  {
    label: "Meal not included ",
  }
];
const MealPlan = () => {
  return (
    <>
      <Label className="text-base font-semibold mb-5 text-black">
      Meal plan
      </Label>
      <div className="flex flex-col gap-5">
        {mealPlanList.map((filter) => (
          <div key={filter.label} className="flex items-center space-x-3">
            <Checkbox id={filter.label} />
            <Label
              htmlFor={filter.label}
              className="text-sm font-normal leading-none cursor-pointer m-0 text-black"
            >
              {filter.label}
            </Label>
          </div>
        ))}
      </div>
    </>
  );
};

export default MealPlan;
