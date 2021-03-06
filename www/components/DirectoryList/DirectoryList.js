import React from 'react'
import { VirtualScroll } from 'react-virtualized'
import 'react-virtualized/styles.css'
import './DirectoryList.styl'

class DirectoryList extends React.Component {
  renderItem ({index, isScrolling}) {
    let item = this.props.items[index]
    let isAndroid = this.props.isAndroid
    return (
      this.props.itemRenderer(item, index, isAndroid)
    )
  }
  render () {
    const headerAndFooterHeightCombined = 144 + 50
    const viewPortWidthMinusPadding = document.documentElement.clientWidth - 40
    const viewPortHeightMinusHeaderAndFooterHeights = document.documentElement.clientHeight - headerAndFooterHeightCombined
    return (
      <div className="DirectoryList DirectoryList__container">
        <VirtualScroll
          items={this.props.items}
          itemHeight={this.props.itemHeight}
          itemWidth={viewPortWidthMinusPadding}
          width={document.documentElement.clientWidth}
          height={viewPortHeightMinusHeaderAndFooterHeights}
          rowCount={this.props.items.length}
          rowHeight={this.props.itemHeight}
          rowRenderer={::this.renderItem}
        />
      </div>
    )
  }
}

DirectoryList.propTypes = {
  items: React.PropTypes.array,
  itemRenderer: React.PropTypes.func.isRequired,
  itemHeight: React.PropTypes.number.isRequired,
  isAndroid: React.PropTypes.bool.isRequired
}

export default DirectoryList
