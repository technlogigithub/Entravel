import { FC } from "react";

interface IconProps {
  className?: string;
}

const IconCheckedCircle: FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="165"
      height="16"
      viewBox="0 0 165 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g style={{ mixBlendMode: "luminosity" }}>
        <mask
          id="mask0_7093_9124"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="165"
          height="16"
        >
          <path
            d="M164.354 0.348846L0 0.348846L0 15.6512H164.354V0.348846Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_7093_9124)">
          <mask
            id="mask1_7093_9124"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="1"
            y="1"
            width="163"
            height="14"
          >
            <path
              d="M163.423 1.37494L1.02594 1.37494V14.7645H163.423V1.37494Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_7093_9124)">
            <mask
              id="mask2_7093_9124"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="1"
              y="1"
              width="163"
              height="14"
            >
              <path
                d="M163.423 1.37396L1.02594 1.37396V14.7635H163.423V1.37396Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask2_7093_9124)">
              <mask
                id="mask3_7093_9124"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="1"
                y="1"
                width="163"
                height="14"
              >
                <path
                  d="M163.423 1.37665L1.02603 1.37665V14.7662H163.423V1.37665Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask3_7093_9124)">
                <path
                  d="M3.00911 7.17112H10.5125V8.79315H3.00911V7.17112ZM3.19669 13.1059H11.7005V14.7661H1.11243V1.40811H11.4088V3.06831H3.19669V13.1059ZM22.3704 14.7661V1.40811H24.0794L33.7296 12.3807H32.8333V1.40811L34.9177 1.40811V14.7661H33.2085L23.5583 3.79346H24.4546V14.7661H22.3704ZM49.4767 14.7661V3.06831H44.4745V1.40811H56.5423V3.06831H51.5402V14.7661H49.4767ZM66.1075 14.7661V1.40811H71.7974C73.0758 1.40811 74.1665 1.59258 75.0697 1.96151C75.9728 2.33045 76.6675 2.86477 77.1539 3.56448C77.6402 4.26418 77.8834 5.09745 77.8834 6.06432C77.8834 7.03118 77.6402 7.86445 77.1539 8.56415C76.6675 9.25113 75.9728 9.7791 75.0697 10.148C74.1665 10.517 73.0758 10.7014 71.7974 10.7014H67.2538L68.1917 9.82363V14.7661H66.1075ZM75.8617 14.7661L72.1517 9.91904H74.3819L78.1335 14.7661H75.8617ZM68.1917 10.0144L67.2538 9.0794H71.7349C73.0687 9.0794 74.0763 8.81859 74.7572 8.29699C75.4518 7.76269 75.7992 7.01846 75.7992 6.06432C75.7992 5.11017 75.4518 4.37231 74.7572 3.85071C74.0763 3.32911 73.0687 3.06831 71.7349 3.06831H67.2538L68.1917 2.11417V10.0144ZM86.3363 14.7661L92.9436 1.40811H95.0071L101.635 14.7661H99.4468L93.548 2.47675H94.3818L88.4832 14.7661H86.3363ZM89.1502 11.4266L89.7131 9.89995H97.925L98.5292 11.4266H89.1502ZM114.543 14.7661L108.124 1.40811H110.375L116.273 13.7356H114.981L120.921 1.40811H123.005L116.606 14.7661H114.543ZM134.058 7.17112H141.561V8.79315H134.058V7.17112ZM134.245 13.1059H142.748V14.7661H132.16V1.40811H142.457V3.06831H134.245V13.1059ZM153.418 14.7661V1.40811H155.503V13.1059H163.402V14.7661H153.418Z"
                  fill="#121212"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const IconDollor: FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M7.896 8.466C7.896 9.936 6.79 11.14 4.634 11.21V12.274H3.794V11.182C1.806 10.986 0.308 9.866 0.224 7.808H1.848C1.918 8.956 2.618 9.614 3.794 9.782V6.73L3.668 6.688C2.212 6.282 0.602 5.68 0.602 3.916C0.602 2.32 1.834 1.256 3.794 1.2V0.388H4.634V1.242C6.314 1.466 7.56 2.558 7.658 4.35H6.034C5.922 3.412 5.404 2.852 4.634 2.656V5.386C6.454 5.932 7.896 6.45 7.896 8.466ZM2.212 3.762C2.212 4.532 2.856 4.84 3.794 5.134V2.586C2.828 2.628 2.212 3.076 2.212 3.762ZM4.634 9.824C5.754 9.768 6.272 9.25 6.272 8.494C6.272 7.682 5.74 7.332 4.634 6.982V9.824Z"
        fill="black"
      />
    </svg>
  );
};

