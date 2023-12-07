import { Text, Rect } from '@antv/g6-react-node'
import { DeviceList } from '../../types'

const DeviceItem: React.FC<{ list: DeviceList }> = ({ list }) => {
  return list.map((item, i) => (
    <Rect
      key={i}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: [14, 0, 0, 0]
      }}
    >
      <Rect
        style={{
          fill: '#D7D7D7',
          radius: 10,
          padding: [5, 8],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fill: '#fff', fontSize: 12 }}>{item.operaType}</Text>
      </Rect>
      <Text style={{ fill: '#000', fontSize: 12, margin: [0, 8] }}>
        {item.deviceType.label} - {item.deviceList.label}
      </Text>
      <Rect
        style={{
          fill: '#EDF6FF',
          radius: 5,
          width: 33,
          height: 23,
          display: 'flex',
          padding: [5, 30],
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fill: '#3699FF', fontSize: 12 }}>
          {item.status.label}
        </Text>
      </Rect>
    </Rect>
  ))
}

export default DeviceItem
