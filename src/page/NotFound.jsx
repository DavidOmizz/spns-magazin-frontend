import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '15%' }}>
      <h1 className='font-extrabold text-9xl'>404</h1>
      <p className='text-3xl'>Page not found.</p>
      <button className='bg-[#b3976b] text-white px-6 py-2 mt-5 rounded-full text-lg font-semibold hover:bg-[#724f17] transition duration-300' onClick={() => navigate('/')} >Go Home</button>
    </div>
  );
}

export default NotFound;
