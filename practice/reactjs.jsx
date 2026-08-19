import React, { useState } from "react";

const ThemeController = () => {
  const [isActive, setIsActive] = useState(false);
  const [themeMode, setThemeMode] = useState("dark");

  // =====================================================================
  // 🛑 JS LOGIC: Test your variable resolution and query extraction here
  // =====================================================================
  const handleGenerate = () => {
    // 1. Hover on "palette-container" -> Should find the outer div
    const container = document.querySelector(".palette-container");

    // 2. Hover on "generate-btn" -> Should find the button by ID
    const btn = document.getElementById("generate-btn");

    // 3. Hover on "action-submit" -> Should find the button by data attribute!
    const targetAction = document.querySelector(
      '[data-testid="action-submit"]',
    );

    setIsActive(!isActive);
  };

  // =====================================================================
  // 🛑 JSX DOM: Test your hierarchy and template literal boundaries here
  // =====================================================================
  return (
    // 4. Standard React className
    <div className="palette-container">
      {/* 5. Dynamic Template Literal: Hover on 'active-state' or 'inactive-state' */}
      <div
        className={`theme-wrapper ${themeMode} ${isActive ? "active-state" : "inactive-state"}`}
      >
        {/* 6. ID, Data-Attribute, and standard class targeting */}
        <button
          id="generate-btn"
          data-testid="action-submit"
          className="base-button primary-action"
          onClick={handleGenerate}
        >
          Generate Colors
        </button>
      </div>
    </div>
  );
};

export default ThemeController;
