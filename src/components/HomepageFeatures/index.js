import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: ' ',
    Svg: require('@site/static/img/mk.svg').default,
    description: (
      <font size="4">
        <strong><a href="docs/mk"><code>‧ Kiri Mononobe ‧</code></a></strong>
      </font>
    ),
  },
  {
    title: ' ',
    Svg: require('@site/static/img/ra.svg').default,
    description: (
      <font size="4">
        <strong><a href="docs/ra"><code>‧ Arvo Ru ‧</code></a></strong>
      </font>
    ),
  },
  {
    title: ' ',
    Svg: require('@site/static/img/pd.svg').default,
    description: (
      <font size="4">
        <strong><a href="docs/pd"><code>‧ Denarius Pineau ‧</code></a></strong>
      </font>
    ),
  },
  {
    title: ' ',
    Svg: require('@site/static/img/cm.svg').default,
    description: (
      <font size="4">
        <strong><a href="docs/cm"><code>‧ CrypSNN ‧</code></a></strong>
      </font>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
