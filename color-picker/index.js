import React from 'react'
import cn from 'classnames'
import LocaleReceiver from 'antd/es/locale-provider/LocaleReceiver'
import ColorPicker from './ColorPicker'
import './index.less'

export default function TntdSecondPage(props) {
  return (
    <LocaleReceiver componentName="ColorPicker">
      {(locale) => {
        return <ColorPicker locale={locale} {...props} />
      }}
    </LocaleReceiver>
  )
}