const IconWhiteDollor = () => {
  return (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5209_12519)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7956 22.3856C17.815 22.3856 22.6532 17.5474 22.6532 11.528C22.6532 5.50855 17.815 0.67041 11.7956 0.67041C5.77613 0.67041 0.937988 5.50855 0.937988 11.528C0.937988 17.5474 5.77613 22.3856 11.7956 22.3856ZM14.7814 13.2435C14.7814 11.6626 13.8314 11.1198 11.9313 10.8961C10.5741 10.7137 10.3027 10.3532 10.3027 9.71587C10.3027 9.08396 10.7587 8.67788 11.6599 8.67788C12.4742 8.67788 12.9302 8.94932 13.1528 9.62683C13.1773 9.69196 13.2209 9.74821 13.2778 9.78828C13.3347 9.82836 13.4024 9.85041 13.472 9.85159H14.1918C14.2335 9.85291 14.275 9.84577 14.3139 9.8306C14.3527 9.81542 14.3881 9.79253 14.4178 9.7633C14.4475 9.73407 14.471 9.69911 14.4869 9.66054C14.5027 9.62196 14.5106 9.58058 14.51 9.53889V9.49112C14.3276 8.49439 13.5132 7.54435 12.4742 7.45532V6.45859C12.4742 6.2751 12.3385 6.13938 12.1159 6.09812H11.5187C11.3341 6.09812 11.1648 6.23384 11.117 6.45859V7.45532C9.75978 7.6399 8.8586 8.67788 8.8586 9.81141C8.8586 11.3032 9.75978 11.8874 11.6599 12.1176C12.9302 12.3412 13.3363 12.6138 13.3363 13.339C13.3363 14.0589 12.6989 14.5605 11.8433 14.5605C10.6631 14.5605 10.256 14.0589 10.1203 13.3803C10.079 13.2033 9.94327 13.1089 9.80755 13.1089L9.03449 13.1089C8.9928 13.1083 8.95142 13.1161 8.91284 13.132C8.87427 13.1478 8.83931 13.1713 8.81008 13.201C8.78085 13.2308 8.75796 13.2661 8.74278 13.305C8.72761 13.3438 8.72047 13.3853 8.72179 13.427V13.4748C8.89877 14.6018 9.62406 15.3748 11.1181 15.5996V16.6028C11.1181 16.7874 11.2538 16.909 11.4764 16.9557H12.1278C12.3048 16.9557 12.4275 16.8341 12.4753 16.6028V15.5985C13.8325 15.3748 14.7814 14.4661 14.7814 13.2446M7.2267 16.6256C7.88258 17.2274 8.65128 17.6931 9.48834 17.9959C9.62406 18.0903 9.75978 18.2673 9.75978 18.403V19.0404C9.75978 19.1283 9.75978 19.1761 9.71309 19.2173C9.67183 19.3998 9.48834 19.4888 9.30593 19.3998C7.65947 18.8755 6.22245 17.8412 5.20269 16.4463C4.18293 15.0514 3.6333 13.3683 3.6333 11.6404C3.6333 9.91248 4.18293 8.22937 5.20269 6.83448C6.22245 5.43958 7.65947 4.40522 9.30593 3.881C9.35262 3.83974 9.44165 3.83974 9.48834 3.83974C9.67292 3.881 9.75978 4.01672 9.75978 4.19913V4.83104C9.75978 5.06122 9.67292 5.19694 9.48834 5.28489C8.56328 5.61922 7.72319 6.15317 7.02776 6.84879C6.33232 7.54441 5.79861 8.38464 5.46452 9.30979C4.99782 10.5663 4.9162 11.9333 5.23008 13.2364C5.54396 14.5395 6.23908 15.7195 7.2267 16.6256ZM13.8791 4.06341C13.9204 3.881 14.1028 3.79197 14.2863 3.881C15.5302 4.28501 16.6595 4.98039 17.5802 5.90921C18.5009 6.83804 19.1863 7.97341 19.5794 9.22076C20.9366 13.5171 18.5816 18.0903 14.2863 19.4475C14.2385 19.4888 14.1506 19.4888 14.1028 19.4888C13.9204 19.4475 13.8314 19.3118 13.8314 19.1283V18.4986C13.8314 18.2673 13.9204 18.1316 14.1028 18.0426C15.9562 17.364 17.4491 15.9188 18.1277 14.0187C18.438 13.1845 18.58 12.297 18.5454 11.4075C18.5107 10.5181 18.3002 9.64428 17.926 8.83665C17.5518 8.02902 17.0212 7.30354 16.365 6.70211C15.7088 6.10069 14.9399 5.63524 14.1028 5.33266C13.9671 5.2382 13.8314 5.06122 13.8314 4.87773V4.24799C13.8314 4.15244 13.8314 4.11118 13.8791 4.06341Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5209_12519">
          <rect
            width="22.6593"
            height="22.6593"
            fill="white"
            transform="translate(0.245605 0.67041)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const IconUstd = () => {
  return (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5753 23.3297C5.31775 23.3297 0.245605 18.2576 0.245605 12.0001C0.245605 5.74256 5.31775 0.67041 11.5753 0.67041C17.8328 0.67041 22.9049 5.74256 22.9049 12.0001C22.9049 18.2576 17.8328 23.3297 11.5753 23.3297ZM12.9362 10.4373V8.76191H16.7699V6.20707H6.33176V8.76191H10.1654V10.4366C7.04977 10.5796 4.70666 11.1971 4.70666 11.9363C4.70666 12.6756 7.04977 13.2924 10.1654 13.4361V18.8049H12.9362V13.4347C16.0469 13.2916 18.3844 12.6749 18.3844 11.9363C18.3844 11.1978 16.0469 10.581 12.9362 10.4373ZM12.9362 12.9794V12.978C12.8583 12.9836 12.4569 13.0077 11.5611 13.0077C10.8459 13.0077 10.3425 12.9865 10.1654 12.978V12.9801C7.41232 12.859 5.35741 12.3796 5.35741 11.806C5.35741 11.2332 7.41232 10.7538 10.1654 10.6306V12.5028C10.3453 12.5156 10.8608 12.546 11.5731 12.546C12.4278 12.546 12.8562 12.5106 12.9362 12.5035V10.632C15.6837 10.7545 17.7336 11.2339 17.7336 11.806C17.7336 12.3796 15.6837 12.8576 12.9362 12.9794Z"
        fill="white"
      />
    </svg>
  );
};

