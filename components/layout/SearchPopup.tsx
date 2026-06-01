'use client';

/**
 * Search overlay. Markup from unipix-Main/index.html lines 1146–1156.
 * Shown/hidden by jQuery click handlers attached in main.js (searchOption).
 */
export default function SearchPopup() {
  return (
    <div className="search-input-area">
      <div className="container">
        <div className="search-input-inner">
          <div className="input-div">
            <input
              className="search-input autocomplete ui-autocomplete-input"
              type="text"
              placeholder="Search by keyword or #"
              autoComplete="off"
            />
            <button type="button">
              <i className="far fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="close" className="search-close-icon">
        <i className="far fa-times"></i>
      </div>
    </div>
  );
}
