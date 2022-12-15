import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Translate, {translate} from '@docusaurus/Translate';
import { Link } from 'react-router-dom';

type LinkItem = {
  name: string; //JSX.Element,
  url: string;
}
type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description:  LinkItem[];
};

const FeatureList: FeatureItem[] = [
  {
    title: 'homepage.services.GPU.title',
    Svg: require('@site/static/img/GPGPU.svg').default,
    description: [
      // {
      //   name: 'homepage.services.GPU.start',
      //   url: 'docs/overview'
      // },
      {
        name: 'homepage.services.GPU.create',
        url: 'docs/user-guides/twcc/ccs-interactive-container/create-container'
      },
      {
        name: 'homepage.services.GPU.link',
        url: 'docs/user-guides/twcc/ccs-interactive-container/connect-to-container'
      },
      // {
      // name: 'homepage.services.GPU.training',
      // url: 'docs/overview'
      // }
    ]
  },
  {
    title: 'homepage.services.HPC.title',
    Svg: require('@site/static/img/HPC.svg').default,
    description: [
      // {
      //   name: 'homepage.services.HPC.start',
      //   url: 'docs/overview'
      // },
      {
        name: 'homepage.services.HPC.link',
        url: 'docs/user-guides/twcc/twnia2-hpc-cli/connection'
      },
      {
        name: 'homepage.services.HPC.queue',
        url: 'docs/user-guides/twcc/twnia2-hpc-cli/queues'
      },
      // {
      // name: 'homepage.services.HPC.cross',
      // url: 'docs/overview'
      // }
    ]
  },
  {
    title: 'homepage.services.VM.title',
    Svg: require('@site/static/img/VM.svg').default,
    description: [
      // {
      //   name: 'homepage.services.VM.start',
      //   url: 'docs/overview'
      // },
      {
        name: 'homepage.services.VM.create',
        url: 'docs/user-guides/twcc/vcs/create-instance'
      },
      {
        name: 'homepage.services.VM.link',
        url: 'docs/user-guides/twcc/vcs/connect-to-instance'
      },
      // {
      // name: 'homepage.services.VM.host',
      // url: 'docs/overview'
      // }
    ]
  },
  {
    title: 'homepage.services.HSS.title',
    Svg: require('@site/static/img/HSS.svg').default,
    description:  [
      // {
      //   name: 'homepage.services.HSS.start',
      //   url: 'docs/overview'
      // },
      {
        name: 'homepage.services.HSS.create',
        url: 'docs/user-guides/twcc/cos/create-delete-buckets'
      },
      {
        name: 'homepage.services.HSS.upload',
        url: 'docs/user-guides/twcc/cos/upload-download-files-create-folders'
      },
      // {
      // name: 'homepage.services.HSS.sync',
      // url: 'docs/overview'
      // }
    ]
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <h3><Translate>{title}</Translate></h3>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center flex-center">
        <ul className="text--left">
          {description.map(({name, url}, idx) => (
            <li><Link key={`link${idx}`} to={url}>
              <Translate>{name}</Translate>
            </Link></li>
          ))}
        </ul>
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
            <Feature key={`fea${idx}`} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}