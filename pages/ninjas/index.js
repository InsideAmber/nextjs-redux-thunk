import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSampleData } from '../../store/actions/sampleAction';
import styles from '../../styles/Ninjas.module.css';

const Ninjas = () => {
  const dispatch = useDispatch();
  const sampleListData = useSelector((state) => state.sampleData);
  const { sample, loading } = sampleListData;
  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch]);
  console.log('data', sampleListData);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>All Ninjas</h1>
      {sample.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
