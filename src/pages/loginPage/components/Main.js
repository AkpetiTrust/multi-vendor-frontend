import React from "react";
import "../assets/login.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import logo from "../../../images/logo.svg";
import Createaccount from "./Createaccount";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className='main'>
      <div className='hero px-5'>
        <Link to='/' className='logo'>
          <img src={logo} alt='' className='img-fluid' />
        </Link>
        <Navbar active='4' />
        <div className='talk'>
          <div className='row g-5 login-row'>
            <div className='col-lg-6 col-sm-12'>
              <h4 className='login-title'>
                Create an account to buy and sell products, or login to your
                account
              </h4>
              <Createaccount />
            </div>
            <div className='col-lg-6 col-sm-12 center align-items-start'>
              <svg
                width='202'
                height='116'
                viewBox='0 0 303 174'
                fill='none'
                className='img-fluid'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M301.477 66.9854C301.477 80.0275 297.615 92.7767 290.379 103.621C283.143 114.465 272.858 122.917 260.825 127.908C248.792 132.899 235.551 134.205 222.777 131.66C210.003 129.116 198.269 122.835 189.06 113.613C179.85 104.391 173.578 92.6415 171.037 79.8501C168.496 67.0586 169.8 53.7999 174.784 41.7506C179.769 29.7013 188.209 19.4026 199.039 12.1568C209.868 4.91105 222.6 1.04363 235.624 1.04363C244.285 0.998079 252.868 2.67262 260.879 5.97037C268.889 9.26813 276.166 14.1236 282.29 20.256C288.414 26.3883 293.263 33.6758 296.557 41.6968C299.85 49.7178 301.522 58.3131 301.477 66.9854V66.9854Z'
                  fill='white'
                />
                <path
                  d='M235.596 1.01567C248.621 1.01567 261.353 4.8831 272.182 12.1289C283.011 19.3747 291.452 29.6734 296.436 41.7227C301.42 53.772 302.725 67.0307 300.184 79.8221C297.643 92.6136 291.371 104.363 282.161 113.585C272.952 122.808 261.218 129.088 248.444 131.632C235.669 134.177 222.429 132.871 210.396 127.88C198.363 122.889 188.078 114.437 180.842 103.593C173.606 92.7488 169.744 79.9996 169.744 66.9575C169.744 49.4686 176.682 32.6961 189.032 20.3296C201.381 7.96309 218.131 1.01567 235.596 1.01567V1.01567ZM235.596 0.0869141C217.877 0.109033 200.89 7.16729 188.361 19.7136C175.832 32.2599 168.783 49.2701 168.761 67.0132C168.761 84.7632 175.802 101.786 188.336 114.337C200.871 126.888 217.871 133.94 235.596 133.94C253.322 133.94 270.322 126.888 282.856 114.337C295.39 101.786 302.432 84.7632 302.432 67.0132C302.412 49.2693 295.365 32.2578 282.835 19.7109C270.305 7.16404 253.316 0.10658 235.596 0.0869141V0.0869141Z'
                  fill='#231F20'
                />
                <path
                  d='M259.6 57.5956C259.6 57.5956 260.639 28.8041 259.6 26.6865C258.561 24.5689 207.502 14.5569 208.022 15.8293C208.541 17.1017 210.331 21.0582 210.331 21.0582L203.551 22.9158L210.415 26.4915L203.579 29.6307L212.594 33.9401L213.244 58.5243L259.6 57.5956Z'
                  fill='white'
                />
                <path
                  d='M213.244 58.9424C213.118 58.9402 212.998 58.8898 212.908 58.8017C212.819 58.7136 212.766 58.5945 212.761 58.4688L212.121 34.1817L203.375 29.9931C203.292 29.9558 203.221 29.8942 203.173 29.8164C203.125 29.7385 203.102 29.6479 203.106 29.5565C203.107 29.4662 203.134 29.3779 203.183 29.3022C203.232 29.2265 203.302 29.1665 203.384 29.1293L209.33 26.3988L203.329 23.2781C203.245 23.2303 203.177 23.1593 203.132 23.0736C203.088 22.988 203.069 22.8913 203.078 22.7952C203.088 22.6992 203.128 22.6087 203.191 22.5356C203.254 22.4626 203.337 22.4106 203.431 22.3865L209.654 20.7055C209.153 19.6003 207.985 17.0462 207.577 16.0152C207.537 15.8851 207.545 15.7453 207.597 15.6198C207.65 15.4944 207.744 15.3912 207.864 15.328C209.422 14.6221 233.945 19.6467 234.196 19.6931C245.604 22.0336 259.35 25.1171 260.027 26.4731C261.093 28.6092 260.184 54.6516 260.073 57.6143C260.069 57.736 260.018 57.8515 259.932 57.9376C259.846 58.0237 259.731 58.0741 259.609 58.0787L213.234 58.9331L213.244 58.9424ZM204.711 29.5751L212.798 33.448C212.878 33.485 212.946 33.5439 212.994 33.6179C213.041 33.6919 213.067 33.7779 213.067 33.866L213.707 57.9672L259.155 57.1314C259.563 45.5869 259.906 28.3399 259.155 26.9003C258.534 26.2594 250.344 23.984 233.871 20.6126C220.886 17.9563 211.008 16.2939 208.671 16.1917C209.348 17.7799 210.73 20.7891 210.739 20.8355C210.769 20.8989 210.784 20.968 210.785 21.0379C210.785 21.1079 210.77 21.1771 210.741 21.2407C210.712 21.3043 210.669 21.3608 210.616 21.4063C210.563 21.4518 210.501 21.4852 210.433 21.5042L204.868 23.0088L210.637 26.018C210.716 26.0602 210.782 26.1232 210.828 26.2001C210.874 26.277 210.898 26.365 210.897 26.4545C210.892 26.5451 210.863 26.6327 210.812 26.7079C210.762 26.7831 210.692 26.8432 210.61 26.8817L204.711 29.5751Z'
                  fill='#231F20'
                />
                <path
                  d='M287.128 108.083C281.726 114.886 275.032 120.551 267.432 124.752C259.832 128.952 251.478 131.604 242.849 132.556C238.032 133.088 233.17 133.088 228.353 132.556C219.726 131.604 211.372 128.952 203.772 124.754C196.173 120.555 189.478 114.893 184.074 108.092C193.234 101.592 203.36 96.5774 214.078 93.232C228.097 88.8732 243.105 88.8732 257.124 93.232C267.839 96.5802 277.964 101.591 287.128 108.083Z'
                  fill='#345995'
                />
                <path
                  d='M251.791 58.6917C253.043 50.8529 266.046 48.9211 265.397 58.1623C265.305 61.3725 264.079 64.446 261.937 66.8369C259.711 69.103 256.122 70.1804 253.219 68.8801'
                  fill='white'
                />
                <path
                  d='M255.927 69.9202C254.928 69.9274 253.938 69.7216 253.024 69.3165C252.967 69.2914 252.914 69.255 252.871 69.2095C252.828 69.1639 252.794 69.1102 252.771 69.0514C252.749 68.9926 252.738 68.9299 252.74 68.867C252.742 68.8041 252.757 68.7422 252.783 68.685C252.836 68.5701 252.931 68.4804 253.049 68.4353C253.167 68.3901 253.298 68.3931 253.414 68.4435C255.983 69.5951 259.34 68.7964 261.594 66.5024C264.034 64.0133 264.757 60.5769 264.924 58.1436C265.147 54.9486 263.588 52.8496 260.76 52.571C257.281 52.1809 252.931 54.6421 252.264 58.8308C252.243 58.956 252.174 59.0681 252.072 59.1429C251.969 59.2176 251.842 59.249 251.716 59.2302C251.591 59.2096 251.479 59.1406 251.405 59.0381C251.33 58.9356 251.299 58.8077 251.318 58.6822C252.078 53.9642 256.957 51.1686 260.871 51.6237C263.496 51.9209 266.185 53.8248 265.879 58.255C265.694 60.8648 264.952 64.5427 262.281 67.2361C260.601 68.9368 258.316 69.9019 255.927 69.9202V69.9202Z'
                  fill='#231F20'
                />
                <path
                  d='M219.402 58.6917C218.15 50.8529 205.156 48.9211 205.796 58.1623C205.896 61.3727 207.124 64.4448 209.265 66.8369C211.491 69.103 215.08 70.1804 217.983 68.8801'
                  fill='white'
                />
                <path
                  d='M215.266 69.9203C214.077 69.8982 212.904 69.6407 211.815 69.1624C210.727 68.6842 209.743 67.9948 208.922 67.1341C206.269 64.4407 205.499 60.7628 205.323 58.153C205.008 53.7228 207.707 51.8188 210.331 51.5216C214.236 51.0665 219.124 53.8621 219.875 58.5802C219.894 58.6446 219.898 58.7122 219.889 58.7784C219.879 58.8447 219.855 58.9082 219.82 58.9647C219.784 59.0212 219.736 59.0694 219.68 59.1062C219.624 59.1429 219.561 59.1674 219.495 59.178C219.429 59.1886 219.362 59.185 219.297 59.1675C219.233 59.1501 219.172 59.1191 219.121 59.0766C219.069 59.0342 219.027 58.9812 218.997 58.9213C218.967 58.8613 218.95 58.7957 218.948 58.7288C218.271 54.5401 213.921 52.0696 210.443 52.469C207.614 52.794 206.065 54.9023 206.287 58.0415C206.454 60.4934 207.169 63.9298 209.617 66.4003C211.862 68.6944 215.229 69.4931 217.788 68.3414C217.846 68.315 217.909 68.3004 217.972 68.2982C218.036 68.2961 218.099 68.3065 218.159 68.329C218.218 68.3514 218.273 68.3854 218.319 68.429C218.365 68.4726 218.402 68.5249 218.428 68.5829C218.479 68.6988 218.482 68.8299 218.437 68.948C218.392 69.0661 218.302 69.1618 218.187 69.2145C217.275 69.656 216.279 69.8967 215.266 69.9203V69.9203Z'
                  fill='#231F20'
                />
                <path
                  d='M221.137 97.8665C221.137 97.8665 224.652 105.538 234.919 105.538C237.779 105.616 240.61 104.95 243.136 103.606C245.663 102.261 247.798 100.284 249.333 97.8665L247.96 67.7375H222.509L221.137 97.8665Z'
                  fill='white'
                />
                <path
                  d='M234.919 106.021C224.466 106.021 220.738 98.1451 220.701 98.0708C220.672 97.9999 220.656 97.9244 220.654 97.8479L221.99 67.719C221.997 67.5958 222.051 67.48 222.141 67.3954C222.23 67.3108 222.349 67.2637 222.472 67.2639H247.96C248.083 67.2637 248.202 67.3108 248.292 67.3954C248.381 67.48 248.435 67.5958 248.442 67.719L249.815 97.8479C249.815 97.9346 249.796 98.0203 249.759 98.0987C248.171 100.582 245.972 102.614 243.373 104.002C240.775 105.389 237.864 106.084 234.919 106.021V106.021ZM221.619 97.7736C222.083 98.7024 225.617 105.064 234.919 105.064C237.668 105.126 240.387 104.486 242.82 103.206C245.254 101.926 247.323 100.047 248.832 97.7458L247.487 68.2205H222.964L221.619 97.7736Z'
                  fill='#231F20'
                />
                <path
                  d='M222.509 80.6382C224.475 83.4913 227.117 85.8114 230.198 87.3903C235.244 90.1766 242.785 93.3251 248.906 92.387L247.895 79.6444C243.416 80.2057 238.886 80.2368 234.4 79.7373C230.449 79.3844 226.368 79.0036 222.751 77.4804C222.129 77.2018 221.73 79.403 222.509 80.6382Z'
                  fill='#231F20'
                />
                <path
                  d='M246.569 93.0183C240.41 93.0183 233.695 89.8513 229.976 87.7894C226.813 86.1924 224.109 83.8141 222.12 80.8795C221.796 80.3366 221.62 79.7177 221.61 79.0851C221.6 78.4526 221.757 77.8286 222.064 77.2759C222.165 77.1482 222.305 77.0573 222.463 77.017C222.62 76.9767 222.786 76.9894 222.936 77.053C226.553 78.5854 230.746 78.9105 234.437 79.2727C238.889 79.7736 243.385 79.7455 247.83 79.1891C247.892 79.18 247.955 79.1835 248.016 79.1994C248.076 79.2154 248.133 79.2435 248.183 79.282C248.232 79.3216 248.273 79.3708 248.304 79.4266C248.334 79.4824 248.353 79.5438 248.359 79.6071L249.361 92.3496C249.371 92.4661 249.337 92.5822 249.264 92.6738C249.192 92.7655 249.087 92.8256 248.971 92.8419C248.176 92.9619 247.373 93.0209 246.569 93.0183V93.0183ZM222.704 77.9632C222.566 78.3585 222.513 78.7784 222.546 79.1958C222.58 79.6132 222.7 80.019 222.899 80.3872V80.3872C224.81 83.1942 227.401 85.4695 230.43 87C234.437 89.229 242.033 92.7768 248.405 92.006L247.478 80.1922C243.117 80.684 238.715 80.684 234.354 80.1922C230.634 79.8671 226.433 79.4956 222.704 77.9632V77.9632Z'
                  fill='#231F20'
                />
                <path
                  d='M234.558 82.6442H236.644C241.399 82.6467 245.959 80.7591 249.325 77.3963C252.69 74.0335 254.584 69.4705 254.592 64.7099V36.2249H216.611V64.7099C216.618 69.4705 218.512 74.0335 221.878 77.3963C225.243 80.7591 229.803 82.6467 234.558 82.6442Z'
                  fill='white'
                />
                <path
                  d='M254.592 36.2249V64.7099C254.592 67.0695 254.127 69.406 253.225 71.5859C252.323 73.7658 251.001 75.7463 249.334 77.4144C247.668 79.0825 245.689 80.4054 243.512 81.3075C241.334 82.2096 239.001 82.6733 236.644 82.6721H234.558C232.201 82.6733 229.868 82.2096 227.69 81.3075C225.513 80.4054 223.534 79.0825 221.868 77.4144C220.201 75.7463 218.879 73.7658 217.977 71.5859C217.075 69.406 216.611 67.0695 216.611 64.7099V36.2249H254.592ZM254.592 35.2961H216.611C216.365 35.2961 216.129 35.394 215.955 35.5682C215.781 35.7423 215.683 35.9786 215.683 36.2249V64.7099C215.69 69.7277 217.684 74.5379 221.228 78.086C224.771 81.6341 229.574 83.6307 234.585 83.638H236.672C241.678 83.6233 246.475 81.6235 250.012 78.0762C253.55 74.5288 255.54 69.7229 255.547 64.7099V36.2249C255.547 35.9786 255.449 35.7423 255.275 35.5682C255.101 35.394 254.865 35.2961 254.619 35.2961H254.592Z'
                  fill='#231F20'
                />
                <path
                  d='M235.903 64.8678C235.044 64.8723 234.185 64.8196 233.333 64.7099C233.153 64.692 232.981 64.6301 232.83 64.5297C232.68 64.4293 232.556 64.2935 232.471 64.1341C231.144 61.9236 234.65 52.506 235.365 50.6392C235.386 50.5805 235.419 50.5266 235.462 50.4808C235.504 50.4349 235.556 50.398 235.613 50.372C235.67 50.3461 235.731 50.3318 235.794 50.3298C235.856 50.3279 235.918 50.3383 235.977 50.3606C236.096 50.4064 236.192 50.4975 236.244 50.6142C236.296 50.7308 236.3 50.8634 236.255 50.9829C234.669 55.1344 232.452 62.2394 233.287 63.6418C233.352 63.744 233.398 63.7533 233.445 63.7626C235.137 63.9449 236.844 63.9449 238.537 63.7626C238.599 63.7548 238.662 63.7595 238.722 63.7764C238.783 63.7932 238.839 63.822 238.888 63.8608C238.937 63.8997 238.978 63.948 239.009 64.0029C239.039 64.0578 239.058 64.1182 239.065 64.1805C239.074 64.2423 239.071 64.3052 239.055 64.3657C239.039 64.4261 239.012 64.4827 238.974 64.5321C238.936 64.5815 238.888 64.6227 238.834 64.6533C238.779 64.6838 238.719 64.7031 238.657 64.7099C237.743 64.8173 236.823 64.87 235.903 64.8678Z'
                  fill='#231F20'
                />
                <path
                  d='M266.853 125.414H266.788C266.662 125.397 266.547 125.332 266.468 125.231C266.39 125.13 266.355 125.002 266.371 124.875L268.653 107.711C268.684 107.602 268.754 107.507 268.85 107.445C268.945 107.383 269.06 107.358 269.173 107.374C269.285 107.39 269.389 107.446 269.464 107.531C269.538 107.617 269.58 107.727 269.58 107.841L267.308 124.996C267.293 125.108 267.239 125.211 267.156 125.287C267.073 125.363 266.966 125.408 266.853 125.414V125.414Z'
                  fill='#231F20'
                />
                <path
                  d='M204.368 125.413C204.251 125.414 204.139 125.372 204.051 125.295C203.964 125.218 203.908 125.111 203.894 124.996L201.585 107.841C201.569 107.715 201.604 107.587 201.683 107.486C201.761 107.385 201.876 107.319 202.002 107.303C202.128 107.287 202.254 107.321 202.355 107.397C202.455 107.473 202.522 107.586 202.54 107.711L204.813 124.875C204.829 125 204.795 125.127 204.719 125.228C204.642 125.328 204.53 125.395 204.405 125.413H204.368Z'
                  fill='#231F20'
                />
                <path
                  d='M278.094 136.661C288.058 136.661 296.134 128.573 296.134 118.597C296.134 108.62 288.058 100.532 278.094 100.532C268.131 100.532 260.055 108.62 260.055 118.597C260.055 128.573 268.131 136.661 278.094 136.661Z'
                  fill='white'
                />
                <path
                  d='M278.094 100.541C281.664 100.54 285.154 101.598 288.122 103.583C291.091 105.568 293.404 108.391 294.77 111.693C296.136 114.995 296.493 118.629 295.796 122.134C295.099 125.64 293.379 128.86 290.853 131.386C288.328 133.912 285.111 135.631 281.609 136.326C278.108 137.02 274.479 136.659 271.183 135.288C267.887 133.917 265.071 131.597 263.091 128.622C261.112 125.648 260.058 122.152 260.064 118.578C260.064 113.789 261.964 109.197 265.345 105.811C268.726 102.425 273.312 100.523 278.094 100.523V100.541ZM278.094 99.594C274.337 99.5995 270.666 100.721 267.545 102.816C264.424 104.911 261.994 107.886 260.562 111.364C259.129 114.842 258.759 118.668 259.498 122.357C260.237 126.045 262.052 129.432 264.714 132.088C267.375 134.744 270.763 136.55 274.45 137.277C278.136 138.004 281.955 137.621 285.424 136.175C288.892 134.729 291.855 132.285 293.936 129.153C296.018 126.02 297.125 122.34 297.117 118.578C297.113 113.535 295.11 108.699 291.548 105.133C287.987 101.567 283.159 99.5618 278.122 99.5569L278.094 99.594Z'
                  fill='#231F20'
                />
                <path
                  d='M287.648 116.851H279.847V109.04C279.847 108.724 279.722 108.422 279.5 108.199C279.277 107.976 278.975 107.851 278.66 107.851H277.538C277.223 107.851 276.921 107.976 276.699 108.199C276.476 108.422 276.351 108.724 276.351 109.04V116.851H268.551C268.236 116.851 267.934 116.976 267.711 117.199C267.488 117.422 267.363 117.724 267.363 118.039V119.154C267.362 119.311 267.392 119.466 267.451 119.612C267.51 119.757 267.597 119.889 267.708 120C267.818 120.112 267.949 120.2 268.094 120.261C268.239 120.321 268.394 120.352 268.551 120.352H276.351V128.163C276.351 128.478 276.476 128.78 276.699 129.003C276.921 129.226 277.223 129.352 277.538 129.352H278.66C278.975 129.352 279.277 129.226 279.5 129.003C279.722 128.78 279.847 128.478 279.847 128.163V120.352H287.648C287.804 120.352 287.96 120.321 288.104 120.261C288.249 120.2 288.38 120.112 288.491 120C288.601 119.889 288.688 119.757 288.747 119.612C288.806 119.466 288.836 119.311 288.835 119.154V118.039C288.835 117.724 288.71 117.422 288.487 117.199C288.265 116.976 287.963 116.851 287.648 116.851V116.851Z'
                  fill='#D1D3D4'
                />
                <path
                  d='M133.284 66.9854C133.284 80.0275 129.422 92.7767 122.186 103.621C114.95 114.465 104.665 122.917 92.6321 127.908C80.5991 132.899 67.3584 134.205 54.5842 131.66C41.8101 129.116 30.0763 122.835 20.8667 113.613C11.657 104.391 5.38519 92.6415 2.84426 79.85C0.303322 67.0586 1.60742 53.7999 6.59164 41.7506C11.5759 29.7013 20.0163 19.4026 30.8457 12.1568C41.6751 4.911 54.407 1.04358 67.4314 1.04358C76.0917 0.999272 84.6747 2.67466 92.6843 5.97285C100.694 9.27105 107.971 14.1266 114.095 20.2587C120.219 26.3908 125.068 33.6778 128.361 41.6982C131.655 49.7187 133.328 58.3134 133.284 66.9854V66.9854Z'
                  fill='white'
                />
                <path
                  d='M67.4036 1.01567C80.428 1.01567 93.1599 4.8831 103.989 12.1289C114.819 19.3747 123.259 29.6734 128.243 41.7227C133.228 53.772 134.532 67.0307 131.991 79.8221C129.45 92.6136 123.178 104.363 113.968 113.585C104.759 122.808 93.0249 129.088 80.2508 131.632C67.4766 134.177 54.2359 132.871 42.2029 127.88C30.1699 122.889 19.8852 114.437 12.6492 103.593C5.41327 92.7488 1.55109 79.9996 1.55109 66.9575C1.55109 49.4686 8.4891 32.6961 20.8388 20.3296C33.1886 7.96309 49.9384 1.01567 67.4036 1.01567V1.01567ZM67.4036 0.0869141C49.6837 0.10658 32.6952 7.16404 20.1653 19.7109C7.63547 32.2578 0.587574 49.2693 0.567934 67.0132C0.564747 80.8946 4.87271 94.4333 12.8951 105.754C20.9174 117.075 32.2571 125.617 45.3431 130.198C58.4292 134.778 72.614 135.17 85.9324 131.319C99.2509 127.469 111.044 119.566 119.677 108.705C129.159 96.8894 134.3 82.1709 134.239 67.0132C134.217 49.2701 127.168 32.2599 114.639 19.7136C102.11 7.16729 85.1227 0.109033 67.4036 0.0869141V0.0869141Z'
                  fill='#231F20'
                />
                <path
                  d='M30.3129 86.6379C30.3129 48.8653 35.4234 18.2441 67.0418 18.2441C98.6603 18.2441 103.762 48.8932 103.762 86.6379H30.3129Z'
                  fill='white'
                />
                <path
                  d='M103.762 87.1209H30.3128C30.2499 87.1209 30.1877 87.1084 30.1297 87.084C30.0717 87.0596 30.0191 87.0239 29.975 86.9789C29.931 86.9339 29.8964 86.8806 29.8731 86.8221C29.8499 86.7635 29.8386 86.7009 29.8398 86.638C29.8398 71.2484 30.5818 51.8188 36.3323 38.0918C42.0828 24.3647 52.1462 17.7612 66.9955 17.7612C99.6899 17.7612 104.198 50.8622 104.198 86.638C104.198 86.7584 104.154 86.8747 104.073 86.964C103.992 87.0534 103.881 87.1093 103.762 87.1209V87.1209ZM30.7952 86.1922H103.27C103.27 70.9698 102.482 51.921 96.7775 38.4911C91.2125 25.2006 81.4274 18.7457 67.0048 18.7457C52.5821 18.7457 42.8341 25.247 37.2227 38.4911C31.5928 51.8931 30.8137 70.9419 30.7952 86.1643V86.1922Z'
                  fill='#231F20'
                />
                <path
                  d='M118.926 108.083C113.524 114.886 106.83 120.551 99.2299 124.752C91.6303 128.952 83.2756 131.604 74.6474 132.556C69.8328 133.088 64.9743 133.088 60.1598 132.556C51.5322 131.606 43.1777 128.955 35.578 124.757C27.9784 120.558 21.284 114.894 15.881 108.092C25.0414 101.592 35.167 96.5775 45.8856 93.2321C59.9006 88.8728 74.9065 88.8728 88.9216 93.2321C99.6389 96.5764 109.764 101.588 118.926 108.083V108.083Z'
                  fill='#345995'
                />
                <path
                  d='M83.5977 58.6917C84.8498 50.8529 97.8441 48.9211 97.2042 58.1623C97.1044 61.3727 95.8759 64.4448 93.7353 66.8369C91.5093 69.103 87.9199 70.1804 85.0261 68.8801'
                  fill='white'
                />
                <path
                  d='M87.7344 69.9202C86.7319 69.9273 85.7393 69.7215 84.822 69.3165C84.7073 69.2638 84.6177 69.1681 84.5727 69.0501C84.5276 68.932 84.5305 68.8009 84.5809 68.685C84.6354 68.5694 84.7326 68.4796 84.8521 68.4345C84.9715 68.3895 85.1037 68.3927 85.2208 68.4435C87.7807 69.5952 91.1476 68.7964 93.4014 66.5024C95.8407 64.0133 96.5549 60.5769 96.7218 58.1436C96.9444 54.9486 95.3955 52.8496 92.5667 52.571C89.0793 52.1809 84.7385 54.6421 84.0707 58.8308C84.0502 58.956 83.9813 59.0681 83.8789 59.1429C83.7765 59.2176 83.6488 59.249 83.5235 59.2302C83.4611 59.2212 83.4011 59.1997 83.347 59.1671C83.293 59.1345 83.246 59.0914 83.2088 59.0404C83.1716 58.9893 83.145 58.9313 83.1306 58.8698C83.1162 58.8083 83.1141 58.7445 83.1247 58.6822C83.876 53.9642 88.7546 51.1686 92.6687 51.6237C95.2935 51.9209 97.9925 53.8248 97.6772 58.255C97.5009 60.8648 96.7497 64.5427 94.0785 67.2361C92.4024 68.9371 90.1207 69.9025 87.7344 69.9202V69.9202Z'
                  fill='#231F20'
                />
                <path
                  d='M51.2094 58.6916C49.9573 50.8529 36.9538 48.9211 37.603 58.2087C37.6994 61.4181 38.9247 64.4903 41.0626 66.8833C43.2886 69.1494 46.8873 70.2268 49.7811 68.9265'
                  fill='white'
                />
                <path
                  d='M47.0728 69.9203C45.8827 69.8979 44.7087 69.6403 43.6184 69.1621C42.5281 68.6839 41.5429 67.9947 40.7194 67.1341C38.076 64.4407 37.3062 60.7628 37.1207 58.1623C36.8146 53.7228 39.5044 51.8188 42.1292 51.5216C46.0433 51.0665 50.9219 53.8621 51.6825 58.5802C51.71 58.6475 51.7219 58.7202 51.7174 58.7929C51.7129 58.8655 51.6921 58.9362 51.6565 58.9996C51.6209 59.063 51.5714 59.1176 51.5118 59.1592C51.4522 59.2008 51.384 59.2284 51.3122 59.2399C51.2405 59.2514 51.1671 59.2465 51.0975 59.2256C51.0279 59.2047 50.9639 59.1683 50.9103 59.1192C50.8567 59.07 50.8149 59.0094 50.788 58.9418C50.7611 58.8742 50.7498 58.8014 50.755 58.7288C50.0872 54.5401 45.7465 52.0789 42.2591 52.469C39.4766 52.794 37.872 54.893 38.0946 58.0415C38.2708 60.4934 39.0221 63.9298 41.4243 66.4003C43.6781 68.6944 46.9893 69.4931 49.6049 68.3414C49.7205 68.2897 49.8519 68.2861 49.9701 68.3314C50.0884 68.3767 50.1839 68.4671 50.2356 68.5829C50.2872 68.6987 50.2908 68.8303 50.2456 68.9487C50.2004 69.0671 50.11 69.1628 49.9944 69.2145C49.0828 69.6582 48.0861 69.899 47.0728 69.9203Z'
                  fill='#231F20'
                />
                <path
                  d='M55.4574 97.8665C55.4574 97.8665 58.3419 105.538 66.7729 105.538C73.5065 105.538 78.6263 97.8665 78.6263 97.8665L77.4948 67.7375H56.5796L55.4574 97.8665Z'
                  fill='white'
                />
                <path
                  d='M66.7729 106.021C58.1193 106.021 55.04 98.1451 55.04 98.043C55.031 97.9783 55.031 97.9126 55.04 97.8479L56.1716 67.719C56.1786 67.5974 56.2312 67.4829 56.3189 67.3985C56.4066 67.3141 56.523 67.2661 56.6446 67.2639H77.5597C77.6829 67.2637 77.8016 67.3108 77.8913 67.3954C77.981 67.48 78.0349 67.5958 78.042 67.719L79.1643 97.8479C79.1739 97.951 79.1441 98.0539 79.0808 98.1358C78.8026 98.4609 73.6828 106.021 66.7729 106.021ZM55.9675 97.7829C56.32 98.6559 59.1952 105.064 66.8007 105.064C72.7367 105.064 77.4762 98.7024 78.1626 97.7272L77.0589 68.2205H57.0434L55.9675 97.7829Z'
                  fill='#231F20'
                />
                <path
                  d='M56.5796 80.6382C58.095 83.3804 60.269 85.701 62.9052 87.3903C67.0419 90.1766 73.2376 93.3251 78.2646 92.387L77.4391 79.6444C73.7528 80.2096 70.0044 80.2409 66.3091 79.7373C63.0629 79.3844 59.7146 79.0036 56.7466 77.4804C56.2643 77.2018 55.9675 79.403 56.5796 80.6382Z'
                  fill='#231F20'
                />
                <path
                  d='M76.3725 93.0184C71.2713 93.0184 65.7248 89.8327 62.6641 87.7709C59.9511 86.0505 57.7175 83.6701 56.1716 80.8517C55.5594 79.6628 55.6893 77.7217 56.2272 77.1923C56.3244 77.0902 56.4525 77.023 56.5917 77.0011C56.7309 76.9793 56.8733 77.0041 56.997 77.0716C59.9465 78.5855 63.3782 78.9291 66.4019 79.2728C70.0412 79.7735 73.7337 79.7453 77.3649 79.1892C77.4284 79.1787 77.4933 79.1816 77.5556 79.1975C77.6178 79.2135 77.6761 79.2423 77.7267 79.2821C77.777 79.3231 77.8185 79.3738 77.8488 79.4312C77.8791 79.4887 77.8975 79.5517 77.9029 79.6164L78.7284 92.359C78.7347 92.4721 78.6995 92.5836 78.6295 92.6725C78.5595 92.7615 78.4594 92.8217 78.3481 92.8419C77.6963 92.9606 77.035 93.0197 76.3725 93.0184V93.0184ZM56.8023 78.0097C56.593 78.8127 56.6583 79.6628 56.9878 80.4244V80.4244C58.4535 83.1076 60.5799 85.3711 63.1649 87C66.4297 89.2105 72.5976 92.7212 77.7823 91.9968L77.0125 80.1829C73.4579 80.6654 69.8545 80.6654 66.2999 80.1829C63.2762 79.8672 59.8537 79.505 56.8023 78.0097Z'
                  fill='#231F20'
                />
                <path
                  d='M86.3895 49.7011V64.7098C86.3907 67.069 85.9276 69.4053 85.0266 71.5851C84.1255 73.7649 82.8043 75.7456 81.1384 77.4137C79.4724 79.0819 77.4945 80.405 75.3176 81.3072C73.1408 82.2095 70.8076 82.6732 68.4517 82.672H66.3555C63.9991 82.6732 61.6655 82.2095 59.4881 81.3074C57.3108 80.4053 55.3322 79.0824 53.6655 77.4143C51.9989 75.7462 50.6768 73.7657 49.7747 71.5858C48.8727 69.4059 48.4084 67.0694 48.4084 64.7098V49.5711C48.4084 49.5711 54.5948 47.7136 60.9946 35.1567C73.6642 49.8497 86.3895 49.7011 86.3895 49.7011Z'
                  fill='white'
                />
                <path
                  d='M68.4517 83.1271H66.3555C61.4756 83.1222 56.7965 81.1814 53.3424 77.7296C49.8884 74.2778 47.9408 69.5963 47.9261 64.7098V49.571C47.9271 49.4673 47.9609 49.3665 48.0225 49.2831C48.0841 49.1997 48.1705 49.138 48.2693 49.1067C48.3342 49.1067 54.3629 47.1377 60.5679 34.9431C60.6044 34.8731 60.6572 34.813 60.7217 34.7677C60.7863 34.7225 60.8608 34.6934 60.9389 34.683C61.0169 34.6741 61.0958 34.6846 61.1687 34.7138C61.2416 34.743 61.306 34.7899 61.3563 34.8502C73.6457 49.0788 86.1391 49.2181 86.3988 49.2181C86.4624 49.217 86.5256 49.2288 86.5846 49.2527C86.6435 49.2767 86.6971 49.3123 86.742 49.3574C86.8289 49.451 86.8785 49.5733 86.8811 49.7011V64.7098C86.8688 69.597 84.922 74.28 81.4674 77.7323C78.0128 81.1846 73.3323 83.1246 68.4517 83.1271V83.1271ZM48.8907 49.9054V64.7098C48.9054 69.3409 50.751 73.7778 54.0239 77.0499C57.2968 80.322 61.7306 82.1631 66.3555 82.1704H68.4517C73.0766 82.1631 77.5103 80.322 80.7832 77.0499C84.0561 73.7778 85.9018 69.3409 85.9165 64.7098V50.1654C83.4586 50.0354 72.375 48.7537 61.0966 36.0019C55.5687 46.5804 50.2727 49.3388 48.8907 49.9054Z'
                  fill='#231F20'
                />
                <path
                  d='M67.6911 64.8678C66.8291 64.8721 65.9677 64.8193 65.1127 64.7099C64.9335 64.6897 64.7617 64.6269 64.6116 64.5267C64.4616 64.4266 64.3376 64.292 64.2501 64.1341C62.933 61.9237 66.4297 52.506 67.1439 50.6392C67.1664 50.5783 67.2007 50.5223 67.2448 50.4746C67.289 50.4269 67.342 50.3884 67.401 50.3612C67.46 50.334 67.5238 50.3188 67.5887 50.3163C67.6536 50.3138 67.7183 50.3241 67.7792 50.3467C67.8401 50.3693 67.896 50.4036 67.9436 50.4478C67.9913 50.492 68.0298 50.5451 68.0569 50.6042C68.084 50.6633 68.0993 50.7271 68.1017 50.7921C68.1042 50.8571 68.0939 50.9219 68.0714 50.9829C66.4761 55.1344 64.2686 62.2394 65.1034 63.6419C65.1164 63.6743 65.138 63.7026 65.1657 63.7239C65.1934 63.7451 65.2264 63.7585 65.261 63.7626C66.9504 63.9452 68.6544 63.9452 70.3438 63.7626C70.4092 63.7437 70.478 63.7393 70.5454 63.7495C70.6127 63.7597 70.6771 63.7844 70.7341 63.8218C70.791 63.8592 70.8392 63.9085 70.8754 63.9663C70.9116 64.0241 70.9348 64.0891 70.9436 64.1567C70.9524 64.2244 70.9465 64.2931 70.9263 64.3583C70.9061 64.4234 70.8721 64.4835 70.8265 64.5342C70.781 64.585 70.7251 64.6253 70.6626 64.6524C70.6001 64.6796 70.5324 64.6928 70.4643 64.6914C69.5443 64.8063 68.6182 64.8652 67.6911 64.8678V64.8678Z'
                  fill='#231F20'
                />
                <path
                  d='M98.6325 125.413C98.5076 125.395 98.3949 125.328 98.3186 125.228C98.2423 125.127 98.2085 125 98.2244 124.875L100.487 107.711C100.506 107.586 100.573 107.473 100.673 107.397C100.774 107.321 100.9 107.287 101.025 107.303C101.152 107.319 101.267 107.385 101.345 107.486C101.423 107.587 101.459 107.715 101.443 107.841L99.1612 124.996C99.1543 125.058 99.1351 125.118 99.1047 125.173C99.0743 125.228 99.0333 125.276 98.9841 125.315C98.9349 125.354 98.8785 125.383 98.8181 125.4C98.7578 125.417 98.6947 125.421 98.6325 125.413Z'
                  fill='#231F20'
                />
                <path
                  d='M36.1561 125.414C36.0403 125.412 35.9287 125.37 35.8419 125.293C35.755 125.216 35.6987 125.111 35.6831 124.996L33.4107 107.841C33.411 107.727 33.4524 107.617 33.5272 107.531C33.6021 107.446 33.7054 107.39 33.8181 107.374C33.9309 107.358 34.0456 107.383 34.1411 107.445C34.2367 107.507 34.3066 107.602 34.3382 107.711L36.6106 124.875C36.6265 125 36.5927 125.127 36.5164 125.228C36.4401 125.328 36.3274 125.395 36.2025 125.414H36.1561Z'
                  fill='#231F20'
                />
                <path
                  d='M108.445 136.661C118.409 136.661 126.485 128.573 126.485 118.597C126.485 108.62 118.409 100.532 108.445 100.532C98.4823 100.532 90.4056 108.62 90.4056 118.597C90.4056 128.573 98.4823 136.661 108.445 136.661Z'
                  fill='white'
                />
                <path
                  d='M108.445 100.541C112.015 100.54 115.505 101.598 118.473 103.583C121.442 105.568 123.755 108.391 125.121 111.693C126.487 114.995 126.844 118.629 126.147 122.134C125.45 125.64 123.73 128.86 121.204 131.386C118.679 133.912 115.462 135.631 111.96 136.326C108.459 137.02 104.83 136.659 101.534 135.288C98.2376 133.917 95.4215 131.597 93.4422 128.622C91.4629 125.648 90.4093 122.152 90.4148 118.578C90.4148 113.789 92.3145 109.197 95.6959 105.811C99.0773 102.425 103.663 100.523 108.445 100.523V100.541ZM108.445 99.594C104.687 99.594 101.013 100.711 97.8884 102.802C94.7639 104.894 92.3292 107.867 90.8926 111.345C89.456 114.822 89.082 118.649 89.818 122.339C90.5539 126.03 92.3667 129.419 95.027 132.078C97.6872 134.737 101.075 136.545 104.762 137.275C108.45 138.005 112.27 137.623 115.74 136.177C119.211 134.732 122.175 132.288 124.257 129.155C126.34 126.023 127.448 122.341 127.441 118.578C127.433 113.535 125.43 108.702 121.869 105.136C118.308 101.571 113.481 99.5643 108.445 99.5569V99.594Z'
                  fill='#231F20'
                />
                <path
                  d='M117.999 116.851H110.189V109.04C110.189 108.724 110.064 108.422 109.841 108.199C109.619 107.976 109.317 107.851 109.002 107.851H107.908C107.593 107.851 107.291 107.976 107.068 108.199C106.845 108.422 106.72 108.724 106.72 109.04V116.851H98.92C98.7634 116.849 98.608 116.879 98.4629 116.938C98.3178 116.998 98.1858 117.085 98.0746 117.195C97.9633 117.306 97.8751 117.437 97.8148 117.582C97.7546 117.727 97.7236 117.882 97.7236 118.039V119.154C97.7236 119.472 97.8496 119.776 98.074 120.001C98.2984 120.226 98.6027 120.352 98.92 120.352H106.72V128.163C106.72 128.319 106.751 128.473 106.811 128.618C106.87 128.762 106.958 128.893 107.068 129.003C107.178 129.114 107.309 129.201 107.453 129.261C107.597 129.321 107.752 129.352 107.908 129.352H109.021C109.335 129.352 109.637 129.226 109.86 129.003C110.083 128.78 110.208 128.478 110.208 128.163V120.352H118.017C118.174 120.352 118.329 120.321 118.474 120.261C118.618 120.2 118.75 120.112 118.86 120C118.97 119.889 119.058 119.757 119.117 119.612C119.176 119.466 119.206 119.311 119.204 119.154V118.039C119.204 117.882 119.173 117.726 119.112 117.58C119.052 117.435 118.962 117.303 118.85 117.192C118.738 117.081 118.605 116.994 118.459 116.936C118.313 116.877 118.156 116.848 117.999 116.851V116.851Z'
                  fill='#D1D3D4'
                />
                <path
                  d='M120.846 149.663H13.9518C8.18389 149.663 3.5081 154.345 3.5081 160.121V162.527C3.5081 168.302 8.18389 172.984 13.9518 172.984H120.846C126.614 172.984 131.29 168.302 131.29 162.527V160.121C131.29 154.345 126.614 149.663 120.846 149.663Z'
                  fill='white'
                />
                <path
                  d='M120.892 173.449H13.961C11.0665 173.446 8.29123 172.294 6.24449 170.244C4.19775 168.195 3.04681 165.416 3.04436 162.517V160.121C3.05418 157.228 4.20865 154.457 6.25486 152.415C8.30107 150.373 11.0722 149.227 13.961 149.227H120.892C123.785 149.229 126.557 150.381 128.602 152.429C130.647 154.476 131.797 157.253 131.8 160.149V162.545C131.793 165.438 130.64 168.21 128.596 170.254C126.551 172.297 123.781 173.446 120.892 173.449V173.449ZM13.961 150.156C11.3133 150.156 8.77396 151.208 6.9009 153.082C5.02783 154.956 3.97432 157.498 3.97186 160.149V162.545C3.97431 165.197 5.02753 167.74 6.90033 169.615C8.77313 171.491 11.3125 172.545 13.961 172.548H120.892C123.539 172.543 126.076 171.487 127.947 169.612C129.818 167.737 130.87 165.196 130.872 162.545V160.149C130.87 157.499 129.818 154.959 127.947 153.085C126.076 151.212 123.539 150.158 120.892 150.156H13.961Z'
                  fill='#D1D3D4'
                />
                <path
                  d='M109.085 167.431H25.7217C25.5987 167.431 25.4808 167.382 25.3938 167.295C25.3068 167.208 25.258 167.089 25.258 166.966C25.258 166.843 25.3068 166.725 25.3938 166.638C25.4808 166.551 25.5987 166.502 25.7217 166.502H109.085C109.208 166.504 109.324 166.554 109.411 166.641C109.497 166.727 109.547 166.844 109.549 166.966C109.549 167.089 109.5 167.208 109.413 167.295C109.326 167.382 109.208 167.431 109.085 167.431Z'
                  fill='#D1D3D4'
                />
                <path
                  d='M289.048 149.663H182.154C176.386 149.663 171.71 154.345 171.71 160.121V162.527C171.71 168.302 176.386 172.984 182.154 172.984H289.048C294.816 172.984 299.492 168.302 299.492 162.527V160.121C299.492 154.345 294.816 149.663 289.048 149.663Z'
                  fill='white'
                />
                <path
                  d='M289.039 173.449H182.154C179.26 173.446 176.486 172.294 174.441 170.244C172.395 168.194 171.246 165.415 171.246 162.517V160.121C171.256 157.23 172.41 154.46 174.454 152.419C176.498 150.377 179.267 149.229 182.154 149.227H289.039C291.933 149.227 294.708 150.377 296.755 152.425C298.802 154.473 299.953 157.251 299.956 160.149V162.545C299.946 165.439 298.792 168.211 296.746 170.254C294.7 172.298 291.929 173.446 289.039 173.449V173.449ZM182.154 150.156C179.508 150.158 176.971 151.212 175.1 153.085C173.229 154.959 172.176 157.499 172.174 160.149V162.545C172.176 165.196 173.228 167.737 175.099 169.612C176.97 171.487 179.507 172.543 182.154 172.548H289.039C291.688 172.545 294.227 171.491 296.1 169.615C297.972 167.74 299.026 165.197 299.028 162.545V160.149C299.026 157.498 297.972 154.956 296.099 153.082C294.226 151.208 291.687 150.156 289.039 150.156H182.154Z'
                  fill='#D1D3D4'
                />
                <path
                  d='M277.278 167.431H193.915C193.792 167.431 193.674 167.382 193.587 167.295C193.5 167.208 193.451 167.089 193.451 166.966C193.453 166.844 193.503 166.727 193.589 166.641C193.676 166.554 193.792 166.504 193.915 166.502H277.278C277.401 166.502 277.519 166.551 277.606 166.638C277.693 166.725 277.742 166.843 277.742 166.966C277.742 167.089 277.693 167.208 277.606 167.295C277.519 167.382 277.401 167.431 277.278 167.431Z'
                  fill='#D1D3D4'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;