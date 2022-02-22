import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'HPC 高速運算服務',
    Svg: require('../../static/img/twcc/HPC-HPC.svg').default,
    description: (
      <>
         全國最大、完整且經典的高速運算 GPU 叢集服務。協助您專注在平行計算應用之上，只需利用 TWCC HPC 高速運算服務，大量的 GPU 搭配 100Gbps 高性能低延遲內部互連網路，可依您所需的計算資源配置，批次高效地完成所需的計算工作。
      </>
    ),
  },
  {
    title: 'CCS 容器運算服務',
    Svg: require('../../static/img/twcc/CCS-GPGPU.svg').default,
    description: (
      <>
        提供全網最佳的全託管 AI 計算環境。具完整的容器管理環境，搭配超級電腦的高速算力，與儲存空間完美整合。只需輕鬆點擊，即可快速獲得來自 NGC 的完整優化 AI 運算環境。
      </>
    ),
  },
  {
    title: 'HFS 高速檔案系統',
    Svg: require('../../static/img/twcc/HFS-HFS.svg').default,
    description: (
      <>
        提供 TWCC 獨具，專為 AIHPC 所設計的全託管的檔案系統。不需費心自行管理檔案系統，同時支援 TWCC HPC 與 CCS 服務，滿足各式 AI 與 HPC 運算需求。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
