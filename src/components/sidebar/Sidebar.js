import React from "react";
import LocationsNav from "../locations-nav";

export default function Sidebar() {
  return (
    <aside>
      <div className="sidebar">
        <LocationsNav />
      </div>
    </aside>
  );
}
