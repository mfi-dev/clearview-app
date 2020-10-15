import React from 'react'
import { Link } from 'react-router'
import FastClick from 'fastclick'
import Logo from '../../components/Logo'
import './HomePage.styl'

class HomePage extends React.Component {

  componentDidMount () {
    FastClick.attach(document.body)
  }

  renderLink (url, title) {
    // a bug in older versions of safari's web view makes viewport height change over time
    // so we need to set the menu links height with javascript here. :(
    const menuItemHeight = (document.documentElement.clientHeight - 24) * 0.18
    const menuItemMarginBottom = (document.documentElement.clientHeight - 24) * 0.02
    const menuItemStyles = {
      marginBottom: menuItemMarginBottom,
      height: menuItemHeight
    }
    const linkText = (title === 'Nurses') ? 'Advanced Practice Providers' : title
    return (
      <Link
        to={url}
        className="Menu__Link"
        activeClassName="Menu__Link--Active">
        <div className="Menu__LinkItem__Container" style={menuItemStyles}>
          <div className="Menu__LinkItem">
            <div aria-hidden="true" className={'Menu__LinkItem__Icon Menu__LinkItem__Icon--' + title}></div>
            <div className="Menu__LinkItem__Title">{linkText}</div>
          </div>
        </div>
      </Link>
    )
  }

  render () {
    const pageHeight = document.documentElement.clientHeight - 50
    const doctorLink = this.renderLink('/doctors', 'Doctors')
    const nurseLink = this.renderLink('/nurses', 'Nurses')
    // const hospitalLink = this.renderLink('/hospitals', 'Hospitals')
    const pharmacyLink = this.renderLink('/pharmacies', 'Pharmacies')
    return (
      <div className="HomePage" style={{height: pageHeight}}>
        <Logo />
        <nav className="Menu">
          {doctorLink}
          {nurseLink}
          {pharmacyLink}
        </nav>
      </div>
    )
  }
}

export default HomePage
