/**
 * 更新 CSS 变量的函数
 * @param variables 要更新的 CSS 变量与其新值的映射
 * @param id 样式元素的ID
 * @param important 是否使用 !important 提高优先级
 */
function updateCSSVariables(
  variables: { [key: string]: string },
  id = '__vben-styles__',
  important = false,
): void {
  // 获取或创建内联样式表元素
  const styleElement =
    document.querySelector(`#${id}`) || document.createElement('style');

  styleElement.id = id;

  // 构建要更新的 CSS 变量的样式文本
  let cssText = ':root {';
  for (const key in variables) {
    if (Object.prototype.hasOwnProperty.call(variables, key)) {
      cssText += `${key}: ${variables[key]}${important ? ' !important' : ''};`;
    }
  }
  cssText += '}';

  // 将样式文本赋值给内联样式表
  styleElement.textContent = cssText;

  // 将内联样式表添加到文档头部
  if (!document.querySelector(`#${id}`)) {
    setTimeout(() => {
      document.head.append(styleElement);
    });
  }
}

/**
 * 更新高优先级 CSS 变量的函数
 * 使用多种方法确保最高优先级：!important + 更高的特异性 + 延迟插入
 * @param variables 要更新的 CSS 变量与其新值的映射
 * @param id 样式元素的ID
 */
function updateHighPriorityCSSVariables(
  variables: { [key: string]: string },
  id = '__vben-high-priority-styles__',
): void {
  // 移除旧的样式元素
  const existingElement = document.querySelector(`#${id}`);
  if (existingElement) {
    existingElement.remove();
  }

  // 创建新的样式元素
  const styleElement = document.createElement('style');
  styleElement.id = id;

  // 使用更高的特异性和!important
  let cssText = `
    html:root,
    :root {
  `;

  for (const key in variables) {
    if (Object.prototype.hasOwnProperty.call(variables, key)) {
      cssText += `${key}: ${variables[key]} !important;\n`;
    }
  }

  cssText += '}';

  styleElement.textContent = cssText;

  // 延迟插入到head的最后，确保覆盖其他样式
  setTimeout(() => {
    document.head.appendChild(styleElement);
  }, 0);
}

/**
 * 强制更新CSS变量到内联样式（最高优先级）
 * @param variables 要更新的 CSS 变量与其新值的映射
 * @param targetElement 目标元素，默认为document.documentElement
 */
function forceUpdateCSSVariables(
  variables: { [key: string]: string },
  targetElement: HTMLElement = document.documentElement,
): void {
  for (const key in variables) {
    if (Object.prototype.hasOwnProperty.call(variables, key)) {
      targetElement.style.setProperty(key, variables[key], 'important');
    }
  }
}

export {
  forceUpdateCSSVariables,
  updateCSSVariables,
  updateHighPriorityCSSVariables,
};
