import { Rect, Text } from '@antv/g6-react-node'
import { DeviceList, Option } from '../../types'
import DeviceItem from './DeviceItem'

const Condition: React.FC<{ select: Option; list: DeviceList }> = ({
  select,
  list
}) => {
  return (
    <Rect style={{}}>
      <Text style={{ fill: '#000', margin: [20, 0, 0, 0] }}>
        {select.label}
      </Text>
      {DeviceItem({ list })}
    </Rect>
  )
}

export default Condition