const IconPolygon = () => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.13 0.17041C18.3876 0.17041 23.4596 5.24243 23.4596 11.5001C23.4596 17.7577 18.3876 22.8297 12.13 22.8297C5.87231 22.8297 0.800293 17.7577 0.800293 11.5001C0.800293 5.24243 5.87231 0.17041 12.13 0.17041Z"
        fill="#8247E5"
      />
      <g clipPath="url(#clip0_5209_12509)">
        <path
          d="M15.8867 8.79526C15.6286 8.64774 15.2966 8.64774 15.0016 8.79526L12.9363 10.0123L11.5348 10.7868L9.50641 12.0039C9.24825 12.1514 8.91633 12.1514 8.62128 12.0039L7.03543 11.045C6.77726 10.8974 6.59286 10.6024 6.59286 10.2705V8.42646C6.59286 8.13142 6.74038 7.83637 7.03543 7.65197L8.62128 6.72996C8.87945 6.58244 9.21137 6.58244 9.50641 6.72996L11.0923 7.68885C11.3504 7.83637 11.5348 8.13142 11.5348 8.46334V9.68039L12.9363 8.86902V7.61509C12.9363 7.32005 12.7888 7.025 12.4937 6.8406L9.54329 5.10722C9.28513 4.9597 8.95321 4.9597 8.65816 5.10722L5.63397 6.87748C5.33893 7.025 5.19141 7.32005 5.19141 7.61509V11.0818C5.19141 11.3769 5.33893 11.6719 5.63397 11.8563L8.62128 13.5897C8.87945 13.7372 9.21137 13.7372 9.50641 13.5897L11.5348 12.4095L12.9363 11.5982L14.9647 10.418C15.2229 10.2705 15.5548 10.2705 15.8498 10.418L17.4357 11.34C17.6939 11.4875 17.8783 11.7826 17.8783 12.1145V13.9585C17.8783 14.2536 17.7307 14.5486 17.4357 14.733L15.8867 15.655C15.6286 15.8025 15.2966 15.8025 15.0016 15.655L13.4157 14.733C13.1576 14.5855 12.9732 14.2904 12.9732 13.9585V12.7783L11.5717 13.5897V14.8068C11.5717 15.1018 11.7192 15.3969 12.0143 15.5813L15.0016 17.3146C15.2598 17.4622 15.5917 17.4622 15.8867 17.3146L18.874 15.5813C19.1322 15.4337 19.3166 15.1387 19.3166 14.8068V11.3031C19.3166 11.0081 19.1691 10.713 18.874 10.5286L15.8867 8.79526Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5209_12509">
          <rect
            width="14.1621"
            height="12.3549"
            fill="white"
            transform="translate(5.19141 5.03345)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const IconEthereum = () => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.13 22.8097C18.3872 22.8097 23.4596 17.7372 23.4596 11.4801C23.4596 5.22285 18.3872 0.150391 12.13 0.150391C5.87275 0.150391 0.800293 5.22285 0.800293 11.4801C0.800293 17.7372 5.87275 22.8097 12.13 22.8097Z"
        fill="#627EEA"
      />
      <path
        d="M12.4824 2.98291V9.26379L17.7911 11.6359L12.4824 2.98291Z"
        fill="white"
        fill-opacity="0.602"
      />
      <path
        d="M12.4827 2.98291L7.17334 11.6359L12.4827 9.26379V2.98291Z"
        fill="white"
      />
      <path
        d="M12.4824 15.7059V19.9737L17.7946 12.6243L12.4824 15.7059Z"
        fill="white"
        fill-opacity="0.602"
      />
      <path
        d="M12.4827 19.9737V15.7052L7.17334 12.6243L12.4827 19.9737Z"
        fill="white"
      />
      <path
        d="M12.4824 14.7182L17.7911 11.6359L12.4824 9.26514V14.7182Z"
        fill="white"
        fill-opacity="0.2"
      />
      <path
        d="M7.17334 11.6359L12.4827 14.7182V9.26514L7.17334 11.6359Z"
        fill="white"
        fill-opacity="0.602"
      />
    </svg>
  );
};

const IconBNBChain = () => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.13 0.17041C18.3876 0.17041 23.4596 5.24243 23.4596 11.5001C23.4596 17.7577 18.3876 22.8297 12.13 22.8297C5.87231 22.8297 0.800293 17.7577 0.800293 11.5001C0.800293 5.24243 5.87231 0.17041 12.13 0.17041Z"
        fill="#F0B90B"
      />
      <path
        d="M7.02691 11.5L7.03508 14.4958L9.58062 15.9937V17.7476L5.54534 15.3809V10.6239L7.02691 11.5ZM7.02691 8.50416V10.2499L5.54443 9.37295V7.6272L7.02691 6.75024L8.51665 7.6272L7.02691 8.50416ZM10.6437 7.6272L12.1262 6.75024L13.6159 7.6272L12.1262 8.50416L10.6437 7.6272Z"
        fill="white"
      />
      <path
        d="M8.09863 13.8749V12.1209L9.58111 12.9979V14.7436L8.09863 13.8749ZM10.6442 16.6219L12.1267 17.4989L13.6164 16.6219V18.3677L12.1267 19.2446L10.6442 18.3677V16.6219ZM15.7425 7.6272L17.225 6.75024L18.7147 7.6272V9.37295L17.225 10.2499V8.50416L15.7425 7.6272ZM17.225 14.4958L17.2332 11.5L18.7156 10.623V15.38L14.6804 17.7467V15.9928L17.225 14.4958Z"
        fill="white"
      />
      <path
        d="M16.1617 13.875L14.6792 14.7438V12.9981L16.1617 12.1211V13.875Z"
        fill="white"
      />
      <path
        d="M16.1619 9.12516L16.1701 10.8791L13.6173 12.377V15.3801L12.1348 16.2489L10.6523 15.3801V12.377L8.09954 10.8791V9.12516L9.58837 8.2482L12.1257 9.75337L14.6785 8.2482L16.1683 9.12516H16.1619ZM8.09863 6.13024L12.1267 3.75537L16.1619 6.13024L14.6795 7.0072L12.1267 5.50203L9.58111 7.0072L8.09863 6.13024Z"
        fill="white"
      />
    </svg>
  );
};

