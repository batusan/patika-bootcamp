import React from "react";

function MathIcon(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 654 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={props.underlineColor}
        d="M653.998 110.73C655.22 107.496 26.5197 109.575 19.1877 110.73C11.8556 111.885 12.6987 114.727 19.1877 118.123C25.6766 121.518 633.626 113.964 633.626 113.964C633.626 113.964 652.776 113.964 653.998 110.73Z"
      />
      <path
        fill={props.textColor}
        d="M7.626 43.364C7.626 34.508 7.16133 26.4173 6.232 19.092C6.232 17.944 7.02467 17.37 8.61 17.37C10.1953 17.37 12.3 18.9007 14.924 21.962C17.548 24.9687 20.0627 28.276 22.468 31.884C24.8733 35.492 27.2787 38.8267 29.684 41.888C32.144 44.8947 33.8933 46.398 34.932 46.398C35.9707 46.398 37.638 44.8127 39.934 41.642C42.2847 38.4167 44.5807 34.918 46.822 31.146C49.118 27.3193 51.578 23.8207 54.202 20.65C56.8807 17.4247 59.0127 15.812 60.598 15.812C62.238 15.812 63.058 16.2493 63.058 17.124C63.55 23.848 63.796 29.8613 63.796 35.164C63.796 40.4667 63.7687 44.7853 63.714 48.12C63.6593 51.4 63.6047 53.8053 63.55 55.336C63.55 56.812 63.468 60.2287 63.304 65.586C63.14 70.8887 63.058 74.0047 63.058 74.934C62.238 76.082 61.1173 76.656 59.696 76.656C59.0947 76.656 58.5207 76.492 57.974 76.164C57.646 69.44 57.482 61.5133 57.482 52.384C57.482 43.2547 57.564 33.7973 57.728 24.012C56.6347 24.8867 55.0767 26.9367 53.054 30.162C51.086 33.3327 49.1727 36.5033 47.314 39.674C45.4553 42.79 43.3507 45.6327 41 48.202C38.6493 50.7167 36.4627 51.974 34.44 51.974C32.4173 51.974 30.094 50.498 27.47 47.546C24.9007 44.594 22.0307 40.6033 18.86 35.574C15.744 30.49 13.694 27.3193 12.71 26.062C12.9833 30.654 13.12 35.4373 13.12 40.412C13.12 45.332 13.0927 48.776 13.038 50.744C12.9833 59.4907 12.8193 67.4447 12.546 74.606C11.6713 75.754 10.3047 76.328 8.446 76.328C7.954 76.328 7.48933 76.246 7.052 76.082C7.052 76.082 7.24333 65.176 7.626 43.364ZM100.498 52.384L100.088 61.814C100.088 66.57 100.635 69.768 101.728 71.408C102.384 72.5013 103.286 73.048 104.434 73.048C104.762 73.048 105.227 72.966 105.828 72.802C106.976 72.474 107.933 72.638 108.698 73.294C108.315 75.2073 106.402 76.164 102.958 76.164C100.607 76.164 99.0494 75.18 98.284 73.212C97.6827 71.736 97.2454 69.9047 96.972 67.718C96.6987 65.4767 96.48 63.946 96.316 63.126C92.7627 69.9047 89.3187 74.032 85.984 75.508C84.2894 76.2733 82.3214 76.656 80.08 76.656C77.8387 76.656 76.0894 75.59 74.832 73.458C73.6294 71.2713 73.028 68.1007 73.028 63.946C73.028 59.7913 73.7114 55.4453 75.078 50.908C76.4447 46.316 78.44 42.462 81.064 39.346C83.688 36.1753 86.558 34.59 89.674 34.59C94.1567 34.59 97.136 36.4487 98.612 40.166C99.8694 43.3367 100.498 47.4093 100.498 52.384ZM80.408 49.76C79.6427 52.712 79.0687 55.5273 78.686 58.206C78.3034 60.83 78.112 63.1807 78.112 65.258C78.112 67.2807 78.522 69.03 79.342 70.506C80.2167 71.982 81.3374 72.72 82.704 72.72C85.656 72.72 88.4987 69.932 91.232 64.356C93.9654 58.78 95.332 53.5867 95.332 48.776C95.332 45.66 94.512 43.0907 92.872 41.068C91.7787 39.756 90.33 39.1 88.526 39.1C86.7767 39.1 85.164 40.1387 83.688 42.216C82.2667 44.2387 81.1734 46.7533 80.408 49.76ZM111.504 41.642C109.044 41.642 107.377 41.0407 106.502 39.838C106.502 38.9633 106.857 38.28 107.568 37.788C108.333 37.296 109.153 36.9953 110.028 36.886C110.903 36.722 112.324 36.5853 114.292 36.476C114.456 35 114.538 33.114 114.538 30.818C114.593 28.4673 114.647 26.472 114.702 24.832C114.866 20.5133 115.522 17.862 116.67 16.878C117.162 16.4407 117.681 16.222 118.228 16.222C118.829 16.222 119.349 16.2767 119.786 16.386C119.95 20.322 120.032 22.7 120.032 23.52L119.54 35.82C119.649 35.8747 119.95 35.902 120.442 35.902L126.346 35.656C130.61 35.656 132.742 36.312 132.742 37.624C132.742 39.4827 131.977 40.576 130.446 40.904C129.735 41.068 128.888 41.15 127.904 41.15C126.975 41.15 125.745 41.0407 124.214 40.822C122.738 40.5487 121.672 40.412 121.016 40.412C120.36 40.412 119.923 40.4393 119.704 40.494C119.54 42.0793 119.458 43.6647 119.458 45.25C119.458 46.7807 119.485 48.7213 119.54 51.072C119.649 53.368 119.868 56.1287 120.196 59.354C120.579 62.5793 121.371 65.3673 122.574 67.718C123.777 70.014 125.307 71.162 127.166 71.162C128.095 71.162 129.189 70.8067 130.446 70.096C131.703 69.3307 132.66 68.948 133.316 68.948C134.027 68.948 134.628 69.112 135.12 69.44C135.667 69.7133 135.94 70.0413 135.94 70.424C135.94 71.572 134.765 72.6927 132.414 73.786C130.118 74.8247 128.15 75.344 126.51 75.344C120.497 75.344 116.752 69.6587 115.276 58.288C114.839 55.008 114.511 49.3773 114.292 41.396C113.417 41.56 112.488 41.642 111.504 41.642ZM141.303 59.026L142.041 22.29C142.041 19.4473 141.877 17.5067 141.549 16.468C142.533 15.5933 144.036 15.156 146.059 15.156C146.879 21.0053 147.289 28.522 147.289 37.706C147.289 40.4393 147.043 46.7807 146.551 56.73C149.12 42.8993 153.712 35.984 160.327 35.984C162.677 35.984 164.481 37.2413 165.739 39.756C167.051 42.216 167.871 45.2227 168.199 48.776C168.527 52.3293 168.8 55.8827 169.019 59.436C169.565 67.964 171.096 72.228 173.611 72.228C173.665 72.228 174.185 72.064 175.169 71.736C177.355 71.08 178.585 70.916 178.859 71.244C178.859 71.8453 178.011 72.6107 176.317 73.54C174.622 74.4147 173.064 74.852 171.643 74.852C169.237 74.852 167.379 73.622 166.067 71.162C164.809 68.6473 164.017 65.6133 163.689 62.06C163.415 58.5067 163.197 54.9807 163.033 51.482C162.923 47.9287 162.568 44.922 161.967 42.462C161.365 39.9473 160.354 38.69 158.933 38.69C157.183 38.69 155.571 40.6033 154.095 44.43C152.673 48.202 151.553 52.384 150.733 56.976C149.913 61.568 148.901 65.7773 147.699 69.604C146.551 73.376 145.375 75.262 144.173 75.262C142.259 75.262 141.303 69.85 141.303 59.026ZM185.032 59.354C184.922 60.4473 184.868 61.1853 184.868 61.568C184.868 64.848 185.852 67.39 187.82 69.194C189.842 70.998 192.22 71.9 194.954 71.9C197.687 71.9 199.901 71.5173 201.596 70.752C203.345 69.9867 204.602 69.1667 205.368 68.292C207.336 65.832 209.14 64.602 210.78 64.602C211.381 64.602 212.092 64.766 212.912 65.094C212.365 67.7727 210.288 70.2327 206.68 72.474C203.126 74.6607 198.644 75.754 193.232 75.754C189.405 75.754 186.098 74.5513 183.31 72.146C180.576 69.686 179.21 66.3513 179.21 62.142C179.21 57.9327 180.03 53.86 181.67 49.924C183.364 45.9333 185.77 42.544 188.886 39.756C192.056 36.9133 195.254 35.492 198.48 35.492C201.76 35.492 204.384 36.1753 206.352 37.542C208.374 38.854 209.386 40.7947 209.386 43.364C209.386 48.12 207.254 52.056 202.99 55.172C198.78 58.2333 194.298 59.764 189.542 59.764C188.284 59.764 186.781 59.6273 185.032 59.354ZM191.264 56.648C193.833 56.648 196.129 55.828 198.152 54.188C200.174 52.548 201.596 50.826 202.416 49.022C203.29 47.218 203.728 45.578 203.728 44.102C203.728 42.626 203.154 41.3413 202.006 40.248C200.858 39.1 199.518 38.526 197.988 38.526C195.254 38.526 192.712 40.412 190.362 44.184C188.066 47.956 186.426 51.8647 185.442 55.91C187.847 56.402 189.788 56.648 191.264 56.648ZM223.462 40.166C224.063 40.166 224.364 43.774 224.364 50.99C224.364 52.138 224.336 53.9693 224.282 56.484C224.282 58.9987 224.282 60.3107 224.282 60.42C224.828 54.2427 225.375 50.0333 225.922 47.792C226.523 45.5507 227.124 43.6373 227.726 42.052C228.327 40.412 228.983 39.1547 229.694 38.28C231.443 36.0387 233.466 34.918 235.762 34.918C238.659 34.918 240.818 36.3667 242.24 39.264C243.716 42.1613 244.481 46.0153 244.536 50.826C245.902 40.9313 249.51 35.984 255.36 35.984C257.874 35.984 259.651 37.2687 260.69 39.838C261.728 42.4073 262.248 45.4687 262.248 49.022L262.002 61.486C262.002 69.686 263.778 73.786 267.332 73.786L272.006 73.048C272.279 73.048 272.552 73.0753 272.826 73.13C272.279 73.95 271.268 74.606 269.792 75.098C268.316 75.5353 266.867 75.754 265.446 75.754C262.658 75.754 260.553 74.524 259.132 72.064C257.765 69.5493 257.027 66.9253 256.918 64.192C256.808 61.404 256.754 59.026 256.754 57.058L256.918 49.76C256.918 47.3547 256.754 45.0587 256.426 42.872C256.152 40.6853 255.387 39.592 254.13 39.592C252.271 39.592 250.467 43.5007 248.718 51.318C247.023 59.0807 245.984 66.4607 245.602 73.458C244.672 74.442 243.497 74.9613 242.076 75.016C241.638 75.016 241.228 74.934 240.846 74.77C240.354 71.9273 240.08 67.1987 240.026 60.584C240.026 53.9147 239.698 48.612 239.042 44.676C238.386 40.74 236.91 38.772 234.614 38.772C233.083 38.772 231.826 40.4667 230.842 43.856C229.256 49.1587 227.835 57.4133 226.578 68.62C226.25 71.244 226.004 73.13 225.84 74.278C224.692 75.262 223.516 75.754 222.314 75.754L221.084 75.59C220.318 66.4607 219.936 55.1447 219.936 41.642C220.537 40.658 221.712 40.166 223.462 40.166ZM300.293 52.384L299.883 61.814C299.883 66.57 300.43 69.768 301.523 71.408C302.179 72.5013 303.081 73.048 304.229 73.048C304.557 73.048 305.022 72.966 305.623 72.802C306.771 72.474 307.728 72.638 308.493 73.294C308.11 75.2073 306.197 76.164 302.753 76.164C300.402 76.164 298.844 75.18 298.079 73.212C297.478 71.736 297.04 69.9047 296.767 67.718C296.494 65.4767 296.275 63.946 296.111 63.126C292.558 69.9047 289.114 74.032 285.779 75.508C284.084 76.2733 282.116 76.656 279.875 76.656C277.634 76.656 275.884 75.59 274.627 73.458C273.424 71.2713 272.823 68.1007 272.823 63.946C272.823 59.7913 273.506 55.4453 274.873 50.908C276.24 46.316 278.235 42.462 280.859 39.346C283.483 36.1753 286.353 34.59 289.469 34.59C293.952 34.59 296.931 36.4487 298.407 40.166C299.664 43.3367 300.293 47.4093 300.293 52.384ZM280.203 49.76C279.438 52.712 278.864 55.5273 278.481 58.206C278.098 60.83 277.907 63.1807 277.907 65.258C277.907 67.2807 278.317 69.03 279.137 70.506C280.012 71.982 281.132 72.72 282.499 72.72C285.451 72.72 288.294 69.932 291.027 64.356C293.76 58.78 295.127 53.5867 295.127 48.776C295.127 45.66 294.307 43.0907 292.667 41.068C291.574 39.756 290.125 39.1 288.321 39.1C286.572 39.1 284.959 40.1387 283.483 42.216C282.062 44.2387 280.968 46.7533 280.203 49.76ZM311.299 41.642C308.839 41.642 307.172 41.0407 306.297 39.838C306.297 38.9633 306.652 38.28 307.363 37.788C308.128 37.296 308.948 36.9953 309.823 36.886C310.698 36.722 312.119 36.5853 314.087 36.476C314.251 35 314.333 33.114 314.333 30.818C314.388 28.4673 314.442 26.472 314.497 24.832C314.661 20.5133 315.317 17.862 316.465 16.878C316.957 16.4407 317.476 16.222 318.023 16.222C318.624 16.222 319.144 16.2767 319.581 16.386C319.745 20.322 319.827 22.7 319.827 23.52L319.335 35.82C319.444 35.8747 319.745 35.902 320.237 35.902L326.141 35.656C330.405 35.656 332.537 36.312 332.537 37.624C332.537 39.4827 331.772 40.576 330.241 40.904C329.53 41.068 328.683 41.15 327.699 41.15C326.77 41.15 325.54 41.0407 324.009 40.822C322.533 40.5487 321.467 40.412 320.811 40.412C320.155 40.412 319.718 40.4393 319.499 40.494C319.335 42.0793 319.253 43.6647 319.253 45.25C319.253 46.7807 319.28 48.7213 319.335 51.072C319.444 53.368 319.663 56.1287 319.991 59.354C320.374 62.5793 321.166 65.3673 322.369 67.718C323.572 70.014 325.102 71.162 326.961 71.162C327.89 71.162 328.984 70.8067 330.241 70.096C331.498 69.3307 332.455 68.948 333.111 68.948C333.822 68.948 334.423 69.112 334.915 69.44C335.462 69.7133 335.735 70.0413 335.735 70.424C335.735 71.572 334.56 72.6927 332.209 73.786C329.913 74.8247 327.945 75.344 326.305 75.344C320.292 75.344 316.547 69.6587 315.071 58.288C314.634 55.008 314.306 49.3773 314.087 41.396C313.212 41.56 312.283 41.642 311.299 41.642ZM346.428 15.648C346.373 16.9053 346.346 18.2993 346.346 19.83C346.346 21.3607 346.428 22.946 346.592 24.586C345.826 25.4607 344.788 25.898 343.476 25.898C341.836 25.898 341.016 24.586 341.016 21.962C341.016 21.8527 341.016 21.4427 341.016 20.732C341.016 20.0213 341.016 19.3927 341.016 18.846C341.07 18.2447 341.18 17.5613 341.344 16.796C341.726 15.484 342.574 14.828 343.886 14.828C345.198 14.828 346.045 15.1013 346.428 15.648ZM341.18 55.828C341.18 45.1133 341.726 38.936 342.82 37.296C343.202 36.6947 343.667 36.394 344.214 36.394C344.76 36.394 345.662 36.6947 346.92 37.296C346.646 41.9427 346.51 46.9993 346.51 52.466C346.51 52.466 346.564 58.5067 346.674 70.588C346.674 72.2827 346.291 73.4853 345.526 74.196C344.815 74.852 344.132 75.18 343.476 75.18C342.874 75.18 342.246 75.016 341.59 74.688C341.316 67.5813 341.18 61.2947 341.18 55.828ZM384.574 45.25C383.535 46.2887 382.496 46.808 381.458 46.808C380.419 46.808 379.572 46.3707 378.916 45.496C378.314 44.5667 377.822 43.5827 377.44 42.544C377.057 41.4507 376.346 40.4667 375.308 39.592C374.324 38.6627 373.066 38.198 371.536 38.198C369.404 38.4167 367.463 39.9473 365.714 42.79C363.964 45.578 362.68 48.6667 361.86 52.056C361.04 55.4453 360.63 58.6433 360.63 61.65C360.63 64.602 361.45 67.1713 363.09 69.358C364.784 71.49 367.053 72.556 369.896 72.556C373.176 72.556 375.8 71.408 377.768 69.112C378.588 68.128 379.353 67.144 380.064 66.16C381.813 63.864 383.398 62.716 384.82 62.716C385.312 62.716 386.022 62.8527 386.952 63.126C386.952 65.1487 385.093 67.8273 381.376 71.162C377.713 74.442 373.722 76.082 369.404 76.082C365.085 76.082 361.668 74.7153 359.154 71.982C356.694 69.194 355.464 65.6133 355.464 61.24C355.464 55.6093 356.83 49.9787 359.564 44.348C360.93 41.6147 362.789 39.3733 365.14 37.624C367.49 35.82 370.114 34.918 373.012 34.918C375.909 34.918 378.232 35.902 379.982 37.87C381.786 39.7833 383.316 42.2433 384.574 45.25ZM413.879 43.2C413.387 41.9427 412.458 40.9587 411.091 40.248C409.724 39.5373 408.03 39.182 406.007 39.182C403.984 39.182 402.071 39.7833 400.267 40.986C398.518 42.1887 397.643 43.8013 397.643 45.824C397.643 47.8467 398.463 49.4593 400.103 50.662C401.798 51.81 403.82 52.6847 406.171 53.286C408.576 53.8873 410.982 54.5433 413.387 55.254C415.792 55.91 417.815 57.0307 419.455 58.616C421.15 60.1467 421.997 62.1693 421.997 64.684C421.997 68.3467 420.466 71.1347 417.405 73.048C414.398 74.9613 410.763 75.918 406.499 75.918C403.984 75.918 400.677 75.2347 396.577 73.868C392.532 72.5013 390.509 70.8613 390.509 68.948C390.509 67.5267 391.712 66.816 394.117 66.816C394.828 66.816 395.757 67.2533 396.905 68.128C400.404 70.6973 403.984 71.982 407.647 71.982C409.615 71.982 411.31 71.654 412.731 70.998C415.355 69.7407 416.667 67.718 416.667 64.93C416.667 63.2353 415.82 61.8687 414.125 60.83C412.485 59.7913 410.462 58.9713 408.057 58.37C405.706 57.7687 403.328 57.1127 400.923 56.402C398.518 55.6913 396.468 54.516 394.773 52.876C393.133 51.1813 392.313 49.0493 392.313 46.48C392.313 43.1453 393.816 40.4393 396.823 38.362C399.83 36.2847 403.547 35.246 407.975 35.246C410.982 35.246 413.688 36.0387 416.093 37.624C418.553 39.1547 419.783 41.396 419.783 44.348C419.783 46.316 418.662 47.3 416.421 47.3C415.492 47.3 414.863 47.136 414.535 46.808C414.262 46.48 414.098 45.906 414.043 45.086C414.043 44.2113 413.988 43.5827 413.879 43.2ZM477.03 50.99C473.969 50.99 472.438 50.4707 472.438 49.432C472.438 48.2293 474.324 47.3 478.096 46.644C481.868 45.9333 485.695 45.578 489.576 45.578C493.457 45.578 496.273 45.6873 498.022 45.906C499.771 46.1247 500.892 46.4253 501.384 46.808C501.931 47.1907 502.204 47.7373 502.204 48.448C502.204 58.288 499.853 65.5313 495.152 70.178C490.451 74.8247 483.672 77.148 474.816 77.148C466.015 77.148 459.099 74.9887 454.07 70.67C449.095 66.3513 446.608 60.3927 446.608 52.794C446.608 42.298 449.751 33.7973 456.038 27.292C462.325 20.732 470.142 17.452 479.49 17.452C483.59 17.452 487.471 18.2993 491.134 19.994C494.797 21.6887 497.038 23.8753 497.858 26.554C497.093 27.21 496.355 27.538 495.644 27.538C494.933 27.538 494.059 27.374 493.02 27.046C492.036 26.718 491.025 26.0893 489.986 25.16C488.947 24.2307 487.362 23.3013 485.23 22.372C483.098 21.388 480.857 20.896 478.506 20.896C471.235 20.896 464.921 24.012 459.564 30.244C454.261 36.4213 451.61 43.7193 451.61 52.138C451.61 58.8073 454.043 64.028 458.908 67.8C463.828 71.572 469.568 73.458 476.128 73.458C483.617 73.458 488.92 71.1347 492.036 66.488C494.988 62.224 496.464 56.7847 496.464 50.17C496.027 49.7873 495.453 49.596 494.742 49.596C494.031 49.596 493.184 49.6233 492.2 49.678C489.685 49.7873 486.788 50.0333 483.508 50.416C480.228 50.7987 478.069 50.99 477.03 50.99ZM535.803 52.384L535.393 61.814C535.393 66.57 535.939 69.768 537.033 71.408C537.689 72.5013 538.591 73.048 539.739 73.048C540.067 73.048 540.531 72.966 541.133 72.802C542.281 72.474 543.237 72.638 544.003 73.294C543.62 75.2073 541.707 76.164 538.263 76.164C535.912 76.164 534.354 75.18 533.589 73.212C532.987 71.736 532.55 69.9047 532.277 67.718C532.003 65.4767 531.785 63.946 531.621 63.126C528.067 69.9047 524.623 74.032 521.289 75.508C519.594 76.2733 517.626 76.656 515.385 76.656C513.143 76.656 511.394 75.59 510.137 73.458C508.934 71.2713 508.333 68.1007 508.333 63.946C508.333 59.7913 509.016 55.4453 510.383 50.908C511.749 46.316 513.745 42.462 516.369 39.346C518.993 36.1753 521.863 34.59 524.979 34.59C529.461 34.59 532.441 36.4487 533.917 40.166C535.174 43.3367 535.803 47.4093 535.803 52.384ZM515.713 49.76C514.947 52.712 514.373 55.5273 513.991 58.206C513.608 60.83 513.417 63.1807 513.417 65.258C513.417 67.2807 513.827 69.03 514.647 70.506C515.521 71.982 516.642 72.72 518.009 72.72C520.961 72.72 523.803 69.932 526.537 64.356C529.27 58.78 530.637 53.5867 530.637 48.776C530.637 45.66 529.817 43.0907 528.177 41.068C527.083 39.756 525.635 39.1 523.831 39.1C522.081 39.1 520.469 40.1387 518.993 42.216C517.571 44.2387 516.478 46.7533 515.713 49.76ZM550.581 40.166C551.182 40.166 551.483 43.774 551.483 50.99C551.483 52.138 551.455 53.9693 551.401 56.484C551.401 58.9987 551.401 60.3107 551.401 60.42C551.947 54.2427 552.494 50.0333 553.041 47.792C553.642 45.5507 554.243 43.6373 554.845 42.052C555.446 40.412 556.102 39.1547 556.813 38.28C558.562 36.0387 560.585 34.918 562.881 34.918C565.778 34.918 567.937 36.3667 569.359 39.264C570.835 42.1613 571.6 46.0153 571.655 50.826C573.021 40.9313 576.629 35.984 582.479 35.984C584.993 35.984 586.77 37.2687 587.809 39.838C588.847 42.4073 589.367 45.4687 589.367 49.022L589.121 61.486C589.121 69.686 590.897 73.786 594.451 73.786L599.125 73.048C599.398 73.048 599.671 73.0753 599.945 73.13C599.398 73.95 598.387 74.606 596.911 75.098C595.435 75.5353 593.986 75.754 592.565 75.754C589.777 75.754 587.672 74.524 586.251 72.064C584.884 69.5493 584.146 66.9253 584.037 64.192C583.927 61.404 583.873 59.026 583.873 57.058L584.037 49.76C584.037 47.3547 583.873 45.0587 583.545 42.872C583.271 40.6853 582.506 39.592 581.249 39.592C579.39 39.592 577.586 43.5007 575.837 51.318C574.142 59.0807 573.103 66.4607 572.721 73.458C571.791 74.442 570.616 74.9613 569.195 75.016C568.757 75.016 568.347 74.934 567.965 74.77C567.473 71.9273 567.199 67.1987 567.145 60.584C567.145 53.9147 566.817 48.612 566.161 44.676C565.505 40.74 564.029 38.772 561.733 38.772C560.202 38.772 558.945 40.4667 557.961 43.856C556.375 49.1587 554.954 57.4133 553.697 68.62C553.369 71.244 553.123 73.13 552.959 74.278C551.811 75.262 550.635 75.754 549.433 75.754L548.203 75.59C547.437 66.4607 547.055 55.1447 547.055 41.642C547.656 40.658 548.831 40.166 550.581 40.166ZM605.682 59.354C605.573 60.4473 605.518 61.1853 605.518 61.568C605.518 64.848 606.502 67.39 608.47 69.194C610.493 70.998 612.871 71.9 615.604 71.9C618.337 71.9 620.551 71.5173 622.246 70.752C623.995 69.9867 625.253 69.1667 626.018 68.292C627.986 65.832 629.79 64.602 631.43 64.602C632.031 64.602 632.742 64.766 633.562 65.094C633.015 67.7727 630.938 70.2327 627.33 72.474C623.777 74.6607 619.294 75.754 613.882 75.754C610.055 75.754 606.748 74.5513 603.96 72.146C601.227 69.686 599.86 66.3513 599.86 62.142C599.86 57.9327 600.68 53.86 602.32 49.924C604.015 45.9333 606.42 42.544 609.536 39.756C612.707 36.9133 615.905 35.492 619.13 35.492C622.41 35.492 625.034 36.1753 627.002 37.542C629.025 38.854 630.036 40.7947 630.036 43.364C630.036 48.12 627.904 52.056 623.64 55.172C619.431 58.2333 614.948 59.764 610.192 59.764C608.935 59.764 607.431 59.6273 605.682 59.354ZM611.914 56.648C614.483 56.648 616.779 55.828 618.802 54.188C620.825 52.548 622.246 50.826 623.066 49.022C623.941 47.218 624.378 45.578 624.378 44.102C624.378 42.626 623.804 41.3413 622.656 40.248C621.508 39.1 620.169 38.526 618.638 38.526C615.905 38.526 613.363 40.412 611.012 44.184C608.716 47.956 607.076 51.8647 606.092 55.91C608.497 56.402 610.438 56.648 611.914 56.648Z"
      />
    </svg>
  );
}

export default MathIcon;
