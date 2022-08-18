import { useEffect, useState } from 'react';

const useDate = (timestamp: string) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const date = new Date(timestamp).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
    });

    setTime(date);
  }, [timestamp]);

  return time;
};

export default useDate;
