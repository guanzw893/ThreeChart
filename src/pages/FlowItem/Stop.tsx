import { Group, Rect, Text } from '@antv/g6-react-node'
import { RectStyle } from '@antv/g6-react-node/dist/ReactNode/Shape/Rect'
import { G6ReactFC } from '../../types'

const Normal: G6ReactFC = ({ cfg: { data, style } }) => {
  return (
    <Group>
      <Rect
        style={
          {
            width: 325,
            display: 'flex',
            alignItems: 'center',
            ...style
          } as RectStyle
        }
      >
        <Rect
          style={{
            fill: '#A1A5B7',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            radius: 35,
            width: 241,
            height: 72,
            shadowColor: '#eee',
            shadowBlur: 30
          }}
        >
          <Text
            style={{
              fill: '#fff',
              fontSize: 18,
              fontWeight: 'bold'
            }}
          >
            {data?.title}
          </Text>
        </Rect>
      </Rect>
    </Group>
  )
}

export default Normal
