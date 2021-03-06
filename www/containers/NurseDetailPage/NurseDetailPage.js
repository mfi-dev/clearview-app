/* global launchnavigator */

import React from 'react'
import BackLink from '../../components/BackLink'
import '../DoctorDetailPage/DoctorDetailPage.styl'
import './NurseDetailPage.styl'

class NurseDetailPage extends React.Component {

  renderTitle (item) {
    const title = item.FirstName + ' ' + item.LastName
    return (title)
  }

  render () {
    const item = JSON.parse(decodeURIComponent(this.props.params.item))
    const title = this.renderTitle(item)
    const addressString = item.Address + ' ' + item.City + ', ' + item.State + ' ' + item.Zip
    const errorReportLink = '#/error/' + encodeURIComponent(JSON.stringify(item))
    const userAgent = navigator.userAgent.toLowerCase()
    const telephoneLink = (userAgent.indexOf('android') > -1)
      ? 'tel:' + item.PhoneNumber
      : 'telprompt:' + item.PhoneNumber

    const smallPhone = (document.documentElement.clientHeight <= 480)
    const pageClass = (smallPhone)
      ? 'DoctorDetailPage NurseDetailPage DoctorDetailPage--small NurseDetailPage--small'
      : 'DoctorDetailPage NurseDetailPage'

    return (
      <div className={'Page ' + pageClass}>
        <header>
          <BackLink to="/nurses" text="Back" />
          <div className="NurseDetailPage__Icon"></div>
          <h1>{title}</h1>
        </header>
        <main>
          <div key={item._id}>
            <div className="DoctorDetailPage__Specialty">
              <h3>Certification</h3>
              <div>{item.Type}</div>
            </div>
            <div className="DoctorDetailPage__Address">
              <h3>Address</h3>
              <div>{item.PracticeName}</div>
              <div>{item.Address}</div>
              <div>{item.City}, {item.State} {item.Zip}</div>
              <div>
                <a className="Button Button--Map" onClick={function () { launchnavigator.navigate(addressString, {app: launchnavigator.APP.USER_SELECT}) }}>Map</a>
              </div>
            </div>
            <div>
              <div className="DoctorDetailPage__PhoneNumber">
                <h3>Phone</h3>
                {item.PhoneNumber}
                <div>
                  <a className="Button Button--Call" href={telephoneLink}>Call</a>
                </div>
              </div>
              <div className="DoctorDetailPage__FaxNumber">
                <h3>Fax</h3>
                {item.FaxNumber}
              </div>
            </div>
            <div className="DoctorDetailPage__UpdateRequestContainer">
              <span>Information out of date?</span>
              <a className="DoctorDetailPage__UpdateRequestLink" href={errorReportLink}>Request Update</a>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

NurseDetailPage.propTypes = {
  params: React.PropTypes.object.isRequired
}

export default NurseDetailPage
