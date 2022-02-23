---
id: tws-writing
title: TWS documentation
hide_title: false
hide_table_of_contents: false
sidebar_label: 🪵  - TWS
sidebar_position: 0
keywords:
  - tws
  - documentation
image: https://i.imgur.com/mErPwqL.png
slug: /tws-doc
---
# TWS 工作區

## How to build this enviorn.

1. install `node` according to your OS.
2. use [Visual Studio Code](https://code.visualstudio.com/) and terminal in it to run this service.
3. standard process will be 

```bash=
npm install
npm run start
```

4. it will pop up a url [http://localhost:3000](http://localhost:3000)


##  for Writing 

- [Markdown Features](https://docusaurus.io/docs/markdown-features)

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>

----

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** `alongside` my _JSX_!


import TOCInline from '@theme/TOCInline';
import CodeBlock from '@theme/CodeBlock';

The table of contents for this page, serialized:

<CodeBlock className="language-json">{JSON.stringify(toc, null, 2)}</CodeBlock>

The front matter of this page:

<ul>
  {Object.entries(frontMatter).map(([key, value]) => <li key={key}><b>{key}</b>: {value}</li>)}
</ul>

<p>The title of this page is: <b>{contentTitle}</b></p>


----

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="🍎 NCHC" default>
    This is an apple 
  </TabItem>

<TabItem value="Before">

```jsx title="src/pages/index.js"
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout>
      {/* highlight-next-line */}
      <h1>Welcome to my website</h1>
      <main>
        {/* highlight-start */}
        You can also visit my
        <Link to="https://docusaurus.io/blog">blog</Link>
        {/* highlight-end */}
        <img
          src="/img/home.png"
          // highlight-next-line
          alt="Home icon"
        />
      </main>
    </Layout>
  );
}
```
  </TabItem>

  <TabItem value="orange" label="🍊 TWS">

    This is an orange 

    ```
    code block
    ```


<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>

  </TabItem>
</Tabs>

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```


```bash npm2yarn
npm install --save remark-math@3 rehype-katex@4
```


:::note

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::