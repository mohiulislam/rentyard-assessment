import React, { FC, useState, useMemo } from "react";
import SearchBar from "../Form/SearchBar";
import { allAmenities } from "../../constants/amenities";
import AmenityPill from "../AmenityPill";

const AmenityForm: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAmenities = useMemo(() => {
    if (!searchQuery) {
      return allAmenities;
    }
    return allAmenities.filter((amenity) =>
      amenity.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <SearchBar
        placeholder="Search amenities"
        onSearchChange={setSearchQuery}
      />
      <div className="flex flex-wrap gap-3 max-h-[350px] overflow-y-auto pr-2">
        {filteredAmenities.map((amenity) => (
          <AmenityPill
            key={amenity.label}
            amenity={amenity}
            // Set 'Air conditioning' as selected by default, like in the screenshot
            initialSelected={amenity.label === "Air conditioning"}
          />
        ))}
      </div>
    </div>
  );
};

export default AmenityForm;
