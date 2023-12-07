import {
  LayoutConfig,
  ShapeOptions,
  TreeGraph,
  registerEdge,
  registerNode
} from '@antv/g6'
import React, { useMemo, useRef, useEffect } from 'react'
import { createNodeFromReact } from '@antv/g6-react-node'
import { CustomModel, EEdgeType, EFlowItemType, ENodeType } from '../types'
import FlowItem from './FlowItem'
import { threeData } from '../data/threeModel'
import Normal from './FlowItem/Tag'
import Stop from './FlowItem/Stop'

const Three: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const flag = useRef(true)

  const layout: LayoutConfig = {
    type: 'compactBox',
    getId(d: CustomModel) {
      return d.id
    },
    getHeight(d: CustomModel) {
      const coe = d.data?.heightCoe
      return 20 * (coe ?? 1)
    },
    getWidth() {
      return 16
    },
    /**
     * 上下间距
     */
    getVGap() {
      return 40
    },
    /**
     * 左右分支间距
     */
    getHGap() {
      return 200
    }
  }

  const data = useMemo<CustomModel>(() => threeData, [])

  const drawEdge = (): ShapeOptions => {
    return {
      draw(cfg, group) {
        const startPoint = cfg.startPoint!
        const endPoint = cfg.endPoint!
        const shape = group.addShape('path', {
          attrs: {
            stroke: '#333',
            path: [
              ['M', startPoint.x, startPoint.y],
              ['L', startPoint.x, (startPoint.y + endPoint.y) / 2],
              ['L', endPoint.x, (startPoint.y + endPoint.y) / 2],
              ['L', endPoint.x, endPoint.y]
            ]
          },
          name: 'path-shape'
        })
        return shape
      },
      afterDraw(cfg, group) {
        if (!group) return
        // 获取图形组中的第一个图形，在这里就是边的路径图形
        const shape = group.get('children')[0]
        // 获取路径图形的中点坐标
        const midPoint = shape.getPoint(0.5)
        // 在中点增加一个矩形，注意矩形的原点在其左上角
        const width = 102

        // 排除标签
        const targetNode = cfg?.targetNode as {
          _cfg: { currentShape: ENodeType }
        }
        if (targetNode._cfg.currentShape === ENodeType.XmlTag) {
          return
        }

        group.addShape('rect', {
          attrs: {
            width,
            height: 36,
            fill: '#fff',
            stroke: '#C0C0C0',
            lineDash: [2],
            radius: 18,
            // x 和 y 分别减去 width / 2 与 height / 2，使矩形中心在 midPoint 上
            x: midPoint.x - width / 2,
            y: midPoint.y - 5
          },
          name: 'mid-point-edge-rect' // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
        })
        group.addShape('text', {
          attrs: {
            height: 36,
            text: 'Triggered',
            fill: '#A1A5B7',
            fontSize: 12,
            x: midPoint.x - 26,
            y: midPoint.y + 20
          }
        })
      }
    }
  }

  const register = () => {
    // 注册节点
    registerNode(ENodeType.XmlFlow, createNodeFromReact(FlowItem as never))
    registerNode(ENodeType.XmlTag, createNodeFromReact(Normal as never))
    registerNode(ENodeType.XmlStop, createNodeFromReact(Stop as never))
    // 注册边
    registerEdge(EEdgeType.Hvh, drawEdge())
  }

  useEffect(() => {
    if (!ref.current || !flag.current) return

    const graph = new TreeGraph({
      container: ref.current,
      width: 800,
      height: 700,
      linkCenter: true,
      modes: {
        default: ['drag-node', 'drag-canvas', 'zoom-canvas']
      },
      layout,
      animate: false,
      defaultNode: {
        type: 'rect'
      },
      defaultEdge: {
        type: EEdgeType.Hvh
      }
    })

    register()

    graph.data(data)
    graph.render()
    graph.fitView()

    graph.on('node:click', (e) => {
      const model = e.item?._cfg?.model as CustomModel
      const oldModel = { ...model }
      if (model.data && model.data.type === EFlowItemType.Add) {
        model.label = model.id
        model.data = undefined
        model.style = undefined
        oldModel.id = oldModel.id + '-1'
        model.children = [oldModel]

        graph.changeData(data, true)
        graph.fitView()
      }
    })

    flag.current = false
  }, [])

  return (
    <div
      style={{ height: '100%', textAlign: 'center', border: '1px solid red' }}
      ref={ref}
    ></div>
  )
}

export default Three
