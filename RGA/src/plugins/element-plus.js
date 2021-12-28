import { ElButton, ElCard, ElContainer, ElRadioGroup, ElRadio, ElRow, ElCol, ElTag, ElInput } from 'element-plus'
const plugins = [ElButton, ElCard,ElContainer,ElRadioGroup, ElRadio, ElRow, ElCol, ElTag,ElInput]

export default app => {
    // app.use(ElementPlus)
    plugins.forEach(plugin => {
        app.use(plugin)
    })
}