import Coco from './axios.config'

export const ApiTest = () => {
  return Coco.get(
    '/api/a',
    {
      params: {
        ID: 12345
      }
    }
  )
}
