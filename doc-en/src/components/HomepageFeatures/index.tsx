import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate>homepage.services.GPU.title</Translate>
    ),
    Svg: require('@site/static/img/GPGPU.svg').default,
    description: (
      <Translate>homepage.services.GPU.desc</Translate>
    ),
  },
  {
    title: (
      <Translate>homepage.services.HPC.title</Translate>
    ),
    Svg: require('@site/static/img/HPC.svg').default,
    description: (
      <Translate>homepage.services.HPC.desc</Translate>
    ),
  },
  {
    title: (
      <Translate>homepage.services.VM.title</Translate>
    ),
    Svg: require('@site/static/img/VM.svg').default,
    description: (
      <Translate>homepage.services.VM.desc</Translate>
    ),
  },
  {
    title: (
      <Translate>homepage.services.HSS.title</Translate>
    ),
    Svg: require('@site/static/img/HSS.svg').default,
    description: (
      <Translate>homepage.services.HSS.desc</Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
