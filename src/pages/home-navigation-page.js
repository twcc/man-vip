import React from 'react';
import Layout from '@theme/Layout';
import {Link} from "react-router-dom";


export default function MyReactPage() {
  return (
    <Layout>
      <h1>TWCC Documentation</h1>
      <p>Find TWCC user guide, concepts, and more.</p>
	  <div>
		<h2>會員/計畫/帳務</h2>
	  </div>
	  <div>
		<h2>運算</h2>
			<p><Link
            to="/docs/intro">開發型容器</Link></p>
			<p>任務型容器</p>
			<p>HPC 高速運算任務</p>
			<p>虛擬運算服務</p>
			<p>台灣杉二號 (命令列介面)</p>
	  </div>
	  <div>
		<h2>儲存</h2>
	  </div>
	  <div>
		<h2>聯網與資安</h2>
	  </div>
	  <div>
		<h2>TWCC CLI</h2>
	  </div>
	  <div>
		<h2>人工智慧</h2>
	  </div>
    </Layout>
  );
}