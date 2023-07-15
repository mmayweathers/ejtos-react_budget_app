import React, { useState } from 'react';

function Currency() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };
    return(
<span>
<select value={ selectedValue } className="custom-select" id="inputGroupSelect01" onChange={handleDropdownChange}>
<option defaultvalue='$' >Dollar ($)</option>
<option value='€' >Euro</option>
<option value='GBP' > Pound</option>

</select>
</span>
    )
};
export default Currency;