import Statistics from "./Statistics/Statistics";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
        backgroundColor: '#E3D1C5'
      }}
    >
      <Statistics />
      
    </div>
  );
};