const IconOptimism = () => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5001 22.8297C17.7573 22.8297 22.8297 17.7573 22.8297 11.5001C22.8297 5.24287 17.7573 0.17041 11.5001 0.17041C5.24287 0.17041 0.17041 5.24287 0.17041 11.5001C0.17041 17.7573 5.24287 22.8297 11.5001 22.8297Z"
        fill="#FF0420"
      />
      <path
        d="M8.19658 14.5093C7.52133 14.5093 6.96845 14.3507 6.53792 14.0334C6.11192 13.7117 5.89893 13.2494 5.89893 12.6557C5.89893 12.5288 5.91252 12.3793 5.93971 12.198C6.01222 11.7901 6.11646 11.3007 6.25241 10.7252C6.63762 9.1662 7.63463 8.38672 9.23891 8.38672C9.67397 8.38672 10.0682 8.45923 10.4127 8.60878C10.7571 8.74927 11.029 8.9668 11.2284 9.25684C11.4278 9.54234 11.5275 9.88223 11.5275 10.2765C11.5275 10.3943 11.5139 10.5439 11.4867 10.7252C11.4006 11.2282 11.3009 11.7222 11.1785 12.198C10.9791 12.973 10.6393 13.5576 10.1498 13.9428C9.6649 14.3235 9.01232 14.5093 8.19658 14.5093ZM8.31894 13.2857C8.63617 13.2857 8.90355 13.1905 9.12561 13.0047C9.35221 12.8189 9.51535 12.5334 9.61052 12.1436C9.74195 11.6089 9.84165 11.1466 9.90963 10.7478C9.93228 10.63 9.94588 10.5076 9.94588 10.3807C9.94588 9.86411 9.6785 9.60579 9.13921 9.60579C8.82198 9.60579 8.55007 9.70096 8.32347 9.88677C8.10141 10.0726 7.9428 10.3581 7.84763 10.7478C7.74339 11.1285 7.64369 11.5907 7.53946 12.1436C7.5168 12.2569 7.50321 12.3748 7.50321 12.5017C7.49867 13.0273 7.77512 13.2857 8.31894 13.2857Z"
        fill="white"
      />
      <path
        d="M11.9212 14.4278C11.8578 14.4278 11.8125 14.4096 11.7762 14.3689C11.749 14.3235 11.7399 14.2737 11.749 14.2148L12.9228 8.6859C12.9318 8.62245 12.9635 8.5726 13.0179 8.53181C13.0678 8.49103 13.1222 8.4729 13.1811 8.4729H15.4425C16.0724 8.4729 16.5754 8.60432 16.9561 8.86264C17.3413 9.12549 17.5362 9.50163 17.5362 9.99561C17.5362 10.1361 17.5181 10.2856 17.4863 10.4397C17.3459 11.0923 17.0603 11.5727 16.6253 11.8854C16.1993 12.1981 15.6147 12.3522 14.8715 12.3522H13.7249L13.3352 14.2148C13.3216 14.2782 13.2944 14.3281 13.24 14.3689C13.1901 14.4096 13.1358 14.4278 13.0768 14.4278H11.9212ZM14.9304 11.1784C15.1706 11.1784 15.3745 11.115 15.5512 10.9836C15.7325 10.8521 15.8503 10.6663 15.9093 10.4216C15.9274 10.3264 15.9364 10.2403 15.9364 10.1678C15.9364 10.0047 15.8866 9.87778 15.7914 9.79167C15.6963 9.70104 15.5286 9.65572 15.2975 9.65572H14.2778L13.956 11.1784H14.9304Z"
        fill="white"
      />
    </svg>
  );
};

const IconAvalance = () => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.3817 4.89111H5.39111V17.6068H19.3817V4.89111Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.3225 11.4999C23.3225 17.7488 18.2534 22.8145 12.0003 22.8145C5.74731 22.8145 0.678223 17.7488 0.678223 11.4999C0.678223 5.25102 5.74731 0.185303 12.0003 0.185303C18.2534 0.185303 23.3225 5.25102 23.3225 11.4999ZM8.79198 16.0025H6.59467C6.13295 16.0025 5.90488 16.0025 5.76582 15.9136C5.61562 15.8163 5.52383 15.6551 5.51271 15.4772C5.50436 15.3133 5.61841 15.1131 5.84648 14.7128L11.2719 5.15612C11.5028 4.7503 11.6196 4.54739 11.767 4.47234C11.9255 4.39174 12.1147 4.39174 12.2732 4.47234C12.4206 4.54739 12.5374 4.7503 12.7683 5.15612L13.8836 7.1018L13.8893 7.11173C14.1387 7.5471 14.2651 7.76787 14.3203 7.99959C14.3815 8.25253 14.3815 8.51937 14.3203 8.77231C14.2647 9.00579 14.1395 9.22816 13.8864 9.67011L11.0366 14.7045L11.0292 14.7174C10.7782 15.1563 10.651 15.3788 10.4747 15.5466C10.2828 15.7301 10.052 15.8635 9.79885 15.9387C9.56799 16.0025 9.30933 16.0025 8.79198 16.0025ZM14.3409 16.0025H17.4894C17.9539 16.0025 18.1876 16.0025 18.3267 15.9109C18.4769 15.8136 18.5714 15.6495 18.5798 15.4718C18.5878 15.3131 18.4763 15.1207 18.2577 14.7437C18.2501 14.7309 18.2426 14.7178 18.2349 14.7045L16.6578 12.0084L16.6398 11.978C16.4182 11.6035 16.3064 11.4144 16.1627 11.3413C16.0042 11.2607 15.8178 11.2607 15.6593 11.3413C15.5146 11.4163 15.3978 11.6137 15.167 12.0111L13.5955 14.7073L13.5901 14.7166C13.3601 15.1134 13.2451 15.3118 13.2534 15.4745C13.2645 15.6524 13.3563 15.8163 13.5065 15.9136C13.6428 16.0025 13.8764 16.0025 14.3409 16.0025Z"
        fill="#E84142"
      />
    </svg>
  );
};

