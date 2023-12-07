import { TreeGraphData } from '@antv/g6'
import { RectStyle } from '@antv/g6-react-node/dist/ReactNode/Shape/Rect'

export enum ENodeType {
  'XmlFlow' = 'xml-flow',
  'XmlTag' = 'xml-tag',
  'XmlStop' = 'xml-stop'
}

export enum EEdgeType {
  'Hvh' = 'hvh'
}

export enum EFlowItemType {
  'DeviceStatus' = 'device-status',
  'Robot' = 'robot',
  'Condition' = 'condition',
  'Stop' = 'stop',
  'Add' = 'add',
  'Normal' = 'normal',
  'High' = 'high',
  'Medium' = 'medium'
}

export type Option = {
  label: string
  value: string | number
}

export type DeviceItem = {
  deviceType: Option
  status: Option
  deviceList: Option
  operaType: 'AND' | 'OR'
}

export type DeviceList = DeviceItem[]

export type CustomModel = TreeGraphData & {
  data?: {
    type?: EFlowItemType
    list: DeviceList
    heightCoe?: number
    title?: string
    titleStyle?: RectStyle
    /**
     * Condition
     */
    select?: Option
  }
}

export type G6ReactFC = React.FC<{
  cfg: CustomModel
}>
