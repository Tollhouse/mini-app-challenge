import { useState } from 'react';

function WatchwButtons({ data }) {

  return (
    <>
        <div>
            {data.map((item) => (
            <div>
                <p>{item.title}</p>
                <div>Watched</div>
                <input type="checkbox"/>
                <div>On Wishlist</div>
                <input type="checkbox"/>
            </div>
            ))}
        </div>

    </>
  );
}

export default WatchwButtons;