const IconArbitrum = () => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5001 0.17041C17.7577 0.17041 22.8297 5.24243 22.8297 11.5001C22.8297 17.7577 17.7577 22.8297 11.5001 22.8297C5.24243 22.8297 0.17041 17.7577 0.17041 11.5001C0.17041 5.24243 5.24243 0.17041 11.5001 0.17041Z"
        fill="#213147"
      />
      <path
        d="M5.31201 8.53929V14.4609C5.31201 14.8416 5.51141 15.186 5.84375 15.3794L10.9738 18.3402C11.3001 18.5275 11.705 18.5275 12.0313 18.3402L17.1613 15.3794C17.4876 15.1921 17.6931 14.8416 17.6931 14.4609V8.53929C17.6931 8.15862 17.4937 7.8142 17.1613 7.62084L12.0313 4.66002C11.705 4.4727 11.3001 4.4727 10.9738 4.66002L5.84375 7.62084C5.51746 7.80815 5.31805 8.15862 5.31805 8.53929H5.31201Z"
        fill="#213147"
      />
      <path
        d="M12.6173 12.6482L11.8862 14.6543C11.868 14.7087 11.868 14.7691 11.8862 14.8296L13.143 18.2798L14.5992 17.4399L12.853 12.6482C12.8107 12.5395 12.6596 12.5395 12.6173 12.6482Z"
        fill="#12AAFF"
      />
      <path
        d="M14.0859 9.2764C14.0436 9.16763 13.8925 9.16763 13.8502 9.2764L13.1191 11.2825C13.1009 11.3369 13.1009 11.3973 13.1191 11.4577L15.1796 17.1075L16.6358 16.2676L14.0859 9.28244V9.2764Z"
        fill="#12AAFF"
      />
      <path
        d="M11.4998 4.88361C11.536 4.88361 11.5723 4.89569 11.6025 4.91382L17.1495 8.11634C17.216 8.15259 17.2522 8.2251 17.2522 8.29761V14.7026C17.2522 14.7752 17.2099 14.8477 17.1495 14.8839L11.6025 18.0864C11.5723 18.1046 11.536 18.1167 11.4998 18.1167C11.4635 18.1167 11.4273 18.1046 11.397 18.0864L5.85004 14.8839C5.78357 14.8477 5.74732 14.7752 5.74732 14.7026V8.29157C5.74732 8.21906 5.78961 8.14655 5.85004 8.11029L11.397 4.90778C11.4273 4.88965 11.4635 4.87756 11.4998 4.87756V4.88361ZM11.4998 3.94702C11.3004 3.94702 11.107 3.99536 10.9257 4.09808L5.37872 7.3006C5.02222 7.50605 4.80469 7.88068 4.80469 8.29157V14.6966C4.80469 15.1075 5.02222 15.4821 5.37872 15.6876L10.9257 18.8901C11.101 18.9928 11.3004 19.0412 11.4998 19.0412C11.6992 19.0412 11.8925 18.9928 12.0738 18.8901L17.6208 15.6876C17.9773 15.4821 18.1948 15.1075 18.1948 14.6966V8.29157C18.1948 7.88068 17.9773 7.50605 17.6208 7.3006L12.0678 4.09808C11.8925 3.99536 11.6931 3.94702 11.4937 3.94702H11.4998Z"
        fill="#9DCCED"
      />
      <path
        d="M7.82568 17.1135L8.33929 15.7117L9.36652 16.5637L8.40576 17.4459L7.82568 17.1135Z"
        fill="#213147"
      />
      <path
        d="M11.0284 7.83832H9.62049C9.51776 7.83832 9.42108 7.90479 9.38483 8.00146L6.36963 16.2676L7.82587 17.1075L11.1492 8.00146C11.1794 7.91687 11.119 7.83228 11.0344 7.83228L11.0284 7.83832Z"
        fill="white"
      />
      <path
        d="M13.4935 7.83832H12.0856C11.9829 7.83832 11.8862 7.90479 11.85 8.00146L8.40576 17.4398L9.862 18.2797L13.6083 8.00146C13.6386 7.91687 13.5781 7.83228 13.4935 7.83228V7.83832Z"
        fill="white"
      />
    </svg>
  );
};
const IconTRON = () => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5001 22.8297C17.7596 22.8297 22.8297 17.7561 22.8297 11.5001C22.8297 5.24407 17.7596 0.17041 11.5001 0.17041C5.24054 0.17041 0.17041 5.24407 0.17041 11.5001C0.17041 17.7561 5.24488 22.8297 11.5001 22.8297Z"
        fill="#FF060A"
      />
      <path
        d="M17.8724 9.46604C17.2473 8.88619 16.3792 8.00284 15.676 7.37769L15.6325 7.35051C15.5631 7.29615 15.485 7.25085 15.4025 7.21914C13.7009 6.90203 5.78312 5.42071 5.63119 5.43883C5.58778 5.44336 5.54437 5.46148 5.50964 5.48413L5.47058 5.51584C5.42283 5.56567 5.38376 5.62456 5.36206 5.69251L5.35337 5.71969V5.89183C6.24325 8.3743 9.76369 16.5012 10.4582 18.4129C10.5016 18.5443 10.5798 18.7889 10.7274 18.8025H10.7621C10.8402 18.8025 11.1788 18.354 11.1788 18.354C11.1788 18.354 17.2256 11.0244 17.8377 10.2452C17.9158 10.1501 17.9853 10.0459 18.0461 9.93717C18.0634 9.8511 18.0547 9.76502 18.0244 9.68348C17.994 9.60194 17.9375 9.52493 17.8724 9.46604ZM12.7242 10.3222L15.3026 8.18404L16.8176 9.57929L12.7242 10.3222ZM11.7214 10.1818L7.28072 6.53963L14.4692 7.86693L11.7214 10.1818ZM12.1208 11.1331L16.6657 10.3992L11.4697 16.6643L12.1208 11.1331ZM6.67734 6.90656L11.3524 10.8704L10.6753 16.6688L6.67734 6.90656Z"
        fill="white"
      />
    </svg>
  );
};
const IconTON = () => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_6849_22608)">
        <path
          d="M11.63 22.8297C17.8871 22.8297 22.9596 17.7573 22.9596 11.5001C22.9596 5.24287 17.8871 0.17041 11.63 0.17041C5.37275 0.17041 0.300293 5.24287 0.300293 11.5001C0.300293 17.7573 5.37275 22.8297 11.63 22.8297Z"
          fill="#0088CC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.47354 7.65601H14.8262C15.069 7.65601 15.2713 7.69647 15.5141 7.81786C15.7974 7.93925 15.9592 8.14156 16.0401 8.30342C16.0401 8.30342 16.0401 8.34388 16.0806 8.34388C16.202 8.54619 16.2829 8.78897 16.2829 9.07221C16.2829 9.31499 16.2425 9.55777 16.0806 9.80055L12.0748 16.6793C11.9938 16.8411 11.832 16.922 11.6297 16.922C11.4678 16.922 11.306 16.8411 11.1846 16.6793L7.25965 9.80055C7.17873 9.6387 7.01687 9.43638 7.01687 9.11268C6.97641 8.82943 7.05734 8.58666 7.17873 8.34388C7.30011 8.1011 7.50243 7.89878 7.78567 7.81786C8.02845 7.65601 8.31169 7.65601 8.47354 7.65601ZM11.1441 8.62712H8.47354C8.31169 8.62712 8.23077 8.62712 8.1903 8.66758C8.10938 8.70805 8.06891 8.74851 8.02845 8.82943C7.98799 8.8699 7.98799 8.95082 7.98799 9.03175C7.98799 9.07221 8.02845 9.11268 8.10938 9.27453L11.1441 14.5347V8.62712ZM12.1152 8.62712V14.5752L15.1904 9.27453C15.2309 9.1936 15.2309 9.11268 15.2309 9.03175C15.2309 8.95082 15.2309 8.8699 15.1904 8.82943C15.1499 8.78897 15.1499 8.74851 15.1095 8.74851L15.069 8.70805C14.9881 8.66758 14.9072 8.66758 14.7858 8.66758H12.1152V8.62712Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_6849_22608">
          <rect
            width="22.6593"
            height="22.6593"
            fill="white"
            transform="translate(0.300293 0.17041)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const IconSort: FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_5673_74988)">
        <path
          d="M2.25 13.5H6.75V12H2.25V13.5ZM2.25 4.5V6H15.75V4.5H2.25ZM2.25 9.75H11.25V8.25H2.25V9.75Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_5673_74988">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const IconGuarantee: FC<IconProps> = ({ className="#009962", ...props }) => {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M5.95534 15.2673C5.49287 15.2673 5.05141 15.0781 4.73609 14.7417C4.48383 14.4685 4.31566 14.1111 4.27362 13.7327C4.12646 13.7748 3.95829 13.7958 3.79012 13.7958C3.22254 13.7958 2.697 13.5015 2.38167 13.018C2.33963 12.9549 2.29759 12.8708 2.25554 12.7867L0.0482777 17.4115C-0.119895 17.7899 0.174407 18.1893 0.573817 18.1472L2.38167 17.9581C2.57087 17.937 2.76006 18.0211 2.86517 18.1893L3.87421 19.7028C4.10544 20.0392 4.60996 19.9971 4.77813 19.6398L7.02744 14.9099C7.02744 14.9099 7.02744 14.8889 7.00642 14.8889C6.71212 15.1412 6.33373 15.2673 5.95534 15.2673Z"
        fill={className}
      />
      <path
        d="M16.9518 17.4112L14.7656 12.8285C14.7235 12.9126 14.6815 12.9756 14.6394 13.0387C14.3241 13.5222 13.7986 13.8165 13.231 13.8165C13.0628 13.8165 12.8947 13.7955 12.7265 13.7324C12.6844 14.1108 12.5373 14.4682 12.264 14.7415C11.9487 15.0778 11.5072 15.267 11.0448 15.267C10.6453 15.267 10.288 15.1409 9.99368 14.8886L9.97266 14.9096L12.222 19.6395C12.3901 20.0179 12.9157 20.0389 13.1259 19.7025L14.1139 18.189C14.219 18.0208 14.4082 17.9367 14.6184 17.9578L16.4263 18.147C16.8257 18.21 17.12 17.7896 16.9518 17.4112Z"
        fill={className}
      />
      <path
        d="M10.4922 14.1107C10.9757 14.6363 11.8376 14.2789 11.8166 13.5642V13.5432C11.7955 12.9756 12.3841 12.5972 12.8887 12.8284H12.9097C13.5614 13.1227 14.213 12.4711 13.9187 11.8194C13.6875 11.3149 14.0659 10.7263 14.6335 10.7473H14.6545C15.3482 10.7683 15.7056 9.90642 15.201 9.42292L15.18 9.4019C14.7596 9.02351 14.9067 8.3298 15.4323 8.14061C16.0839 7.88835 16.0839 6.9634 15.4323 6.71114C14.9067 6.52195 14.7596 5.82823 15.18 5.44984L15.201 5.42882C15.7056 4.94533 15.3482 4.08344 14.6545 4.10446H14.6335C14.0659 4.12548 13.6875 3.53688 13.9187 3.03236C14.213 2.40172 13.5403 1.72903 12.9097 2.02333H12.8887C12.3631 2.25456 11.7955 1.87618 11.8166 1.30859V1.28757C11.8376 0.59386 10.9757 0.236493 10.4922 0.741011C10.1138 1.16144 9.42011 1.01429 9.20989 0.488752C8.95763 -0.162917 8.03268 -0.162917 7.78042 0.488752V0.509773C7.57021 1.03531 6.89752 1.16144 6.51913 0.762032C6.03563 0.257514 5.17375 0.614881 5.19477 1.30859V1.32961C5.21579 1.8972 4.62719 2.27559 4.12267 2.04435C3.471 1.75005 2.81933 2.42274 3.11363 3.05338C3.34487 3.5579 2.96648 4.14651 2.3989 4.12549H2.37788C1.68417 4.10446 1.3268 4.96635 1.83132 5.44984L1.85234 5.47087C2.27277 5.84925 2.12562 6.54297 1.60008 6.73216C0.948411 6.98442 0.948411 7.90937 1.60008 8.16163C2.12562 8.35082 2.27277 9.04454 1.85234 9.42292L1.83132 9.44394C1.3268 9.92744 1.68417 10.7893 2.37788 10.7683H2.3989C2.96648 10.7473 3.34487 11.3359 3.11363 11.8404C2.81933 12.4921 3.49202 13.1437 4.12267 12.8494C4.64821 12.6182 5.21579 12.9966 5.19477 13.5642V13.5852C5.17375 14.2789 6.03563 14.6363 6.51913 14.1318C6.89752 13.7113 7.59123 13.8585 7.78042 14.384V14.405C8.03268 15.0567 8.95763 15.0567 9.20989 14.405C9.42011 13.8375 10.0928 13.6903 10.4922 14.1107ZM8.49516 12.1347C5.88848 12.1347 3.78632 10.0115 3.78632 7.42587C3.78632 4.84022 5.88848 2.71704 8.49516 2.71704C11.1018 2.71704 13.204 4.84022 13.204 7.42587C13.204 10.0115 11.1018 12.1347 8.49516 12.1347Z"
        fill={className}
      />
      <path
        d="M8.49873 3.64209C6.41759 3.64209 4.71484 5.34484 4.71484 7.42597C4.71484 9.50711 6.41759 11.2099 8.49873 11.2099C10.5799 11.2099 12.2826 9.50711 12.2826 7.42597C12.2826 5.34484 10.5799 3.64209 8.49873 3.64209ZM10.3696 6.69022L8.41464 8.79238C8.33055 8.87646 8.20443 8.93953 8.0783 8.93953C7.95217 8.93953 7.82604 8.87646 7.74195 8.79238L6.64883 7.59415C6.48066 7.40495 6.48066 7.11065 6.66985 6.94248C6.85904 6.7743 7.15335 6.77431 7.32152 6.9635L8.0783 7.78334L9.69696 6.03855C9.86513 5.84936 10.1594 5.84936 10.3486 6.01753C10.5168 6.20672 10.5378 6.50102 10.3696 6.69022Z"
        fill={className}
      />
    </svg>
  );
};

