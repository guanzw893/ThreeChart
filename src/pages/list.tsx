import { Graph, GraphData, registerEdge } from '@antv/g6'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const List: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const flag = useRef(true)
  const [canvasStyle, setCanvasStyle] = useState<{
    width: number
    height: number
  }>()

  const data = useMemo<GraphData>(
    () => ({
      nodes: [
        {
          id: 'node1',
          label: 'Circle1',
          x: 500,
          y: 100
        },
        {
          id: 'node2',
          color: 'red',
          x: 500,
          y: 200
        },
        { id: 'node3', x: 400, y: 300 },
        { id: 'node4', x: 600, y: 300 }
      ],
      edges: [
        { id: 'edge1', source: 'node1', type: 'hvh', target: 'node2' },
        { id: 'edge2', source: 'node2', type: 'hvh', target: 'node3' },
        { id: 'edge3', source: 'node2', type: 'hvh', target: 'node4' }
      ]
    }),
    []
  )

  const handleResize = useCallback(() => {
    setCanvasStyle({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  useEffect(() => {
    if (!ref.current || !canvasStyle || !flag.current) return

    const graph = new Graph({
      container: ref.current,
      width: canvasStyle.width,
      height: canvasStyle.height,
      modes: {
        default: ['drag-node', 'drag-canvas', 'zoom-canvas']
      },
      defaultNode: {
        type: 'rect',
        style: {
          width: 100,
          height: 40
        }
      }
    })

    registerEdge('hvh', {
      draw(cfg, group) {
        console.log('cfg ==> ', cfg)
        const startPoint = cfg.startPoint!
        const endPoint = cfg.endPoint!
        const shape = group.addShape('path', {
          attrs: {
            stroke: '#333',
            path: [
              ['M', startPoint.x, startPoint.y],
              ['L', endPoint.x, startPoint.y], // 三分之一处
              ['L', endPoint.x, endPoint.y] // 三分之二处
              // ['L', endPoint.x, endPoint.y]
            ]
          },
          name: 'path-shape'
        })
        return shape
      }
    })
    graph.data(data)
    graph.render()

    flag.current = false
  }, [data, canvasStyle])

  return <div ref={ref}></div>
}

export default List
