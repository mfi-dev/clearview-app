import React from 'react'
import getRowColor from '../../helpers/getRowColor'
import './NurseListItem.styl'

class NurseListItem extends React.Component {
  render () {
    const {nurse, index} = this.props
    const itemLink = '#/nurses/' + encodeURIComponent(JSON.stringify(nurse))
    const nurseName = nurse.LastName + ', ' + nurse.FirstName
    const backgroundColor = getRowColor(index)
    const telephoneLink = (this.props.isAndroid)
      ? 'tel:' + nurse.PhoneNumber
      : 'telprompt:' + nurse.PhoneNumber
    return (
      <div className="NurseListItem__Container" style={{backgroundColor: backgroundColor}}>
        <div className="NurseListItem">
          <div className="NurseListItem--Name">{nurseName}</div>
          <div className="NurseListItem--Type">{nurse.Type}</div>
          <div className="NurseListItem--PracticeName">{nurse.PracticeName}</div>
          <div className="NurseListItem--PhoneNumber">{nurse.PhoneNumber}</div>
          <div className="NurseListItem__Links">
            <div>
              <a className="Button Button--Call" href={telephoneLink}>Call</a>
            </div>
            <div>
              <a
                className="Button Button--MoreInfo"
                href={itemLink}>
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

NurseListItem.propTypes = {
  nurse: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
  isAndroid: React.PropTypes.bool.isRequired
}

export default NurseListItem
