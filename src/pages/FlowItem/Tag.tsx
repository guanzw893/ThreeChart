import { Group, Rect, Text } from '@antv/g6-react-node'
import { RectStyle } from '@antv/g6-react-node/dist/ReactNode/Shape/Rect'
import { EFlowItemType, G6ReactFC } from '../../types'

const typeColor = {
  [EFlowItemType.Normal]: ['#5E6278', '#E4E6EF'],
  [EFlowItemType.Medium]: ['#5E6278', '#E4E6EF'],
  [EFlowItemType.High]: ['#F1416C', '#FFF5F8']
}

const Normal: G6ReactFC = ({ cfg: { data, style } }) => {
  const color = typeColor[data?.type as EFlowItemType.Normal]

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
            padding: [10, 18],
            radius: 6,
            fill: '#fff',
            stroke: '#ddd',
            shadowColor: '#eee',
            shadowBlur: 30
          }}
        >
          <Rect
            style={{
              fill: color[1],
              padding: [6, 12],
              radius: 6
            }}
          >
            <Text
              style={{
                fill: color[0],
                fontSize: 18,
                fontWeight: 'bold'
              }}
            >
              {data?.title}
            </Text>
          </Rect>
        </Rect>
      </Rect>
    </Group>
  )
}

export default Normal
