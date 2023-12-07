import { RectStyle } from '@antv/g6-react-node/dist/ReactNode/Shape/Rect'
import { EFlowItemType, G6ReactFC } from '../../types'
import Container from './Container'
import DeviceItem from './DeviceItem'
import Condition from './Condition'

const FlowItem: G6ReactFC = ({ cfg: { data, style } }) => {
  const renderRect = () => {
    if (!data) return

    if (
      data.type === EFlowItemType.DeviceStatus ||
      data.type === EFlowItemType.Robot
    ) {
      return DeviceItem({ list: data.list })
    } else if (data.type === EFlowItemType.Condition) {
      return Condition({ select: data.select!, list: data.list })
    }
  }

  return (
    <Container
      title={data?.title}
      titleStyle={data?.titleStyle}
      style={style as RectStyle}
    >
      {renderRect()}
    </Container>
  )
}

export default FlowItem
