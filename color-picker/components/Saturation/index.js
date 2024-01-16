import React, { useCallback, useEffect, useRef } from 'react'
// import reactCSS from 'reactcss'
// import throttle from 'lodash/throttle'
import * as saturation from '../../helpers/saturation'
import './index.less'

// export class Saturation extends (PureComponent || Component) {
//   constructor(props) {
//     super(props)

//     this.throttle = throttle((fn, data, e) => {
//       fn(data, e)
//     }, 50)
//   }

//   componentWillUnmount() {
//     this.throttle.cancel()
//     this.unbindEventListeners()
//   }

//   getContainerRenderWindow() {
//     const { container } = this
//     let renderWindow = window
//     while (!renderWindow.document.contains(container) && renderWindow.parent !== renderWindow) {
//       renderWindow = renderWindow.parent
//     }
//     return renderWindow
//   }

//   handleChange = (e) => {
//     typeof this.props.onChange === 'function' && this.throttle(
//       this.props.onChange,
//       saturation.calculateChange(e, this.props.hsl, this.container),
//       e,
//     )
//   }

//   handleMouseDown = (e) => {
//     this.handleChange(e)
//     const renderWindow = this.getContainerRenderWindow()
//     renderWindow.addEventListener('mousemove', this.handleChange)
//     renderWindow.addEventListener('mouseup', this.handleMouseUp)
//   }

//   handleMouseUp = () => {
//     this.unbindEventListeners()
//   }

//   unbindEventListeners() {
//     const renderWindow = this.getContainerRenderWindow()
//     renderWindow.removeEventListener('mousemove', this.handleChange)
//     renderWindow.removeEventListener('mouseup', this.handleMouseUp)
//   }

//   render() {
//     const { color, white, black, pointer, circle } = this.props.style || {}
//     const styles = reactCSS({
//       'default': {
//         color: {
//           absolute: '0px 0px 0px 0px',
//           background: `hsl(${ this.props.hsl.h },100%, 50%)`,
//           borderRadius: this.props.radius,
//         },
//         white: {
//           absolute: '0px 0px 0px 0px',
//           borderRadius: this.props.radius,
//         },
//         black: {
//           absolute: '0px 0px 0px 0px',
//           boxShadow: this.props.shadow,
//           borderRadius: this.props.radius,
//         },
//         pointer: {
//           position: 'absolute',
//           top: `${ -(this.props.hsv.v * 100) + 100 }%`,
//           left: `${ this.props.hsv.s * 100 }%`,
//           cursor: 'default',
//         },
//         circle: {
//           width: '4px',
//           height: '4px',
//           boxShadow: `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
//             0 0 1px 2px rgba(0,0,0,.4)`,
//           borderRadius: '50%',
//           cursor: 'hand',
//           transform: 'translate(-2px, -2px)',
//         },
//       },
//       'custom': {
//         color,
//         white,
//         black,
//         pointer,
//         circle,
//       },
//     }, { 'custom': !!this.props.style })

//     return (
//       <div
//         style={ styles.color }
//         ref={ container => this.container = container }
//         onMouseDown={ this.handleMouseDown }
//         onTouchMove={ this.handleChange }
//         onTouchStart={ this.handleChange }
//       >
//         <style>{`

//         `}</style>
//         <div style={ styles.white } className="saturation-white">
//           <div style={ styles.black } className="saturation-black" />
//           <div style={ styles.pointer }>
//             { this.props.pointer ? (
//               <this.props.pointer { ...this.props } />
//             ) : (
//               <div style={ styles.circle } />
//             ) }
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default function Saturation({ style, shadow, hsl, hsv }) {
  const thisThrottle = useRef(
    throttle((fn, data, e) => {
      fn(data, e)
    }, 50)
  )
  const container = useRef()

  const { color, white, black, pointer, circle } = style || {}

  const getContainerRenderWindow = useCallback(() => {
    let renderWindow = window
    while (
      !renderWindow.document.contains(container.current) &&
      renderWindow.parent !== renderWindow
    ) {
      renderWindow = renderWindow.parent
    }
    return renderWindow
  }, [])

  const unbindEventListeners = useCallback(() => {
    const renderWindow = getContainerRenderWindow()
    renderWindow.removeEventListener('mousemove', handleChange)
    renderWindow.removeEventListener('mouseup', handleMouseUp)
  }, [])

  const handleChange = useCallback(() => {
    typeof onChange === 'function' &&
      thisThrottle.current(onChange, saturation.calculateChange(e, hsl, container.current), e)
  }, [])

  const handleMouseDown = useCallback(() => {
    handleChange(e)
    const renderWindow = getContainerRenderWindow()
    renderWindow.addEventListener('mousemove', handleChange)
    renderWindow.addEventListener('mouseup', handleMouseUp)
  }, [])

  const handleMouseUp = useCallback(() => {
    unbindEventListeners()
  }, [])

  useEffect(() => {
    return () => {
      thisThrottle.current.cancel()
      unbindEventListeners()
    }
  }, [unbindEventListeners])

  return (
    <div className="saturation-box">
      <div
        style={{ background: `hsl(${hsl?.h},100%, 50%)` }}
        className="saturation-inner"
        ref={container}
        onMouseDown={handleMouseDown}
        onTouchMove={handleChange}
        onTouchStart={handleChange}
      >
        <div className="saturation-white">
          <div style={{ boxShadow: shadow }} className="saturation-black" />
          <div
            style={{
              top: `${-(hsv?.v * 100) + 100}%`,
              left: `${hsv?.s * 100}%`,
            }}
            className="saturation-pointer"
          >
            <div className="saturation-pointer-circle" />
          </div>
        </div>
      </div>
    </div>
  )
}
