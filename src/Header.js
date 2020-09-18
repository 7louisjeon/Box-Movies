import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import './Header.css'
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Avatar } from "@material-ui/core"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__icon'
          src='https://lh3.googleusercontent.com/LS5EgtlXIpuej-bm7Nfn0iiHxiT_2ggFVRPoxEDxgdmzhL-k8XNtik3Mtg0bmuKjXIG1kTLutk3fdou_5PvTr0fp_t-5u9G9j1dx2seFtXS6kJkYgeTE-3Lj_X5SVvWTnDi3vYlJInMf85fSRXMelnXB_HrfUey1OpWY4ez9EG2OGd1CGFE-bHSDDwj1swDvTegJJhzOpS4nsgmFyoaYqvHo9rrv4tq-ZK35-ZZoN0-607KWQCfoWqn4uTe53mzg1FqAZNl-cX1Jt7KjIe2ucC5tHaac05IZg6LC6eQo59bVdehr-_vBnhGa_5GuqpCrHPN8BArk7ygiVAA7aEo-QT7-cOa0XQVl5fUWsK3Z1iv4ngvi2gsVkfgg-s8S9VjBEdR_Fc4t4Om1I7rIdRXigAYymMryxL-tGubCql0qFzLb_AQB0MfavJ-jW6bhX73mCCqvdyO3rj234eYmUi7Ka-rr-s9MSdTh35-re8j5nAdW9uZZq90J6S_MWNBPCzE0zq4PXKRymOTthdozAU7VI2udB-Zfc8lpvtMqME8X2GF5BCKPNzbHjcqeSjm7llf9GkYBOu3FF7CofaqTyWx_81CUndiXI-fSdNnKQtoXrE4lhg0fSX4s_G7s1zPo3SQ0ZUcMcMBvitoxQir8r8j4A-75T8y6QY_KZ4OZND8N9F5PNUibrjtiF50N-K2B=w1050-h600-no?authuser=0'
          alt=''
        />
      </Link>
      <div className='header__center'>
        <input type='text' style={{ backgroundColor: "transparent" }} />
        <SearchIcon />
      </div>

      <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header
