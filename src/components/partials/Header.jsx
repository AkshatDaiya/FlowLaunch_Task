import React, { useContext, useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import ContextApi from "../../ContextApi";

function Header() {
  const { searchedName, setSearchedName } = useContext(ContextApi);
  const [tempSearch, setTempSearch] = useState(searchedName);

  const debouncedSetSearchedName = useCallback(
    debounce((value) => setSearchedName(value), 300),
    []
  );

  useEffect(() => {
    debouncedSetSearchedName(tempSearch);
    return () => {
      debouncedSetSearchedName.cancel();
    };
  }, [tempSearch, debouncedSetSearchedName]);

  return (
    <header className="bg-customLightBlue flex justify-between items-center px-8">
      <div>
        <h2 className="text-3xl font-bold m-2">MyLogo</h2>
      </div>

      <form
        className="focusRemove"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="text-lg p-1 rounded-md"
          placeholder="Search here"
          value={tempSearch}
          onChange={(e) => setTempSearch(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
