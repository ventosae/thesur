import React from 'react';
import PropTypes from '../../utils/PropTypes';

const Claps = ({ className, count, onClap }) => (
  <div className={className}>
    <button type="button" className="flex items-center bg-gray-900 text-white py-1 px-4 border border-black rounded-md" onClick={onClap}>
      <span className="mr-2">
        {`👏`}
      </span>
      {count == null && (
        <svg class="inline animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {count != null && (
        <span className="text-sm">
          {`${count} claps`}
        </span>
      )}
    </button>
  </div>
);

Claps.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  onClap: PropTypes.func,
};

Claps.defaultProps = {
  className: '',
  count: null,
  onClap: null,
};

export default Claps;
