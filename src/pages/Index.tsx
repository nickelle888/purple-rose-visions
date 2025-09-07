// Removed component imports for testing

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <div style={{ background: 'red', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: 'white', fontSize: '2rem' }}>TEST - APP IS WORKING</h1>
    </div>
  );
};

export default Index;
