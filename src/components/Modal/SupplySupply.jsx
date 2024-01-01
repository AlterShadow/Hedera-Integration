import ModalListItem from "./ModalListItem";

export default function SupplyBox() {
  return (
    <>
      <div className='popup-info-container'>
        <div className='main-info-container'>
          <div className='all-info'>
            <ModalListItem
              title='Supply APY'
              value='1.80%'
            />
            <ModalListItem
              title='Supply Balance'
              value='$10'
            />
            <ModalListItem
              title='Borrow Limit'
              value='$43'
            />
            <ModalListItem
              title='Borrow Usage'
              value='$0'
            />
          </div>
        </div>
      </div>
      <div className='buttons-container'>
        <div className='supply-buttons'>
          <button className='primary-btn'>1. Approve</button>
          <button className='primary-btn'>2. Supply</button>
        </div>
      </div>
    </>
  );
}
