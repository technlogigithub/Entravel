import { Button } from "../ui/button";

const Discount = () => {
  return (
    <div className="bg-disocunt-mobile-bg md:bg-disocunt-bg w-[calc(100%_-_24px)] h-[728px] md:h-[380px] xl:h-[400px] 2xl:h-[524px] bg-center bg-cover bg-no-repeat relative flex md:items-center mx-3 p-6 md:p-20 rounded-xl">
      <div className="discount-overlay"></div>
      <div className="md:max-w-[660px] relative">
        <h3 className="text-[36px] md:text-5xl font-semibold pb-6 max-md:leading-tight">
          Save up to 70% and pay directly with USDT or USDC
        </h3>
        <p className="pb-8 max-w-[460px]">
          Leverage your travel funds with Entravel and save up to 70% when you
          pay with USDT or USDC. These significant discounts are curated for our
          members only.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="sm:inline-flex uppercase min-w-44 max-sm:w-full"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Discount;
