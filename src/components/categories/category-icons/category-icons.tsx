import { sounds } from '@/data/sounds';
import { useMemo } from 'react';

import styles from './category-icons.module.css';

import { Container } from '@/components/container';

export default function CategoryIcons() {
  const categories = useMemo(() => sounds.categories, []);

  const goto = (id: string) => {
    const category = document.getElementById(`category-${id}`);
    category?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>选择声音</h2>
          <p>点击声音加入混音，也可以先选一个分类。</p>
        </div>

        <nav aria-label="声音分类" className={styles.categories}>
          {categories.map(category => (
            <button
              className={styles.category}
              key={category.id}
              onClick={() => goto(category.id)}
            >
              <span aria-hidden="true" className={styles.icon}>
                {category.icon}
              </span>
              <span>{category.title}</span>
            </button>
          ))}
        </nav>
      </div>
    </Container>
  );
}
