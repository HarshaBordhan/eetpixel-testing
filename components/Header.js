import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-[1rem] left-0 right-0 z-[100] mx-auto my-0 max-w-[1440px]">
      <div className="nav flex flex-row justify-between items-center w-full py-0 px-8">
        <div className="logo">
          {/* <div className="flex justify-center items-center w-12 h-12 bg-[#1a1c23] rounded-full"> */}
          <Link className="cursor-pointer" href="#section-1">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#1A1C23" />
              <circle cx="24" cy="24" r="19.2" fill="#1A1C23" />
              <circle
                cx="24"
                cy="24"
                r="18.7"
                stroke="white"
                strokeOpacity="0.08"
              />
              <path
                d="M35.633 23.7459C35.633 23.7174 35.633 23.6913 35.633 23.6653C35.633 23.5017 35.6188 23.3405 35.6117 23.1912C35.6046 23.0419 35.588 22.8949 35.569 22.7479C35.55 22.601 35.5382 22.4919 35.5192 22.3639C35.3837 21.4917 35.145 20.6388 34.8081 19.8229C34.7583 19.7044 34.7038 19.5859 34.6517 19.4674C34.4952 19.1284 34.3198 18.7989 34.1302 18.4766L33.9643 18.204C33.777 17.9124 33.5779 17.6232 33.3622 17.3506C33.1963 17.1373 33.0185 16.9287 32.8312 16.7249C32.3711 16.2146 31.864 15.7487 31.3166 15.3335L31.0393 15.1344C30.9468 15.068 30.852 15.004 30.7548 14.94L30.4656 14.7575C30.2689 14.6389 30.0674 14.5204 29.8659 14.4185C29.7711 14.3687 29.6787 14.3237 29.5839 14.2787C29.5604 14.2642 29.5358 14.2515 29.5104 14.2407C29.4322 14.2052 29.3563 14.1672 29.2733 14.1364C29.1904 14.1056 29.0553 14.0345 28.9462 13.9918L28.8799 13.9658C28.6736 13.8852 28.465 13.8046 28.2517 13.7287C28.1403 13.6908 28.0147 13.6529 27.908 13.6197C27.8834 13.6104 27.858 13.6033 27.8322 13.5984C27.716 13.5628 27.5951 13.532 27.479 13.5012L27.3154 13.4633C26.5213 13.2844 25.7094 13.1961 24.8953 13.2001H24.6203C24.5158 13.6534 24.4617 14.1169 24.4591 14.5821V14.6224C24.4591 14.7717 24.4591 14.9187 24.4781 15.068C24.477 15.0706 24.4764 15.0734 24.4764 15.0763C24.4764 15.0791 24.477 15.082 24.4781 15.0846C24.4781 15.1509 24.4781 15.2197 24.4947 15.2837C24.5113 15.3477 24.5113 15.4449 24.5255 15.5207C24.5536 15.7321 24.5932 15.9418 24.644 16.1489C24.6654 16.2532 24.6938 16.3503 24.7223 16.4499C25.0755 17.6493 25.7689 18.7207 26.7183 19.5343C27.6678 20.3479 28.8327 20.8688 30.0721 21.0342C29.7054 21.101 29.3333 21.1344 28.9605 21.1337C28.0474 21.133 27.1454 20.9332 26.3175 20.5482C26.2488 20.5174 26.1848 20.4842 26.1184 20.4511C26.0551 20.4228 25.9934 20.3911 25.9335 20.3562C25.3878 20.0676 24.8904 19.6957 24.4591 19.254C24.3214 19.1161 24.1917 18.9705 24.0704 18.8179C23.9761 18.71 23.889 18.596 23.8097 18.4766C23.3885 17.8957 23.0717 17.246 22.8734 16.5566C22.8497 16.4736 22.826 16.3883 22.8046 16.3029C22.7541 16.1038 22.7138 15.9 22.6838 15.6914H22.634L22.5344 15.7103C20.7516 16.0586 19.0765 16.8239 17.6461 17.9437C16.2157 19.0635 15.0706 20.5059 14.3046 22.153C13.5744 23.7124 13.1973 25.4136 13.2 27.1355V32.4H16.0041C16.0041 32.3455 16.0041 32.2886 16.0041 32.2341V32.2128C16.0017 32.1788 16.0017 32.1448 16.0041 32.1108C16.006 32.0315 16.0123 31.9524 16.0231 31.8738V31.7885C16.0681 31.4936 16.1601 31.2079 16.2956 30.9422C16.5432 30.4445 16.9335 30.0318 17.4168 29.7571C17.4298 29.749 17.4432 29.7419 17.4571 29.7357L17.533 29.6954L17.5685 29.6788C17.9436 29.4959 18.3554 29.4011 18.7727 29.4015C19.2605 29.3974 19.7407 29.5222 20.1648 29.7632C20.5889 30.0042 20.9419 30.3528 21.1881 30.774C21.2023 30.8024 21.2189 30.8285 21.2307 30.8522C21.2448 30.8713 21.2568 30.892 21.2663 30.9138C21.2663 30.9138 21.2829 30.9494 21.2924 30.9659C21.3018 30.9825 21.3279 31.0489 21.3469 31.0892C21.3669 31.1304 21.3836 31.1733 21.3967 31.2172C21.4152 31.261 21.4303 31.3062 21.4417 31.3523C21.4417 31.395 21.4654 31.44 21.4796 31.4874C21.4938 31.5348 21.5152 31.6486 21.5294 31.7245L21.5436 31.8311C21.5599 31.9489 21.5678 32.0678 21.5673 32.1867V32.4H24.4591V32.2412C24.4619 31.7994 24.5016 31.3585 24.5777 30.9233C24.5919 30.8379 24.6061 30.7502 24.6227 30.6625C24.6393 30.5748 24.6559 30.4966 24.6725 30.4255C24.6703 30.4138 24.6703 30.4017 24.6725 30.39C24.6867 30.3117 24.7057 30.2382 24.727 30.1529C24.7649 30.0036 24.81 29.8519 24.8597 29.7049C24.8699 29.6693 24.8826 29.6344 24.8977 29.6006C24.9664 29.3968 25.0399 29.1929 25.1347 28.9962C25.2295 28.7994 25.2888 28.6074 25.3931 28.4083C25.4974 28.2092 25.5969 28.0386 25.706 27.8584C25.815 27.6783 25.943 27.4981 26.0662 27.3298C26.1255 27.2492 26.1871 27.1639 26.2535 27.0928C26.3199 27.0122 26.3862 26.9316 26.455 26.8558L26.6185 26.6685C26.6825 26.5998 26.7442 26.531 26.8105 26.4646L26.9338 26.3414C26.9788 26.2964 27.0215 26.2561 27.0665 26.2158C27.1542 26.1352 27.2419 26.0522 27.332 25.9787C27.5122 25.8247 27.6994 25.6729 27.8962 25.5331L28.1925 25.3292C28.356 25.225 28.5219 25.1254 28.6902 25.0282L28.9154 24.905C29.0553 24.8315 29.1999 24.7627 29.3444 24.6964C29.489 24.63 29.6028 24.585 29.7332 24.5352C30.6794 24.1728 31.683 23.9833 32.6961 23.9758H32.7364C32.8241 23.9758 32.9142 23.9758 33.0019 23.9758C33.0277 24.2325 33.0404 24.4905 33.0398 24.7485C33.0399 25.9007 32.8065 27.041 32.3539 28.1006C31.9013 29.1602 31.2388 30.1172 30.4064 30.9138H33.0635C34.3478 29.4125 35.1926 27.5858 35.505 25.635C35.524 25.5189 35.5406 25.398 35.5548 25.2818C35.5737 25.1135 35.5927 24.9405 35.6046 24.7698C35.6046 24.7035 35.6046 24.6418 35.6046 24.5755C35.607 24.54 35.607 24.5043 35.6046 24.4688V24.4546C35.6046 24.2863 35.6164 24.1133 35.6164 23.9426C35.6354 23.8667 35.6354 23.8098 35.633 23.7459Z"
                fill="#FFBF00"
              />
            </svg>
          </Link>
          {/* </div> */}
        </div>
        <nav className="nav__links">
          <ul className="flex flex-row justify-between items-center h-12 px-2 py-1 rounded-full bg-[#1a1c23]">
            <li className="nav-items activeNav">
              <Link>Work</Link>
            </li>
            <li className="nav-items">Services</li>
            <li className="nav-items">About</li>
            <li className="nav-items">Contact us</li>
          </ul>
        </nav>
        <div className="w-12"></div>
      </div>
    </header>
  );
}
