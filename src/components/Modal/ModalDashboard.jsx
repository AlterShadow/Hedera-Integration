export default function ModalDashboard({ bal, coinType, max }) {
  return (
    <div className='info-dashboard-section'>
      <h2 className='dashboard-main-balance'>{bal}</h2>
      <div className='dashboard-mini-info'>
        <p className='max'>{max && <button>Max</button>}</p>
        <p>{coinType}</p>
        <p className='mini-info-balance'>~${bal}</p>
      </div>
    </div>
  );
}
