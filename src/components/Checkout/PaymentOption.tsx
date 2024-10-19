import { useState } from "react";
import CustomRadioOption from "./CustomRadioOption";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IconBNBChain,
  IconEthereum,
  IconSecurePayment,
  IconPolygon,
  IconArbitrum,
  IconOptimism,
  IconAvalanche,
} from "../iocns/Icons";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { IconCopy, IconInfoCircleFilled } from "@tabler/icons-react";

const PaymentOption = ({ onFinish }: { onFinish: () => void }) => {
  const [selectedPayment, setSelectedPayment] = useState("creditCard");
  const [selectedCrypto, setSelectedCrypto] = useState<{
    value: string;
    icon: string;
  }>({
    value: "USDC",
    icon: "/crypto.png",
  });
  const [isCryptoSelected, setIsCryptoSelected] = useState(false);

  const [selectedBlockchain, setSelectedBlockchain] = useState<{
    value: string;
    icon: React.ReactNode;
  }>({
    value: "Ethereum",
    icon: <IconEthereum />,
  });
  const [isBlockchainSelected, setIsBlockchainSelected] = useState(false);
  const [copied, setCopied] = useState(false);

  const options = [
    {
      value: "USDC",
      label: "USDC",
      icon: "/crypto.png",
    },
    {
      value: "USDT",
      label: "USDT",
      icon: "/crypto_one.png",
    },
  ];

  const blockChainOptions = [
    {
      value: "Ethereum",
      label: "Ethereum",
      icon: <IconEthereum />,
    },
    {
      value: "BNBChain",
      label: "BNB Chain",
      icon: <IconBNBChain />,
    },
    {
      value: "Polygon",
      label: "Polygon",
      icon: <IconPolygon />,
    },
    {
      value: "Arbitrum",
      label: "Arbitrum",
      icon: <IconArbitrum />,
    },
    {
      value: "Optimism",
      label: "Optimism",
      icon: <IconOptimism />,
    },
    {
      value: "Avalanche",
      label: "Avalanche",
      icon: <IconAvalanche />,
    },
  ];

  const handleChangeCrypto = (value: string, icon: string) => {
    setSelectedCrypto({ value, icon });
    setIsCryptoSelected(true); // Set the state to show the selected crypto
  };

  const handleCryptoChangeClick = () => {
    setIsCryptoSelected(false); // Reset the state to show the options again
  };

  const handleChangeBlockchain = (value: string, icon: React.ReactNode) => {
    setSelectedBlockchain({ value, icon });
    setIsBlockchainSelected(true); // Set the state to show the selected crypto
  };

  const handleBlockchainChangeClick = () => {
    setIsBlockchainSelected(false); // Reset the state to show the options again
  };

  //   Copy code function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div>
      {/* Visa & Mastercard Section */}
      <div className="mb-4">
        <label className="flex items-center justify-between p-3 cursor-pointer bg-white  border border-input rounded">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="creditCard"
              checked={selectedPayment === "creditCard"}
              onChange={() => setSelectedPayment("creditCard")}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="font-medium text-sm">Visa & Mastercard cards</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/visa.png" alt="Visa" className="h-5" />
            <img src="/master.png" alt="Mastercard" className="h-5" />
          </div>
        </label>

        {/* Credit Card Details Accordion */}
        {/* {selectedPayment === 'creditCard' && (
          <div className="p-4 bg-gray-50">
            <div className="text-sm mb-2">Transaction fee may apply</div>
            <div className="grid grid-cols-1 gap-3">
              <input
                type="text"
                placeholder="Card number*"
                className="border rounded p-2 w-full"
              />
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="MM / YY*"
                  className="border rounded p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="CVV*"
                  className="border rounded p-2 w-full"
                />
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <span>Secure Payment | All information is fully encrypted</span>
              </div>
            </div>
          </div>
        )} */}
      </div>

      {/* Crypto Payment Section */}
      <div>
        <label className="flex items-center justify-between p-3 cursor-pointer bg-white  border border-input rounded">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="crypto"
              checked={selectedPayment === "crypto"}
              onChange={() => setSelectedPayment("crypto")}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="font-semibold">Pay with crypto</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/crypto.png" alt="crypto" className="h-5" />
            <img src="/crypto_one.png" alt="crypto" className="h-5" />
          </div>
        </label>

        {/* Crypto Accordion */}
        {selectedPayment === "crypto" && (
          <div className="border border-dotted border-blue mt-3 rounded overflow-hidden">
            <div className="py-4 px-5 bg-blue-50 flex justify-between items-center rounded overflow-hidden">
              <div>
                <h2 className="text-base font-medium">Pay with crypto</h2>
                <p className="text-sm font-normal">Transaction fee may apply</p>
              </div>
              <p className="text-base font-bold text-blue">19:59</p>
            </div>

            <div className="bg-white pt-6">
              <Accordion
                type="single"
                collapsible
                className="w-full px-5"
                defaultValue="cryptocurrency"
              >
                {/* Step One */}
                <AccordionItem value="cryptocurrency">
                  <AccordionTrigger>1. Choose cryptocurrency</AccordionTrigger>
                  <AccordionContent>
                    {!isCryptoSelected ? (
                      <div className="grid grid-cols-2 gap-4 mt-1 mb-2">
                        {options.map((option) => (
                          <CustomRadioOption
                            key={option.value}
                            value={option.value}
                            selected={selectedCrypto.value}
                            onChange={() =>
                              handleChangeCrypto(option.value, option.icon)
                            }
                            icon={option.icon}
                            label={option.label}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="flex justify-between gap-4 bg-innerBg py-4 px-6 mt-1 mb-2">
                        <div className="text-sm font-semibold flex gap-3">
                          <img
                            src={selectedCrypto.icon}
                            alt="crypto"
                            className="h-5"
                          />{" "}
                          {selectedCrypto.value}
                        </div>
                        <Button
                          variant="link"
                          className="h-auto p-0 rounded"
                          onClick={handleCryptoChangeClick}
                        >
                          Change
                        </Button>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
                {/* Step Two */}
                <AccordionItem value="blockchain">
                  <AccordionTrigger>2. Select blockchain</AccordionTrigger>
                  <AccordionContent>
                    {!isBlockchainSelected ? (
                      <div className="grid grid-cols-2 gap-4 mt-1 mb-2">
                        {blockChainOptions.map((option) => (
                          <CustomRadioOption
                            key={option.value}
                            value={option.value}
                            selected={selectedBlockchain.value}
                            onChange={() =>
                              handleChangeBlockchain(option.value, option.icon)
                            }
                            customIcon={option.icon}
                            label={option.label}
                            isIcon={true}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="flex justify-between gap-4 bg-innerBg py-4 px-6 mt-1 mb-2">
                        <div className="text-sm font-semibold flex gap-3">
                          {selectedBlockchain.icon}
                          {selectedBlockchain.value}
                        </div>
                        <Button
                          variant="link"
                          className="h-auto p-0 rounded"
                          onClick={handleBlockchainChangeClick}
                        >
                          Change
                        </Button>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
                {/* Step Three */}
                <AccordionItem value=" sendcrypto">
                  <AccordionTrigger>3. Send crypto</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sm font-medium flex flex-col gap-5">
                      <p className="text-text">
                        Scan this QR code with your wallet app
                      </p>
                      <p className="flex gap-2">
                        <IconInfoCircleFilled className="text-brown min-w-5" />
                        Only send over the &lt;network&gt; name blockchain. Do
                        not send over any other blockchains.
                      </p>
                      <p className="flex gap-2">
                        <IconInfoCircleFilled className="text-brown min-w-5" />
                        Do not send NFTs to this &lt;network&gt; name deposit
                        address. An administrative fee will be charged to
                        recover any NFTs deposited to this address.
                      </p>
                      <img src="/scanner.png" alt="scanner" className="w-40" />
                      <Separator className="w-full h-[1px] bg-input" />
                      <p className="text-text text-base">
                        Or copy details and pay with any wallet app
                      </p>
                      <div className="flex gap-7 bg-innerBg py-4 px-6 mt-1 mb-2">
                        <div className="flex gap-2 items-center">
                          <img src="/crypto.png" alt="crypto" className="h-6" />
                          USDC
                        </div>
                        <div className="flex gap-2 items-center">
                          <IconEthereum />
                          Ethereum
                        </div>
                      </div>

                      <div>
                        <h6 className="text-base font-medium mb-4 text-black">
                          Payment address (Ethereum):
                        </h6>
                        <div className="flex justify-between gap-4 bg-blue-50 py-4 px-6 mt-1 mb-2">
                          <h6 className="text-base font-medium text-black">
                            0x19fd3...fkskcsW
                          </h6>
                          <Button
                            variant="link"
                            className="h-auto p-0 rounded"
                            onClick={() => copyToClipboard("0x19fd3...fkskcsW")}
                          >
                            <IconCopy className="size-6" />
                          </Button>
                        </div>
                        {copied && <p className="text-sm text-green-600">Copied to clipboard!</p>}
                      </div>

                      <div>
                        <h6 className="text-base font-medium mb-4 text-black">
                            Amount to pay:
                        </h6>
                        <div className="flex justify-between gap-4 bg-blue-50 py-4 px-6 mt-1 mb-2">
                          <h6 className="text-base font-medium text-black">
                            2,200 USDT
                          </h6>
                          <Button
                            variant="link"
                            className="h-auto p-0 rounded"
                            onClick={() => copyToClipboard("2,200 USDT")}
                          >
                            <IconCopy className="size-6" />
                          </Button>
                        </div>
                        {copied && <p className="text-sm text-green-600">Copied to clipboard!</p>}
                      </div>
                      <Separator className="w-full h-[1px] bg-input" />
                      <p className="text-base font-medium text-text">After completing the payment in your crypto wallet app, click the “Finish” button below to complete this booking:</p>

                      <Button size="lg" className="w-full rounded-xl" onClick={onFinish}>Finish, I have paid</Button>
                      <p className="flex gap-2 text-text text-xs">
                        <IconInfoCircleFilled className="text-text min-w-5" />
                        Processing your payment usually takes between 5 and 10 minutes depending on the chosen blockchain.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Separator className="w-full h-[1px] mt-3 mb-5 bg-input" />
              <div className="px-5 flex items-center gap-2 pb-4">
                <IconSecurePayment />
                <p className="text-sm font-medium text-text">
                  <span className="text-green">Secure Payment</span> | All
                  information is fully secure
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cancellation Policy Text */}
      <div className="border-b border-dotted border-input py-6 mb-6">
        <div className="mb-6">
          <h6 className="text-base font-medium pb-1 text-black">
            Cancellation Policy
          </h6>
          <p className="text-sm text-black-secondary font-medium">
            If you cancel between 06 February 2019 2:00:00 am(Europe/Kiev time)
            - 12 April 2019 3:00:00 am(Europe/Kiev time) there will be a
            cancellation fee $3,469.{" "}
          </p>
        </div>
        <div>
          <h6 className="text-base font-medium pb-1 text-black">
            Booking Remarks
          </h6>
          <p className="text-sm text-black-secondary font-medium">
            Any cancellation received within 1 day prior to the arrival date
            will incur the first night's charge. Failure to arrive at your hotel
            or property will be ...Show more{" "}
          </p>
        </div>
      </div>
      <p className="text-sm">
        Your booking is with Central Park Hotel directly, and by completing this
        payment, you agree to the{" "}
        <Link to="/" className="underline text-blue">
          Booking conditions
        </Link>
        ,{" "}
        <Link to="/" className="underline text-blue">
          General terms
        </Link>{" "}
        and{" "}
        <Link to="/" className="underline text-blue">
          Privacy policy
        </Link>
      </p>
    </div>
  );
};

export default PaymentOption;
