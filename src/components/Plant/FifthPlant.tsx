import { PlantVariantProps } from ".";

export const FifthPlant = ({ size = "203" }: PlantVariantProps) => {
  return (
    <svg
      width={size}
      height="302"
      viewBox="0 0 204 302"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M87.1089 68.1737C82.1326 70.7321 79.2172 72.8891 75.1458 77.0527C72.8838 79.3602 69.9685 82.1192 68.6113 83.1225C65.143 85.9317 64.0874 88.2392 64.3388 92.9547L64.4896 96.7671L62.8811 96.9176C61.8758 97.0179 60.217 96.5163 58.2567 95.5632C54.9895 93.9078 52.6773 93.6068 50.6164 94.7104C48.7566 95.6635 40.7644 102.436 40.4126 103.339C39.5078 105.696 40.4126 111.064 42.574 116.482C44.0819 120.244 44.0317 120.595 41.7697 120.043C40.7142 119.792 38.7036 119.592 37.2961 119.592C34.431 119.592 24.1769 122 21.3118 123.354C17.743 125.06 16.1848 128.621 16.7377 133.838C17.2906 139.306 18.3462 142.065 20.7086 144.423L22.9203 146.58L20.5578 148.085C19.3012 148.887 17.4917 149.79 16.5366 150.141C13.6715 151.095 11.4096 153.151 10.1027 156.111C9.04712 158.368 8.84606 159.372 9.09739 161.729C9.60004 167.197 11.862 170.307 18.9494 175.023C26.9415 180.29 29.4548 180.641 43.2777 177.982C52.2751 176.277 65.3943 174.22 65.6457 174.521C65.897 174.772 64.8917 175.173 50.164 181.143C34.9839 187.263 33.3754 188.216 30.7114 192.731C27.9971 197.346 28.3489 200.807 31.8675 203.716L33.9284 205.472L32.3701 207.83C28.7511 213.197 28.0473 220.271 30.7114 224.183C31.6162 225.488 32.0686 226.842 32.0686 228.096C32.0686 230.654 33.2247 233.213 34.7829 234.216C37.1956 235.821 40.5131 235.069 49.41 230.955C53.8334 228.949 60.1668 226.441 63.4843 225.337C74.7939 221.675 83.7411 216.508 89.8232 210.087C91.7835 208.031 93.6936 206.375 94.0957 206.375C94.9 206.375 98.2175 209.235 104.4 215.254C109.778 220.521 111.739 221.675 114.604 221.274C117.469 220.873 119.53 219.067 124.355 212.595L128.678 206.827L130.337 208.332C134.157 211.642 137.273 211.341 143.707 207.027C150.946 202.111 152.303 200.807 155.168 195.74C156.626 193.132 158.988 189.62 160.395 188.015C164.618 183.099 165.372 180.591 166.679 168.05L167.03 164.589L170.901 163.686C180.099 161.529 186.885 155.71 191.711 145.928C195.38 138.353 194.777 134.992 188.896 130.578C186.533 128.822 184.975 128.12 181.708 127.417L180.3 127.066L181.959 125.06C183.417 123.254 183.618 122.702 183.618 119.742V116.431L179.094 112.218C173.314 106.85 169.544 104.894 164.467 104.643C160.395 104.392 155.017 105.345 148.985 107.302C146.824 108.054 145.014 108.556 144.914 108.455C144.813 108.355 145.467 106.248 146.321 103.79C147.678 99.8773 147.879 98.573 147.93 94.0081C147.93 89.2425 147.779 88.4901 146.522 85.9819C145.718 84.3766 143.255 81.2665 140.692 78.5576C136.67 74.394 136.067 73.9426 134.408 73.9426C131.694 73.9426 129.382 72.7888 128.175 70.8324C125.562 66.6186 119.932 66.9196 113.749 71.6852L111.286 73.5412L110.482 72.3875C107.969 68.4245 105.305 67.4714 95.9053 67.1203C89.8735 66.8694 89.5216 66.9196 87.1089 68.1737ZM104.35 69.6786C106.662 70.3809 108.974 72.2871 108.974 73.5412C108.974 73.7419 107.416 75.4475 105.456 77.2534C101.032 81.4671 99.9265 83.7747 97.8656 93.2556C96.4079 100.279 96.3074 101.432 96.3074 110.562C96.3074 116.782 96.609 122.351 97.1116 125.812C97.564 128.822 97.9159 131.38 97.9159 131.481C97.9159 131.581 97.1116 131.631 96.1566 131.631C94.5984 131.631 94.2465 131.882 93.5428 133.387C93.0904 134.39 92.437 135.092 92.1857 134.992C91.1301 134.691 86.4052 126.314 83.5903 119.842C79.4183 110.362 77.2569 106.95 71.7277 101.282C69.0637 98.5228 66.651 95.7638 66.2991 95.1619C65.4446 93.4563 65.6457 89.6438 66.7515 87.537C67.3547 86.333 68.9632 84.7278 70.9738 83.273C72.7833 81.9688 75.4474 79.6111 76.9051 77.9557C79.4183 75.0461 83.4395 72.0363 88.0136 69.5281C89.974 68.4245 90.4766 68.3744 95.9555 68.6252C99.1725 68.8258 102.993 69.2773 104.35 69.6786ZM126.768 72.3875C127.472 73.3907 128.075 74.4943 128.075 74.7953C128.075 75.0963 127.271 77.2032 126.316 79.4606C125.361 81.7681 123.451 86.6842 122.093 90.4465C118.273 100.981 117.368 103.288 113.548 111.866C109.075 122.05 108.17 124.407 106.411 129.624C105.456 132.534 104.752 133.939 104.149 134.089C103.596 134.189 103.395 133.989 103.546 133.537C104.098 132.133 108.924 113.572 109.929 109.057C113.247 93.9078 114.001 83.1727 112.241 76.3504C111.94 75.1966 112.191 74.7953 114.755 72.8891C117.921 70.5314 121.943 69.2773 124.154 70.0298C124.858 70.2806 126.064 71.334 126.768 72.3875ZM134.459 75.4976C136.771 76.3504 143.054 83.3232 144.813 86.9852C146.17 89.7442 146.371 90.7976 146.371 94.0081C146.371 100.83 143.154 108.957 139.535 111.465C136.017 113.923 132.8 117.485 127.773 124.458C125.21 128.069 122.445 131.481 121.691 131.982C119.53 133.437 115.458 135.142 113.649 135.343C112.744 135.443 111.437 135.895 110.784 136.346C110.08 136.798 109.427 137.149 109.276 137.149C109.175 137.149 110.482 134.139 112.241 130.477C115.81 123.003 120.183 111.616 124.003 99.8773C127.271 89.995 130.086 79.7114 130.086 77.9055C130.086 76.4507 131.242 74.9458 132.347 74.9458C132.75 74.9458 133.654 75.1966 134.459 75.4976ZM110.985 77.8553C111.236 78.8586 111.487 82.0691 111.487 84.9786C111.487 93.7071 109.829 103.088 105.405 120.093C103.998 125.461 102.49 131.28 102.038 132.985C100.831 137.851 100.429 137.4 99.1725 129.675C98.0667 122.602 97.2624 109.91 97.6143 104.793C97.9159 99.8271 99.9265 88.9917 101.133 85.5304C101.585 84.3265 102.641 82.4202 103.445 81.2665C105.154 79.0091 109.477 75.3973 110.08 75.7484C110.281 75.8989 110.683 76.8019 110.985 77.8553ZM124.054 92.5533C117.771 112.117 114.001 122.551 110.784 129.123C108.723 133.387 107.617 134.992 107.114 134.44C106.461 133.788 108.019 129.374 114.051 114.926C118.826 103.489 124.003 90.296 126.366 83.5238C126.466 83.1225 126.668 82.9219 126.818 83.0724C126.919 83.1727 125.713 87.4366 124.054 92.5533ZM55.4921 96.0146C56.2461 96.3156 57.5027 97.1183 58.307 97.7704C59.4631 98.7235 60.3678 99.0245 62.2276 99.0245C64.2885 99.0245 64.9922 99.2753 66.5002 100.63C70.8732 104.442 74.8442 111.616 81.0771 126.865C83.1882 132.082 85.6009 137.6 86.3549 139.105C87.7121 141.513 87.7623 141.864 87.0083 142.567C86.4052 143.169 86.3046 143.971 86.556 145.978C86.757 147.934 86.6565 148.737 86.1036 149.188C85.5004 149.69 85.1485 149.69 84.4951 149.138C81.831 147.132 76.8045 142.717 70.5214 136.948C60.4684 127.668 56.4471 124.909 49.41 122.351C48.0529 121.849 46.5449 121.097 46.0925 120.745C44.9364 119.792 42.3226 112.92 41.5687 109.007C41.066 106.148 41.066 105.496 41.82 103.941C42.2724 102.987 43.1772 101.934 43.7803 101.683C44.3835 101.382 45.9417 100.228 47.2486 99.0746C51.119 95.6635 52.8281 95.0114 55.4921 96.0146ZM168.79 107.502C172.157 108.756 179.647 114.676 181.205 117.334C182.613 119.642 181.306 124.056 178.893 125.31C178.189 125.712 175.123 126.163 172.057 126.364C161.702 127.016 156.726 128.822 141.747 137.6C128.025 145.577 117.871 150.242 116.665 148.988C116.464 148.787 116.816 147.734 117.419 146.63C118.324 145.075 118.525 144.172 118.273 142.717C118.022 141.062 118.223 140.56 120.485 137.55C121.943 135.644 124.757 132.885 126.969 131.23C132.448 127.066 137.424 121.548 140.591 116.13C143.657 110.913 144.26 110.462 151.197 108.405C157.028 106.649 156.927 106.649 161.853 106.599C165.07 106.549 166.93 106.8 168.79 107.502ZM80.3733 117.585C85.2993 128.571 85.9025 129.875 87.9634 133.036C89.5216 135.393 90.0745 136.848 90.2756 138.804C90.4766 141.162 90.4264 141.363 89.6724 140.66C89.2703 140.259 86.8576 135.042 84.3946 129.123C81.9316 123.203 79.0162 116.331 77.8601 113.873C76.704 111.415 75.7992 109.258 75.7992 109.107C75.7992 108.255 78.1114 112.468 80.3733 117.585ZM137.575 117.384C135.715 120.444 130.086 126.815 128.427 127.668C127.472 128.22 127.472 128.12 128.578 126.314C131.091 122.2 138.48 113.722 139.033 114.324C139.184 114.425 138.53 115.829 137.575 117.384ZM42.6242 122.15C44.3332 122.501 45.4391 123.103 46.0423 123.906C52.9789 133.788 56.3969 136.346 72.8336 143.821C76.1511 145.326 84.8469 152.399 84.8469 153.603C84.8469 154.004 85.3496 154.907 85.9528 155.559C86.556 156.211 86.8576 156.863 86.6565 157.064C86.003 157.716 75.3971 157.365 68.5108 156.462C59.262 155.308 56.2963 154.506 49.7116 151.646C40.9152 147.784 39.357 147.332 31.9178 146.68C26.1373 146.179 24.5791 145.577 21.915 142.818C20.1557 141.012 19.2007 138.303 18.7483 133.838C18.1451 127.718 20.0049 125.26 26.3886 123.805C28.2484 123.354 30.8119 122.702 32.0686 122.301C34.8834 121.498 39.2565 121.448 42.6242 122.15ZM56.5979 127.919C60.7197 130.327 73.5373 141.814 71.1748 141.012C64.7409 138.754 58.6085 135.343 54.6376 131.781C52.3254 129.675 48.656 125.31 48.656 124.558C48.656 124.056 53.381 126.063 56.5979 127.919ZM178.24 129.574C184.07 130.226 186.031 130.879 188.946 133.186C191.158 134.892 192.414 136.948 192.414 138.754C192.414 140.41 189.248 146.831 186.634 150.493C183.819 154.405 180.451 157.415 176.732 159.271C174.118 160.576 168.991 162.231 167.483 162.231C167.131 162.231 166.779 161.027 166.578 159.321C166.377 157.766 165.573 154.757 164.769 152.7C163.964 150.643 163.059 147.984 162.758 146.881C162.054 144.072 160.546 143.47 155.067 143.821C151.85 144.021 148.834 144.724 141.496 147.132C128.527 151.345 123.35 152.499 118.424 152.248C116.514 152.148 117.72 151.245 121.742 149.74C127.07 147.734 133.504 144.423 142.752 139.005C153.71 132.534 159.44 129.925 164.769 128.922C166.427 128.621 171.856 128.872 178.24 129.574ZM97.0614 135.845C97.363 136.597 97.0111 137.149 96.3074 137.149C96.1063 137.149 95.9053 136.698 95.9053 136.146C95.9053 134.992 96.6592 134.791 97.0614 135.845ZM119.027 136.497C119.027 136.748 118.223 137.801 117.268 138.905C115.559 140.911 115.559 140.911 115.509 139.557C115.509 138.704 115.961 137.851 116.816 137.199C118.173 136.096 119.027 135.845 119.027 136.497ZM98.4185 141.212C98.4185 141.513 98.2175 141.563 97.9159 141.413C97.6646 141.262 97.4132 140.861 97.4132 140.61C97.4132 140.309 97.6646 140.259 97.9159 140.41C98.2175 140.56 98.4185 140.961 98.4185 141.212ZM111.487 142.567C111.487 143.62 111.387 143.771 110.985 143.169C110.331 142.165 110.331 140.51 110.985 140.911C111.286 141.062 111.487 141.814 111.487 142.567ZM94.3973 142.165C94.3973 142.416 94.1963 142.667 93.8947 142.667C93.6433 142.667 93.392 142.416 93.392 142.165C93.392 141.864 93.6433 141.664 93.8947 141.664C94.1963 141.664 94.3973 141.864 94.3973 142.165ZM90.3761 144.924C90.6777 145.326 90.8285 145.878 90.6274 146.179C90.1248 146.981 88.5163 146.78 88.1644 145.878C87.5613 144.272 89.22 143.52 90.3761 144.924ZM113.297 147.784C113.247 150.442 112.845 151.195 111.538 151.195C110.583 151.195 111.286 146.63 112.392 145.777C112.845 145.476 113.247 145.175 113.247 145.175C113.297 145.175 113.347 146.379 113.297 147.784ZM160.194 146.128C160.747 146.68 161.35 147.984 161.552 149.038C161.753 150.091 162.456 152.048 163.16 153.452C164.065 155.258 164.417 156.813 164.467 158.97L164.517 161.98L158.737 161.88C149.136 161.779 136.067 159.02 128.678 155.659C124.707 153.854 124.205 154.205 134.861 151.044C139.033 149.79 144.914 147.984 147.93 147.031C154.514 144.924 158.686 144.623 160.194 146.128ZM32.0686 150.242C39.5078 152.85 48.7063 155.208 59.9657 157.415C72.8838 159.923 76.3521 160.325 82.7358 160.124C85.802 160.024 88.3655 160.124 88.3655 160.325C88.3655 161.428 83.339 164.99 78.5135 167.448C73.5876 169.856 67.5055 171.662 60.217 172.816C56.7487 173.367 49.8624 174.621 44.8862 175.524C39.9099 176.427 34.8331 177.33 33.5765 177.481C26.4891 178.434 13.1689 170.307 11.3091 163.937C9.65031 158.218 11.8117 153.753 17.2906 151.747C18.6478 151.245 20.6584 150.242 21.7139 149.539C22.7695 148.787 24.2775 148.185 25.0314 148.185C25.7854 148.185 28.9521 149.088 32.0686 150.242ZM41.066 150.242C42.574 150.743 44.0317 151.396 44.3332 151.697C44.9364 152.299 38.2009 150.493 35.939 149.439L34.3305 148.687L36.3411 148.988C37.4469 149.138 39.5581 149.69 41.066 150.242ZM93.0402 150.543C93.8947 150.794 94.1963 152.198 93.5428 152.85C93.191 153.252 90.3761 150.743 90.3761 150.041C90.3761 149.79 90.7782 149.74 91.2809 149.941C91.7333 150.141 92.5375 150.442 93.0402 150.543ZM89.8735 152.75C89.8735 153.352 88.5163 153.302 88.1142 152.7C87.5613 151.847 88.3655 151.095 89.1697 151.747C89.5719 152.048 89.8735 152.499 89.8735 152.75ZM109.678 155.007C110.231 156.512 109.98 156.863 108.974 155.96C108.421 155.459 108.12 154.857 108.271 154.656C108.673 153.954 109.326 154.104 109.678 155.007ZM124.054 156.412C138.832 161.83 145.065 163.284 157.581 164.187C160.898 164.438 163.914 164.789 164.216 164.94C165.07 165.492 164.869 170.909 163.763 176.377C162.507 182.397 162.205 183.099 158.485 187.313C156.927 189.119 154.766 192.279 153.71 194.336C151.549 198.55 150.141 200.004 144.411 204.118C137.625 208.984 135.866 209.586 133.101 208.131C130.337 206.726 130.287 205.723 132.699 201.81C133.906 199.854 135.916 197.045 137.223 195.59C142.451 189.62 140.39 183.651 131.744 179.537C129.231 178.334 126.768 176.678 124.607 174.571C122.797 172.866 119.128 169.605 116.464 167.398C110.03 161.93 110.13 162.08 111.437 160.425C112.091 159.622 112.493 158.368 112.493 157.215C112.493 156.211 112.644 155.208 112.895 155.007C113.649 154.205 120.334 155.058 124.054 156.412ZM104.702 157.716C104.551 157.967 104.149 158.218 103.897 158.218C103.596 158.218 103.546 157.967 103.696 157.716C103.847 157.415 104.249 157.215 104.501 157.215C104.802 157.215 104.852 157.415 104.702 157.716ZM99.4238 158.97C99.4238 159.372 99.072 159.723 98.6699 159.723C98.2677 159.723 97.9159 159.372 97.9159 158.97C97.9159 158.569 98.2677 158.218 98.6699 158.218C99.072 158.218 99.4238 158.569 99.4238 158.97ZM95.5534 160.776C96.0058 161.629 96.8603 162.432 97.4635 162.582C98.2175 162.783 98.4185 163.134 98.2175 163.937C98.0164 164.488 97.4635 167.348 96.9106 170.257C95.6539 176.979 94.5481 180.24 91.4317 185.958C86.7068 194.737 86.3549 198.75 89.974 202.663L91.9846 204.82L90.9793 206.225C89.22 208.733 84.093 213.248 80.3733 215.655C75.4976 218.816 69.7171 221.424 62.7303 223.682C59.5636 224.735 53.7831 226.993 49.9629 228.798C46.0925 230.554 41.6189 232.36 40.0607 232.812C35.8887 233.965 34.9337 233.263 33.7776 228.146C33.3252 225.989 32.3701 223.481 31.7167 222.478C30.6611 220.923 30.5103 220.271 30.7114 217.913C31.013 214.552 32.8225 209.586 34.2802 208.131C35.2353 207.178 36.14 206.977 41.6692 206.726C54.4365 206.175 66.0478 200.807 76.9553 190.373C86.5057 181.243 93.8444 168.301 93.8947 160.325C93.8947 158.77 94.4978 158.92 95.5534 160.776ZM91.0798 166.395C87.2597 178.133 75.196 192.078 63.4843 198.349C60.016 200.205 60.2673 199.954 67.0028 194.787C76.8045 187.313 82.6353 179.989 88.5163 167.849C90.728 163.184 91.6327 161.779 91.7835 162.632C91.8841 163.234 91.5825 164.94 91.0798 166.395ZM107.315 164.087C112.945 171.01 116.212 173.819 122.496 177.079C126.718 179.287 130.186 182.848 132.247 187.012C134.81 192.229 134.559 195.64 131.443 197.596C130.287 198.349 129.683 199.252 129.181 201.108C128.779 202.462 128.075 204.068 127.623 204.67C127.17 205.221 125.16 207.93 123.099 210.689C118.977 216.257 117.017 218.114 114.654 218.916C112.342 219.719 110.935 218.816 104.35 212.244C101.233 209.134 97.7651 205.924 96.7095 205.071C94.7994 203.616 94.7492 203.566 95.5032 202.111C96.9106 199.402 97.4635 195.239 97.7148 185.808C98.0164 175.374 98.5191 171.311 99.9265 168.05C100.831 165.843 104.149 161.729 105.003 161.729C105.204 161.729 106.26 162.783 107.315 164.087ZM121.038 173.668C121.44 174.07 120.837 173.919 119.731 173.367C117.117 172.063 112.543 167.899 111.286 165.692C110.532 164.388 111.437 165.04 115.308 168.451C118.022 170.959 120.636 173.267 121.038 173.668ZM86.1036 169.103C82.9369 176.227 76.8548 184.504 71.0743 189.47C66.3996 193.483 57.8043 199.252 52.9286 201.66C49.1084 203.516 47.6507 203.967 43.5793 204.419C37.7988 205.071 35.3861 204.569 32.8728 202.212C29.9072 199.402 29.8569 196.995 32.722 193.282C35.4363 189.671 38.1004 188.065 47.5 184.403C60.3678 179.337 73.0346 173.769 80.5744 169.806C84.1935 167.899 87.1591 166.294 87.2094 166.294C87.3099 166.244 86.757 167.548 86.1036 169.103ZM135.766 184.253C138.781 187.012 139.435 190.172 137.525 192.63L136.369 194.035L136.017 191.878C135.615 189.57 133.855 185.607 132.046 182.848L130.94 181.193L132.649 182.046C133.604 182.547 135.012 183.5 135.766 184.253ZM95.4026 194.938C94.8497 199.703 93.7439 202.513 92.5375 202.262C92.0851 202.161 91.1301 201.309 90.4766 200.356C88.5163 197.496 89.0692 194.035 92.437 187.413L95.1513 182.046L95.5032 186.56C95.7042 189.018 95.6539 192.831 95.4026 194.938Z"
        fill="#E7EDDF"
      />
    </svg>
  );
};
