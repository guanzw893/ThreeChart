export const getThreeData = async () => {
  return await fetch('/src/json/algorithm-category.json').then((res) =>
    res.json()
  )
}
