import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getSampleDetailsData } from '../../store/actions/sampleAction';

const Details = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const sampleListData = useSelector((state) => state.sampleDetails);
  const { sample, loading } = sampleListData;

  useEffect(() => {
    dispatch(getSampleDetailsData(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{sample.name}</h1>
      <p>{sample.username}</p>
      <p>{sample.email}</p>
      <p>{sample.address.city}</p>
    </div>
  );
};

export default Details;
