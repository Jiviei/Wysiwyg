---
order: 1
title: Все элементы
---

## Block

### Lists

#### Order

-  Простой

-  Многомерный

   -  Список

      -   

#### Bullet

1. Простой

2. Многомерный Список

   1. a

      1. i

         1. 1

### Text

#### Heading

#### Paragraph

### NoContent

#### Image

[image:./_index.png:::15.4589,9.89583,84.5411,90.1042:]

#### OpenApi

[openapi:./_index.yaml:true]

#### Drawio

[drawio:./_index.svg:подпись к drawio]

#### Mermaid

[mermaid:./_index.mermaid:подпись к Merminaid]



[mermaid:./_index-2.mermaid:подпись к другой Merminaid]

#### PlantUML

[plant-uml:./_index.puml:подпись к PlantUML]

#### Snippet

[snippet:snippet]

#### Video

[video:https://www.youtube.com/watch?v=c6B86zT-fpc&t=4434s:Подпись к видео]

#### BlockMd

$$ A $$

[color:red]

Цветной

Блок

[/color]

#### BlockCode

```
.itemTitle {
	width: 100%;
	padding: 5px 10px;
	text-transform: uppercase;
	color: var(--color-loader);
	font-weight: 450;
	font-size: 12px;
}
```

### Content

#### Table

| Простая  |   | заголовок |
|----------|---|-----------|
| markdown |   | тело      |
| таблица  |   | у таблицы |

{% table %}

---

*  {% isHeader=true %}

   Сложная

*  {% colwidth=[303] isHeader=true %}

   

*  {% colwidth=[200] isHeader=true %}

   заголовок

---

*  {% isHeader=true %}

   markdown

*  {% colspan=2 rowspan=2 colwidth=[303,200] %}

   тело

   у таблицы

---

*  {% isHeader=true %}

   таблица

{% /table %}

#### Note

:::note Заголовок

Тело

:::

#### Tabs

[tabs]

[tab:Заголовок_1::]

Тело\_1

[/tab]

[tab:Заголовок_2::]

Тело\_2asdasd

[/tab]

[/tabs]

## Inline

### Content

#### Italic

*Italic*

#### Strong

**Strong**

#### Strikethrough

~~Strikethrough~~

#### File

[localhost-1718261246743.log](./localhost-1718261246743-2.log)

#### Link

[Gramax](https://ics-it.gram.ax/)

#### Comment

[comment:QcgYI]Comment[/comment]

### NoContent

#### Icon

[icon:smile]

#### InlineCode

`InlineCode`

#### InlineMd

$a$ [alfa]