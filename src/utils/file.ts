/**
 * 获取图片对象
 * @param  {string}  src 图片地址
 * @return {Promise}     图片加载后返回图片对象
 */
export const loadImg = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })

/**
 * 批量获取图片对象
 * @param  {string[]} srcs 图片地址列表
 * @return {Promise}       图片加载后返回图片对象列表
 */
export const loadImgBatch = (srcs: string[]) => Promise.all(srcs.map(loadImg))

/**
 * 文件组转文件数组
 * @param  {FileList} files 文件流
 */
export const getFileList = (files: FileList) => {
  const fileList: File[] = []
  for (let i = 0, file; (file = fileList[i++]); ) {
    fileList.push(file)
  }
  return fileList
}

/**
 * 文件转Base64
 * @param  {File}    file 待转化文件
 * @return {Promise}      转化后返回Base64
 */
export const fileToBase64 = (file: File): Promise<string> =>
  new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.readAsDataURL(file)
  })

/**
 * 批量文件转base64
 * @param  {FileList} files 待转化文件列表
 * @return {Promise}        转化后返回Base64列表
 */
export const fileToBase64Batch = (files: FileList) =>
  Promise.all(getFileList(files).map(fileToBase64))

/**
 * Base64转文件
 * @param  {string}  dataUrl           待转化Base64字符串
 * @param  {[type]}  filename = 'file' 转化后文件名
 * @return {Promise}                   转化后返回File对象
 */
export const base64ToFile = async (dataUrl: string, filename = 'file') => {
  const data: string[] = dataUrl.split(',')
  const type: string = data[0].slice(5, -7)
  const ext: string = type.split('/')[1]
  const bstr: string = atob(data[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${ext}`, {
    type
  })
}

/**
 * 批量Base64转文件
 * @param {string[]} dataUrls  待转化Base64字符串列表
 * @param {string[]} filenames 转化后文件名列表
 * @return {Promise}           转化后返回File对象列表
 */
export const base64ToFileBatch = (dataUrls: string[], filenames?: string[]) => {
  return Promise.all(
    dataUrls.map((dataUrl, index) => {
      return base64ToFile(dataUrl, filenames ? filenames[index] : undefined)
    })
  )
}

type TImg = string | File
interface ICropConfig {
  quality?: number // 图片质量
  x?: number // 裁剪起点
  y?: number // 裁剪起点
  width?: number // 裁剪尺寸
  height?: number // 裁剪尺寸
  zoom?: number // 缩放
}

/**
 * 图片裁剪
 * 如配置 quality 图片质量，图片将自动转为 jpg 格式
 * @param  {string | File}        image   base64 | 文件对象
 * @param  {ICropConfig}          config  裁剪配置
 * @return {Promise}                      裁剪后返回base64
 */
export const crop = async (image: TImg, config: ICropConfig) => {
  const base64 = image instanceof File ? await fileToBase64(image) : image
  const img = await loadImg(base64)
  const {
    quality,
    x = 0,
    y = 0,
    width = img.width,
    height = img.height,
    zoom = 1
  } = config
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  ctx!.drawImage(
    img,
    x,
    y,
    width,
    height,
    0,
    0,
    (canvas.width = width * zoom),
    (canvas.height = height * zoom)
  )
  return canvas.toDataURL(
    !quality || quality === 1
      ? base64.split(',')[0].slice(5, -7)
      : 'image/jpeg',
    quality
  )
}

/**
 * 批量图片裁剪
 * 如配置 quality 图片质量，图片将自动转为 jpg 格式
 * @param  {TImg[]}      images base64 | 文件对象 列表
 * @param  {ICropConfig} config 裁剪配置
 * @return {Promise}            裁剪后返回base64列表
 */
export const cropBatch = (images: TImg[], config: ICropConfig) => {
  return Promise.all(images.map(image => crop(image, config)))
}
