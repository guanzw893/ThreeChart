import { Group, Rect, Text } from '@antv/g6-react-node'
import { RectStyle } from '@antv/g6-react-node/dist/ReactNode/Shape/Rect'

const Container: React.FC<{
  title?: string
  style?: RectStyle
  titleStyle?: RectStyle
  children: React.ReactNode
}> = (props) => {
  const style: RectStyle = {
    fill: '#fff',
    stroke: '#ddd',
    shadowColor: '#eee',
    shadowBlur: 30,
    radius: [8],
    padding: [25, 25],
    width: 325,
    ...(props.style as RectStyle)
  }

  return (
    <Group>
      <Rect style={style}>
        {props.title ? (
          <Text style={{ fill: '#000', fontSize: 16, ...props.titleStyle }}>
            {props.title}
          </Text>
        ) : (
          ''
        )}
        {props.children}
      </Rect>
    </Group>
  )
}

export default Container