const IconSwimingPool = () => {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2306 0.710571C15.1234 0.710571 14.2227 1.61126 14.2227 2.71854C14.2227 3.82579 15.1233 4.72651 16.2306 4.72651C17.3379 4.72651 18.2386 3.82582 18.2386 2.71854C18.2386 1.61126 17.3379 0.710571 16.2306 0.710571Z" fill="#3C3C48"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3168 11.913L8.49609 14.0977H11.3754C11.6318 14.0977 11.884 14.072 12.1319 14.0304L10.3168 11.913Z" fill="#3C3C48"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3885 9.07727H11.8516L14.8001 12.5175C15.5038 11.6991 15.8906 10.6698 15.8905 9.57927C15.8905 9.30196 15.6656 9.07727 15.3885 9.07727Z" fill="#3C3C48"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.72485 1.22061C3.5446 1.00999 3.22727 0.985788 3.01713 1.16619C2.80666 1.34659 2.78216 1.66344 2.96271 1.87391L3.84575 2.90419V9.57911C3.84575 10.9652 4.47442 12.2061 5.46011 13.0355L9.14391 8.61498C9.29785 8.43049 9.49238 8.29248 9.70709 8.2L3.72485 1.22061Z" fill="#3C3C48"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.695 15.1015H17.3995C17.6768 15.1015 17.9015 15.3262 17.9015 15.6034C17.9015 15.8808 17.6768 16.1054 17.3995 16.1054H3.3438C3.06649 16.1054 2.8418 15.8808 2.8418 15.6034C2.8418 15.3262 3.06649 15.1015 3.3438 15.1015H5.0459L9.91523 9.25829C10.121 9.01135 10.4886 9.02696 10.6819 9.25291L15.695 15.1015ZM6.35132 15.1021L6.3513 15.1021V15.1021H6.35132ZM6.35132 15.1021H14.3713L10.3047 10.3579L6.35132 15.1021Z" fill="#3C3C48"/>
</svg>

  );
};

