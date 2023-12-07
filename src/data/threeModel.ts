import { RectStyle } from '@antv/g6-react-node/dist/ReactNode/Shape/Rect'
import { CustomModel, EFlowItemType, ENodeType } from '../types'

export const threeData: CustomModel = {
  id: 'root',
  label: 'root',
  type: ENodeType.XmlFlow,
  data: {
    title: 'Ammonia Level',
    heightCoe: 10,
    type: EFlowItemType.DeviceStatus,
    list: [
      {
        deviceType: {
          label: 'Ammonia Sensor',
          value: 'Ammonia Sensor'
        },
        status: {
          label: 'Medium',
          value: 2
        },
        deviceList: {
          label: '8B-901',
          value: '8B-901'
        },
        operaType: 'AND'
      }
    ]
  },
  children: [
    {
      id: 'c1',
      label: 'c1',
      type: ENodeType.XmlFlow,
      data: {
        title: 'Condition',
        heightCoe: 10,
        type: EFlowItemType.Condition,
        select: {
          label: 'Ammonia Level',
          value: 'Ammonia Level'
        },
        list: [
          {
            deviceType: {
              label: 'Ammonia Sensor',
              value: 'Ammonia Sensor'
            },
            status: {
              label: 'Medium',
              value: 2
            },
            deviceList: {
              label: '8B-90',
              value: '8B-90'
            },
            operaType: 'AND'
          },
          {
            deviceType: {
              label: 'Ammonia Sensor',
              value: 'Ammonia Sensor'
            },
            status: {
              label: 'Medium',
              value: 2
            },
            deviceList: {
              label: '8B-901',
              value: '8B-901'
            },
            operaType: 'OR'
          }
        ]
      },
      children: [
        {
          id: 'c1-1',
          type: ENodeType.XmlTag,
          data: {
            title: 'Normal',
            heightCoe: 10,
            type: EFlowItemType.Normal,
            titleStyle: {
              fontSize: 18
            } as RectStyle
          },
          children: [
            {
              id: 'c1-1-1',
              label: 'c1-1-1',
              type: ENodeType.XmlFlow,
              data: {
                title: 'Robot',
                heightCoe: 10,
                type: EFlowItemType.Robot,
                list: [
                  {
                    deviceType: {
                      label: 'Ammonia Sensor',
                      value: 'Ammonia Sensor'
                    },
                    status: {
                      label: 'Medium',
                      value: 2
                    },
                    deviceList: {
                      label: '8B-90',
                      value: '8B-90'
                    },
                    operaType: 'AND'
                  },
                  {
                    deviceType: {
                      label: 'Ammonia Sensor',
                      value: 'Ammonia Sensor'
                    },
                    status: {
                      label: 'Medium',
                      value: 2
                    },
                    deviceList: {
                      label: '8B-901',
                      value: '8B-901'
                    },
                    operaType: 'OR'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'c1-2',
          type: ENodeType.XmlTag,
          data: {
            title: 'High',
            heightCoe: 10,
            type: EFlowItemType.High
          },
          children: [
            {
              id: 'c1-2-1',
              label: 'c1-2-1',
              type: ENodeType.XmlFlow,
              data: {
                title: 'Robot',
                heightCoe: 10,
                type: EFlowItemType.Robot,
                list: [
                  {
                    deviceType: {
                      label: 'Ammonia Sensor',
                      value: 'Ammonia Sensor'
                    },
                    status: {
                      label: 'Medium',
                      value: 2
                    },
                    deviceList: {
                      label: '8B-90',
                      value: '8B-90'
                    },
                    operaType: 'AND'
                  },
                  {
                    deviceType: {
                      label: 'Ammonia Sensor',
                      value: 'Ammonia Sensor'
                    },
                    status: {
                      label: 'Medium',
                      value: 2
                    },
                    deviceList: {
                      label: '8B-901',
                      value: '8B-901'
                    },
                    operaType: 'OR'
                  }
                ]
              },
              children: [
                {
                  id: 'c1-2-1-1',
                  label: 'c1-2-1-1',
                  type: ENodeType.XmlStop,
                  data: {
                    title: 'Stop Automation',
                    type: EFlowItemType.Stop
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'c1-3',
          type: ENodeType.XmlTag,
          data: {
            title: 'Medium',
            heightCoe: 10,
            type: EFlowItemType.Medium
          },
          children: [
            {
              id: 'c1-3-1',
              label: 'c1-3-1',
              type: ENodeType.XmlFlow,
              data: {
                title: 'Robot',
                heightCoe: 10,
                type: EFlowItemType.Robot,
                list: [
                  {
                    deviceType: {
                      label: 'Ammonia Sensor',
                      value: 'Ammonia Sensor'
                    },
                    status: {
                      label: 'Medium',
                      value: 2
                    },
                    deviceList: {
                      label: '8B-901',
                      value: '8B-901'
                    },
                    operaType: 'OR'
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}
