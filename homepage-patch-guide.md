# 主页添加 Project 按钮指南

## 需要修改的文件

### 1. src/components/main.pug

在 fourth 的 li 后面添加 fifth：

```pug
- const { first , second, third, fourth, fifth } = main.ul
```

在 fourth 的 li 后面添加：

```pug
				li
					a(href=`${fifth.href}` aria-label=`${fifth.text}` target="_blank")
						i(class=`icon icon-${fifth.icon}`)
						span(data-translate=`${fifth.text}`) #{fifth.text}
```

### 2. config.json

在 main.ul 中添加 fifth：

```json
"fifth": {
    "href": "https://watermelontip.github.io/FolioSpace/",
    "icon": "other",
    "text": "Project"
}
```

### 3. 构建并推送

```bash
cd watermelontip.github.io
npm install
npx gulp build
git add -A
git commit -m "feat: add Project button linking to FolioSpace"
git push
```