const IconKidsFriendly = () => {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.48603 10.403C4.48603 10.0887 4.51676 9.78018 4.57536 9.479C3.77212 9.61829 3.16797 10.1963 3.16797 10.8864C3.16797 11.5569 3.73832 12.1218 4.50756 12.281C4.49354 12.1583 4.48603 12.034 4.48603 11.9084V10.403Z" fill="#3C3C48"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4258 9.479C14.4844 9.78018 14.5151 10.0887 14.5151 10.403V11.9083C14.5151 12.0335 14.5078 12.1578 14.4937 12.281C15.2629 12.1217 15.8332 11.5569 15.8332 10.8863C15.8332 10.1963 15.229 9.61826 14.4258 9.479Z" fill="#3C3C48"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4201 5.2372C12.1421 5.45885 11.8077 5.61299 11.4418 5.67488C13.3161 6.43766 14.6399 8.26945 14.6399 10.403V11.9083C14.6399 12.9521 12.0459 15.1972 11.1877 15.2056C10.7279 15.6105 10.1349 15.8334 9.51787 15.8334C8.9009 15.8334 8.30795 15.6105 7.84824 15.2056C6.95851 15.2056 4.35938 12.9521 4.35938 11.9083V10.403C4.35938 7.72458 6.44547 5.52131 9.08815 5.31233C9.08793 5.30684 9.27594 5.28916 9.50365 5.28916L9.84269 5.26151C10.1579 5.26151 10.5873 4.92557 10.7641 4.68871C10.9409 4.45185 11.1571 3.98549 11.1571 3.5764C11.1571 3.35016 11.3417 3.16675 11.5694 3.16675C11.7971 3.16675 11.9817 3.35016 11.9817 3.5764C11.9817 4.02159 11.8433 4.43512 11.6072 4.77721C12.0731 4.57495 12.3996 4.11297 12.3996 3.5764C12.3996 3.35016 12.5842 3.16675 12.812 3.16675C13.0397 3.16675 13.2243 3.35016 13.2243 3.5764C13.2243 4.24747 12.9099 4.84666 12.4201 5.2372ZM7.6723 9.96567C7.28369 9.96567 6.96861 10.2787 6.96861 10.6649C6.96861 11.051 7.28369 11.364 7.6723 11.364C8.06092 11.364 8.376 11.051 8.376 10.6649C8.376 10.2787 8.06092 9.96567 7.6723 9.96567ZM10.7437 13.368L10.5759 13.4953C10.273 13.7251 9.89622 13.8516 9.51507 13.8516C9.13392 13.8516 8.75717 13.7251 8.45422 13.4953L8.28642 13.368C8.18472 13.2909 8.16521 13.1464 8.24286 13.0454C8.32051 12.9443 8.4659 12.9249 8.56761 13.0021L8.73542 13.1294C8.95807 13.2982 9.23494 13.3912 9.51507 13.3912C9.79521 13.3912 10.0721 13.2982 10.2947 13.1294L10.4625 13.0021C10.5643 12.925 10.7097 12.9443 10.7873 13.0454C10.865 13.1464 10.8454 13.2909 10.7437 13.368ZM10.6246 10.6649C10.6246 11.051 10.9397 11.364 11.3283 11.364C11.717 11.364 12.0321 11.051 12.032 10.6649C12.032 10.2787 11.7169 9.96567 11.3283 9.96567C10.9397 9.96567 10.6246 10.2787 10.6246 10.6649Z" fill="#3C3C48"/>
    </svg>
    

  );
};

