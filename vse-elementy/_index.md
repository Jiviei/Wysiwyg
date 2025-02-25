---
order: 1
title: Все элементы
private: true
---

## Block

### Lists

#### Order

-  Простой

-  Многомерный

   -  Список

      -   

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

[image:./_index.png::Подпись к рисунку:15.4589,9.89583,84.5411,90.1042::annotation,56.8571,17.6241,,bottom-right,&square,61.8393,45.3637,34.2857,34.6821,аннотация,top-left:]

#### OpenApi

[openapi:./_index.yaml:true]

#### Drawio

[drawio:./new-article.svg:подпись к drawio::]

#### Mermaid

[mermaid:./_index.mermaid:подпись к Merminaid]

[mermaid:./_index-2.mermaid:подпись к другой Merminaid]

#### PlantUML

[plant-uml:./_index.puml:подпись к PlantUML]

```plant-uml:подпись к PlantUML
@startuml
	Третий-->Первый: че ты, Первый?
	Первый-->Второй: че ты, Третий?
	Первый->Второй: че ты, Первый?
	Второй->Первый: че ты, Второй?
@enduml
```

#### Snippet

[snippet:snippet]

#### Video

[video:https://www.youtube.com/watch?v=c6B86zT-fpc&t=4434s:Подпись к видео]

[video:https://youtu.be/c6B86zT-fpc:]

[video:https://rutube.ru/vieo/f01e5419c27dbc7de93185d021883be9/:]

[video:https://drive.google.com/file/d/1RO9qIF_z1dQmJUKCgb-YaxdH5AaD3z9R/view?usp=drive_link:]

[video:https://mega.nz/file/CMVhFbBA#Isf5Yk5fVO2lPl_loeE_6C5OJtsDpRaq54BAeJ1u2NU:]

[video:https://www.dropbox.com/scl/fi/g5p98tguhiq94ou4rp0jd/Gramax-2024-07-29-14-41-30.mp4?rlkey=ig5lqyy9kkg2b6om583x4hj1j&st=przpthrx&dl=0:]

BlockMd

**Formula**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$

**Color**

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

| Простая |   | заголовок |
|---------|---|-----------|
|         |   |           |
| таблица |   | у таблицы |

|

{% table header="row" %}

---

*  Сложная

*  {% colwidth=[303] %}

   

*  {% colwidth=[200] %}

   заголовок

---

*  markdown

*  {% colspan=2 rowspan=2 colwidth=[303,200] %}

   тело

   у таблицы

---

*  таблица

{% /table %}

#### Note

:::note:true Заголовок

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

#### Include

[include:./drugaya-stranica]

## Inline

### Content

#### Italic

*Italic*

#### Strong

**Strong**

#### Strikethrough

~~Strikethrough~~

#### File

[localhost-1718261246743.log](./localhost-1718261246743-2)

#### Link

[Gramax](https://ics-it.gram.ax/)

#### Comment

[comment:QcgYI]Comment[/comment]

### NoContent

#### Icon

[icon:smile][icon:address-svgrepo-com]

#### InlineCode

`InlineCode`

#### InlineMd

**Formula**

$a$

[alfa] [beta]

[cmd:Cmd:smile:yellow]

[color:blue]Color blue[/color]

[issue:issue]

[kbd:kbd]

[who:who] [when:when]ф

### Fn

[fn:ics.account:Иван Иванов]