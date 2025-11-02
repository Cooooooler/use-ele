---
group: Form
demo:
  cols: 2
---

# 基础使用

<code src="./demo/form/BaseForm.vue" title="基础表单示例"></code>

## 字段格式转换

:::info{title=字段格式转换}
使用场景：在某些场景下，需要将表单字段数组拼接为字符串，比如：`['name', 'name2']`拼接为`name1,name2`,或者将表单字符串切割为数组，比如：
`name1;,name2`切割为`['name1', 'name2']`

使用方法：

1. `['checkbox', ';']`：将数组拼接为字符串，默认使用`,`拼接符，这个场景下，会将`checkbox`字段拼接为`name1;name2`。
2. `['string', ';']`：将字符串切割为数组，默认使用`,`切割符，这个场景下，会将`string`字段按照`;`切割为`['name1', 'name2']`。
3. 如果有多个字段需要拼接或切割，写法为：` [[['checkbox'], ';'],[['string'], ';'],]`
   :::

<code
src="./demo/form/ArrayToStringFields.vue"
title="ArrayToStringFields"
description="表单字段数组映射字符串配置 默认使用`,`类型为`Array<[string[], string?] | string | string[]>`">
</code>

## 表单折叠相关

:::info{title=表单折叠相关}
使用场景：需要将表单折叠的情况下。

使用方法：

1. `showCollapseButton`属性控制是否显示折叠按钮
2. `collapsed`属性控制是否折叠
3. `collapsedRows`属性控制折叠的行数
4. `collapseTriggerResize`属性控制是否触发 resize 事件
   :::

<code
src="./demo/form/Collapse.vue"
title="collapsed"
description="类型为
`{showCollapseButton: boolean; collapsed: boolean; collapsedRows: number; collapseTriggerResize: boolean;}`">
</code>

### 紧凑模式

<code
src="./demo/form/Compact.vue"
title="compact"
description="紧凑模式">
</code>