const IconCocktail = () => {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5315 1H18.3552C17.6933 1 17.0711 1.25781 16.6036 1.72563C16.2202 2.10876 15.7083 2.62064 15.2539 3.07502H16.5799C16.8261 2.82877 17.0642 2.59064 17.2664 2.38845C17.5571 2.09751 17.9436 1.93751 18.3552 1.93751H19.5315C19.7902 1.93751 20.0002 1.72751 20.0002 1.46875C20.0002 1.21 19.7902 1 19.5315 1Z" fill="#3C3C48"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.17782 3.94323C5.39626 3.41573 5.90627 3.0751 6.47721 3.0751H8.51629C8.06973 2.4279 7.32284 2.00415 6.47721 2.00415C5.10907 2.00415 4 3.11322 4 4.48136C4 5.8495 5.10907 6.95858 6.47721 6.95858C6.63003 6.95858 6.77971 6.94483 6.92503 6.91795L5.48283 5.47575C5.07907 5.07199 4.95938 4.47043 5.17782 3.94323Z" fill="#3C3C48"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2126 16.112C13.1339 15.5727 12.4635 14.4883 12.4635 13.2817V11.3723C12.3095 11.3976 12.1529 11.4104 11.9948 11.4104C11.8367 11.4104 11.6801 11.3976 11.526 11.3723V13.2817C11.526 14.4883 10.8557 15.5727 9.77694 16.112C9.58226 16.2092 9.48038 16.4277 9.53007 16.6392C9.58007 16.8508 9.76913 17.0002 9.98632 17.0002H14.0032C14.2204 17.0002 14.4095 16.8508 14.4595 16.6392C14.5092 16.4277 14.4073 16.2092 14.2126 16.112Z" fill="#3C3C48"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5244 4.01245H6.47851C6.28892 4.01245 6.11798 4.12664 6.04545 4.30183C5.97292 4.47702 6.01301 4.67861 6.14707 4.81268L7.35521 6.02081H16.6478L17.8559 4.81268C17.99 4.67861 18.0301 4.47702 17.9575 4.30183C17.885 4.12664 17.714 4.01245 17.5244 4.01245Z" fill="#3C3C48"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0353 8.70203C10.1381 9.69523 10.9799 10.4724 11.9998 10.4724C13.0197 10.4724 13.8615 9.69523 13.9643 8.70203L15.7086 6.95776H8.29102L10.0353 8.70203Z" fill="#3C3C48"/>
</svg>


  );
};

export {
  IconCheckedCircle,
  IconDollor,
  IconWhiteDollor,
  IconUstd,
  IconPolygon,
  IconEthereum,
  IconBNBChain,
  IconOptimism,
  IconAvalance,
  IconArbitrum,
  IconTRON,
  IconTON,
  IconSort,
  IconGuarantee,
  IconSwimingPool,
  IconKidsFriendly,
  IconCocktail
};
