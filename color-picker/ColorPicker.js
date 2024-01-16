import { useState, useCallback } from 'react';
import { Popover, Icon } from 'antd';
// import { TwitterPicker } from 'react-color';
import cn from 'classnames';
import { get } from 'lodash';
import Sketch from './components/Sketch';
import imgSrc from './tip.svg';

export default function ColorPicker({
  value,
  onChange,
  visible: vs,
  allowClear,
  disabled,
  className
}) {
  const [visible, setVisible] = useState(vs);

  return (
    <Popover
      placement="bottomLeft"
      trigger="click"
      visible={visible && !disabled}
      onVisibleChange={setVisible}
      content={
        // <TwitterPicker
        //   color={value}
        //   onChangeComplete={(color) => {
        //     setVisible(false);
        //     onChange(get(color, 'hex', ''));
        //   }}
        // />
        <Sketch />
      }
      overlayClassName="color-picker-pop"
    >
      <span
        className={cn('color-picker', className, {
          'color-picker-show': !!value,
          'color-picker-disabled': disabled
        })}
        style={{
          background: value || '#fff'
        }}
        onClick={() => setVisible(true)}
      >
        <span className="placeholder">请选择颜色</span>
        <span className="img">
          <img src={imgSrc} />
        </span>
        {allowClear && !!value && !disabled && (
          <span
            className="color-picker-clear"
            onClick={(e) => {
              e.stopPropagation();
              onChange();
            }}
          >
            <Icon type="close" />
          </span>
        )}
      </span>
    </Popover>
  );
}
